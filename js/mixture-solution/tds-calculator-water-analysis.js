
let unitArray = [
    {name: "grams per liter", value: "g/L"},
    {name: "milligrams per liter", value: "mg/L"},
    {name: "grams per milliliter", value: "g/ml"},
    {name: "parts per million", value: "ppm"},
    {name: "parts per billion", value: "ppb"}
];
const inputs = [];
const dropdowns = [];

for (let i = 1; i <= 20; i++) {
    inputs.push(document.getElementById(`input${i}`));
    dropdowns.push(document.getElementById(`inputdrop${i}`));
}

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;


dropdowns.forEach((dropdown) => {
    // Clear previous options
    while (dropdown.firstChild) {
        dropdown.removeChild(dropdown.firstChild);
    }
    
    unitArray.forEach((option) => {
        let opt = document.createElement("option");
        opt.value = option.value;
        opt.text = option.name;
        // Set default selected value
        if (option.value === "mg/L") {
            opt.selected = true;
        }
        dropdown.add(opt);
    });
});

// Event listener for the button
calcBtn.addEventListener("click", function() {
    let totalTDS = 0;
    let totalCations = 0;
    let totalAnions = 0;

    // Define which inputs belong to cations and which to anions
    const cationInputs = inputs.slice(10); // Inputs 11 to 20
    const anionInputs = inputs.slice(0, 10); // Inputs 1 to 10

  //  const allDropdowns = [inputdrop1, inputdrop2, inputdrop3, inputdrop4, inputdrop5, inputdrop6, inputdrop7, inputdrop8, inputdrop9, inputdrop10, inputdrop11, inputdrop12, inputdrop13, inputdrop14, inputdrop15, inputdrop16, inputdrop17, inputdrop18, inputdrop19, inputdrop20];

    // Calculate for cations
    for (let i = 0; i < cationInputs.length; i++) {
        const concentration = parseFloat(cationInputs[i].value) || 0;  // Default to 0 if NaN or empty
        const unit = dropdowns[i + 10].value;

        totalCations += convertToMgL(concentration, unit);
    }

    // Calculate for anions
    for (let i = 0; i < anionInputs.length; i++) {
        const concentration = parseFloat(anionInputs[i].value) || 0;  // Default to 0 if NaN or empty
        const unit = dropdowns[i].value;

        totalAnions += convertToMgL(concentration, unit);
    }

    totalTDS = totalCations + totalAnions;

    // Calculate the anion-cation balance percentage
    const balancePercentage = ((Math.abs(totalCations - totalAnions)) / totalTDS) * 100;

    // Display the results
   // resultSection.style.display = "block";
    result.textContent = `Total Dissolved Solids (TDS): ${totalTDS.toFixed(2)} mg/L. The current anion-cation balance is ${balancePercentage.toFixed(2)}%.`;

    if (balancePercentage > 10) {
        result.textContent += " For percentages greater than 10% check your input values. Click on the Advanced mode button for details about the sum of anions and cations in mEq/L.";
    }
});

function convertToMgL(concentration, unit) {
    switch(unit) {
        case "g/L":
            return concentration * 1000;
        case "ppm":
            return concentration; // ppm is equivalent to mg/L for water
        case "ppb":
            return concentration / 1000;
        case "g/ml":
            return concentration * 1000000; // assuming water density is 1 g/mL
        default: // assuming "mg/L" and any other cases
            return concentration;
    }
}

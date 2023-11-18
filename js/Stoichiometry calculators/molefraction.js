let molarUnits = [
    { value: "M", name: "molars" },
    { value: "mM", name: "millimolars" },
    { value: "µM", name: "micromolars" },
    { value: "nM", name: "nanomolars" },
    { value: "pM", name: "picomolars" }
];

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
//let input3 = document.getElementById("input3");

let inputdrop1 = document.getElementById("inputdrop1");
let inputdrop2 = document.getElementById("inputdrop2");
//let inputdrop3 = document.getElementById("inputdrop3");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

// Define a function to calculate the mole fraction
function calculate() {
    const molesSolute = parseFloat(input1.value);
    const molesSolventOrTotal = parseFloat(input2.value);
    const unit = inputdrop1.value;

    // Convert input values to standard unit (moles)
    const molesSoluteStandard = convertToStandardUnit(molesSolute, unit);
    const molesSolventOrTotalStandard = convertToStandardUnit(molesSolventOrTotal, unit);

    if (!isNaN(molesSoluteStandard) && !isNaN(molesSolventOrTotalStandard) && molesSoluteStandard >= 0 && molesSolventOrTotalStandard >= 0) {
        const moleFraction = molesSoluteStandard / (molesSoluteStandard + molesSolventOrTotalStandard);

        // Display the result with four decimal places
        result.textContent = `Mole Fraction of Solute: ${moleFraction.toFixed(4)}`;
    } else {
        alert("Please enter valid moles for Solute and Solvent/Total Moles.");
    }
}

// Add event listener to the "Calculate" button
calcBtn.addEventListener("click", calculate);
calcBtn.style.background = 'black'

// Initialize the dropdowns with options and default values
molarUnits.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop1.add(opt);
    inputdrop2.add(opt.cloneNode(true));
 //   inputdrop3.add(opt.cloneNode(true));
    inputdrop1.value = "M";
    inputdrop2.value = "M";
  //  inputdrop3.value = "M";
});

// Function to convert units to the standard unit (moles)
function convertToStandardUnit(value, unit) {
    switch (unit) {
        case "M":
            return value;
        case "mM":
            return value * 1e-3;
        case "µM":
            return value * 1e-6;
        case "nM":
            return value * 1e-9;
        case "pM":
            return value * 1e-12;
        default:
            return value;
    }
}
console.log(247)
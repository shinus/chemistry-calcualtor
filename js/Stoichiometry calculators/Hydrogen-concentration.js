let molarUnits = [
    { value: "M", name: "molars" },
    { value: "mM", name: "millimolars" },
    { value: "µM", name: "micromolars" },
    { value: "nM", name: "nanomolars" },
    { value: "pM", name: "picomolars" }
];

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

let inputdrop3 = document.getElementById("inputdrop3");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.addEventListener("click", calculate);
calcBtn.style.background = 'black';

molarUnits.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop3.add(opt);
    inputdrop3.value = "M";
});

function calculate() {
    const pH = parseFloat(input1.value);
    const pOH = parseFloat(input2.value);
    const unit = inputdrop3.value;

    if (!isNaN(pH) && pH >= 0) {
        // Calculate pOH if pH is provided
        const calculatedPOH = 14 - pH;
        input2.value = calculatedPOH.toFixed(2); // Display pOH up to 2 decimal places

        // Calculate hydrogen ion concentration ([H+]) using pH: [H+] M = 10^(-pH)
        const concentration = Math.pow(10, -pH);

        // Convert the concentration to the selected unit and display
        const convertedConcentration = convertToStandardUnit(concentration, unit);
        result.textContent = convertedConcentration.toFixed(4); // Display concentration up to 4 decimal places
    } else if (!isNaN(pOH) && pOH >= 0) {
        // Calculate pH if pOH is provided
        const calculatedpH = 14 - pOH;
        input1.value = calculatedpH.toFixed(2); // Display pH up to 2 decimal places

        // Calculate hydrogen ion concentration ([H+]) using pOH: [H+] M = 10^(-pOH)
        const concentration = Math.pow(10, -pOH);

        // Convert the concentration to the selected unit and display
        const convertedConcentration = convertToStandardUnit(concentration, unit);
        result.innerText = convertedConcentration.toFixed(4); // Display concentration up to 4 decimal places
    } else {
        alert("Please enter a valid pH or pOH value.");
    }
}

function convertToStandardUnit(value, unit) {
    switch (unit) {
        case "M":
            return value;
        case "mM":
            return value * 1e3;
        case "µM":
            return value * 1e6;
        case "nM":
            return value * 1e9;
        case "pM":
            return value * 1e12;
        default:
            return value;
    }
}

console.log(8)

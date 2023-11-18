
let dropdowngrams = [
    { value: "wg", name: "micrograms (wg)" },
    { value: "mg", name: "milligrams (mg)" },
    { value: "g", name: "grams (g)" },
    { value: "dag", name: "decagrams (dag)" },
    { value: "kg", name: "kilograms (kg)" },
    { value: "t", name: "metric tons (t)" },
    { value: "gr", name: "grains (gr)" },
    { value: "dr", name: "drachms (dr)" },
    { value: "oz", name: "ounces (oz)" },
    { value: "lb", name: "pounds (lb)" }
];


let dropdownMolalityUnits = [
    { value: "mol_per_wg", name: "mol per micrograms (wg)" },
    { value: "mol_per_mg", name: "mol per milligrams (mg)" },
    { value: "mol_per_g", name: "mol per grams (g)" },
    { value: "mol_per_dag", name: "mol per decagrams (dag)" },
    { value: "mol_per_kg", name: "mol per kilograms (kg)" },
    { value: "mol_per_t", name: "mol per metric tons (t)" },
    { value: "mol_per_gr", name: "mol per grains (gr)" },
    { value: "mol_per_dr", name: "mol per drachms (dr)" },
    { value: "mol_per_oz", name: "mol per ounces (oz)" },
    { value: "mol_per_lb", name: "mol per pounds (lb)" }
];


let moles_of_solute = document.getElementById("input1");
let mass_of_solvent = document.getElementById("input2");
let molality = document.getElementById("input3");
let inputdrop2 = document.getElementById("inputdrop2");
let inputdrop3 = document.getElementById("inputdrop3");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");


calcBtn.addEventListener("click", calculate);
calcBtn.style.background = 'black';

dropdowngrams.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop2.add(opt);
    inputdrop2.value = "kg"
});

dropdownMolalityUnits.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop3.add(opt);
    inputdrop3.value = "mol_per_kg"
});

function convertToStandardGrams(value, unit) {
    switch (unit) {
        case "wg":
            return value * 1e-6;
        case "mg":
            return value * 1e-3;
        case "g":
            return value;
        case "dag":
            return value * 10;
        case "kg":
            return value * 1e3;
        case "t":
            return value * 1e6;
        case "gr":
            return value * 0.0647989;
        case "dr":
            return value * 1.77185;
        case "oz":
            return value * 28.3495;
        case "lb":
            return value * 453.592;
        case "stone":
            return value * 6350.29;
        case "US ton":
            return value * 907184.74;
        case "Long ton":
            return value * 1016046.91;
        case "oz t":
            return value * 31.1035;
        default:
            return value;
    }
}

// Add event listeners to inputs and dropdowns
moles_of_solute.addEventListener("input", autoCalculate);
mass_of_solvent.addEventListener("input", autoCalculate);
inputdrop2.addEventListener("change", autoCalculate);
inputdrop3.addEventListener("change", autoCalculate);


function autoCalculate() {
    if (moles_of_solute.value && mass_of_solvent.value) {
        calculate();
    }
}

function calculate() {
    let solute_moles = parseFloat(moles_of_solute.value);
    let solvent_mass_standard = convertToStandardGrams(parseFloat(mass_of_solvent.value), inputdrop2.value); // Convert to grams

    // Compute molality: molality = moles of solute / mass of solvent (in kg)
    let computed_molality = solute_moles / (solvent_mass_standard / 1000); // divide by 1000 to convert grams to kg
    
    // Convert the computed molality to the selected molality unit
    let converted_molality = convertToSelectedMolalityUnit(computed_molality, inputdrop3.value);
    
    molality.value = converted_molality.toFixed(2);
}

function convertToSelectedMolalityUnit(value, unit) {
    switch (unit) {
        case "mol_per_wg":
            return value / 1e-6;
        case "mol_per_mg":
            return value / 1e-3;
        case "mol_per_g":
            return value;
        case "mol_per_dag":
            return value / 10;
        case "mol_per_kg":
            return value / 1e3;
        case "mol_per_t":
            return value / 1e6;
        case "mol_per_gr":
            return value / 0.0647989;
        case "mol_per_dr":
            return value / 1.77185;
        case "mol_per_oz":
            return value / 28.3495;
        case "mol_per_lb":
            return value / 453.592;
        default:
            return value;
    }
}



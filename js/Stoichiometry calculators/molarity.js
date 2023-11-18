let molarUnits = [
    { value: "M", name: "molars" },
    { value: "mM", name: "millimolars" },
    { value: "µM", name: "micromolars" },
    { value: "nM", name: "nanomolars" },
    { value: "pM", name: "picomolars" }
];

let gmunits = [
    { value: "g", name: "gram" },
    { value: "kg", name: "kilogram" },
    { value: "oz", name: "ounce" },
    { value: "µg", name: "microgram" },
    { value: "mg", name: "milligram" },
    { value: "dag", name: "decagram" },
    { value: "ton", name: "metric ton" },
    { value: "lb", name: "pound" },
];

let densityUnits = [
    { value: "kg/m3", name: "kilograms per cubic meter (kg/m³)" },
    { value: "kg/dm3", name: "kilograms per cubic decimeter (kg/dm³)" },
    { value: "kg/L", name: "kilograms per liter (kg/L)" },
    { value: "g/mL", name: "grams per milliliter (g/mL)" },
    { value: "t/m3", name: "tons per cubic meter (t/m³)" },
    { value: "g/cm3", name: "grams per cubic cm (g/cm³)" },
    { value: "oz/cu in", name: "ounces per cubic inch (oz/cu in)" },
    { value: "lb/cu in", name: "pounds per cubic inch (lb/cu in)" },
    { value: "lb/cu ft", name: "pounds per cubic feet (lb/cu ft)" }
];

let molunitsdrop1 = [
    { value: 'g/mol', name:'g/mol'}
];

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

let inputdrop1 = document.getElementById("inputdrop1");
let inputdrop2 = document.getElementById("inputdrop2");
let inputdrop3 = document.getElementById("inputdrop3");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.addEventListener("click", calculate);
calcBtn.style.background = 'black';

molunitsdrop1.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop1.add(opt);

});

densityUnits.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop2.add(opt);
});

// Set initial values for the dropdWowns
inputdrop1.value = "g/mol";
inputdrop2.value = "g/mL";

function calculate() {
    const molarMass = parseFloat(input1.value);
    const concentration = parseFloat(input2.value);
    const molarMassUnit = inputdrop1.value;
    const concentrationUnit = inputdrop2.value;

    // Convert molar mass and concentration to standard units
    const molarMassInGramsPerMole = convertToGrams(molarMass, molarMassUnit);
    const concentrationInGrams = convertToGrams(concentration, concentrationUnit);

    // Calculate molarity
    const molarity = concentrationInGrams / molarMassInGramsPerMole;

    // Display the result
    result.textContent = molarity.toFixed(4) + " M";
}

function convertToGrams(value, unit) {
    switch (unit) {
        case "g":
            return value;
        case "kg":
            return value * 1000;
        case "oz":
            return value * 28.3495;
        case "µg":
            return value * 1e-6;
        case "mg":
            return value * 1e-3;
        case "dag":
            return value * 10;
        case "ton":
            return value * 1e6;
        case "lb":
            return value * 453.592;
        default:
            return value;
    }
}

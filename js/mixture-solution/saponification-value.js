let dropdownmeter = [
    { value: "mm3", name: "cubic millimeters" },
    { value: "cm3", name: "cubic centimeters" },
    { value: "dm3", name: "cubic decimeters" },
    { value: "m3", name: "cubic meters" },
    { value: "cu in", name: "cubic inches" },
    { value: "cu ft", name: "cubic feet" },
    { value: "cu yd", name: "cubic yards" },
    { value: "ml", name: "milliliters" },
    { value: "cl", name: "centiliters" },
    { value: "liters", name: "liters" },
    { value: "US gal", name: "gallons (US)" },
    { value: "UK gal", name: "gallons (UK)" },
    { value: "US fl oz", name: "fluid ounces (US)" },
    { value: "UK fl oz", name: "fluid ounces (UK)" },
    { value: "cups", name: "US customary cups" },
    { value: "tbsp", name: "tablespoons (15ml)" },
    { value: "tsp", name: "teaspoons (5ml)" },
    { value: "US qt", name: "quarts (US)" },
    { value: "UK qt", name: "quarts (UK)" },
    { value: "US pt", name: "pints (US)" },
    { value: "UK pt", name: "pints (UK)" }
];
  
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
    { value: "lb", name: "pounds (lb)" },
    { value: "stone", name: "stones (stone)" },
    { value: "US ton", name: "US short tons (US ton)" },
    { value: "Long ton", name: "imperial tons (Long ton)" },
    { value: "oz t", name: "troy ounce (oz t)" }
];

let molarityUnits = [
    { value: "mol/mm3", name: "mol/cubic millimeters" },
    { value: "mol/cm3", name: "mol/cubic centimeters" },
    { value: "mol/dm3", name: "mol/cubic decimeters" },
    { value: "mol/ml", name: "mol/milliliters" },
    { value: "mol/cl", name: "mol/centiliters" },
    { value: "mol/l", name: "mol/liters" }
];

function calculatehardness() {
    let B = parseFloat(input1.value);
    let S = parseFloat(input2.value);
    let M = parseFloat(input3.value);
    let W = parseFloat(input4.value);

    let BUnit = convertVolumeToLiters(1, inputdrop1.value);
    let SUnit = convertVolumeToLiters(1, inputdrop2.value);
    let MUnit = convertVolumeToLiters(1, inputdrop3.value);
    let WUnit = convertWeightToGrams(1, inputdrop4.value);

    // Convert to standard units
    B *= BUnit;
    S *= SUnit;
    M *= MUnit;
    W *= WUnit;

    // Calculate Saponification Value (SV)
    let SV = (56.1 * M * (B - S)) / W;

    result.textContent = `Saponification value (SV): ${SV.toFixed(2)} mg/g`;
}

// Convert volume to liters
function convertVolumeToLiters(value, unit) {
    switch (unit) {
        case "mm3":
            return value * 1e-6;
        case "cm3":
            return value * 1e-3;
        case "m3":
            return value * 1e3;
        case "cu in":
            return value * 0.0163871;
        case "cu ft":
            return value * 28.3168;
        case "ml":
            return value * 1e-3;
        case "liters":
            return value;
        case "US gal":
            return value * 3.78541;
        case "UK gal":
            return value * 4.54609;
        default:
            return value;
    }
}

// Convert weight to grams
function convertWeightToGrams(value, unit) {
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

// Calculation function
function calculateSaponificationValue() {
    let B = parseFloat(input1.value);
    let S = parseFloat(input2.value);
    let M = parseFloat(input3.value);
    let W = parseFloat(input4.value);

    let BUnit = convertVolumeToLiters(1, inputdrop1.value);
    let SUnit = convertVolumeToLiters(1, inputdrop2.value);
    let MConversionFactor = 1 / convertVolumeToLiters(1, inputdrop3.value.split("/")[1]);
    let WUnit = convertWeightToGrams(1, inputdrop4.value);

    B *= BUnit;
    S *= SUnit;
    M *= MConversionFactor;
    W *= WUnit;

    let SV = (56.1 * M * (B - S)) / W;

    result.textContent = `Saponification value (SV): ${SV.toFixed(2)} mg/g`;
}

// Input elements
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const calcBtn = document.getElementById("calcBtn");
const result = document.getElementById("result-section");

// Dropdown elements
const inputdrop1 = document.getElementById('inputdrop1');
const inputdrop2 = document.getElementById('inputdrop2');
const inputdrop3 = document.getElementById('inputdrop3');
const inputdrop4 = document.getElementById('inputdrop4');

// Add event listener to the calculate button
calcBtn.addEventListener("click", calculateSaponificationValue);

// Populate dropdowns
function populateDropdown(dropdown, values) {
    values.forEach(listitem => {
        let option = document.createElement("option");
        option.value = listitem.value;
        option.text = `${listitem.value} - ${listitem.name}`;
        dropdown.add(option);
    });
}

populateDropdown(inputdrop1, dropdownmeter);
populateDropdown(inputdrop2, dropdownmeter);
populateDropdown(inputdrop3, molarityUnits);
populateDropdown(inputdrop4, dropdowngrams);

// Set default values for dropdowns
inputdrop1.value = "dm3";
inputdrop2.value = "dm3";
inputdrop3.value = "mol/l";
inputdrop4.value = "g";

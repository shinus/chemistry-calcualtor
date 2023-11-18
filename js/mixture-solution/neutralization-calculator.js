let dropdownliter = [
    { value: "mm3", name: "cubic millimeters (mm3)" },
    { value: "cm3", name: "cubic centimeters (cm3)" },
    { value: "m3", name: "cubic meters (m3)" },
    { value: "cu in", name: "cubic inches (cu in)" },
    { value: "cu ft", name: "cubic feet (cu ft)" },
    { value: "ml", name: "milliliters (ml)" },
    { value: "liters", name: "liters" },
    { value: "US gal", name: "gallons (US) (US gal)" },
    { value: "UK gal", name: "gallons (UK) (UK gal)" },
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
  
let dropdowngrams_per_eq = [
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

console.log('js working')

let input1 = document.getElementById("input1");
let inputdrop1 = document.getElementById("inputdrop1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");
let inputdrop2 = document.getElementById("inputdrop2");
let inputdrop3 = document.getElementById("inputdrop3");
let inputdrop4 = document.getElementById("inputdrop4");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;


calcBtn.addEventListener("click", calculateNormality);
calcBtn.style.background = "black";

dropdowngrams.forEach((listitem) => {
  let option = document.createElement("option");
  option.value = listitem.value;
  option.text = `${listitem.value} - ${listitem.name}`;
  inputdrop1.add(option);
  inputdrop1.value = "g";
});

dropdownliter.forEach((listitem) => {
  let option = document.createElement("option");
  option.value = listitem.value;
  option.text = `${listitem.value} - ${listitem.name}`;
  inputdrop2.add(option);
  inputdrop2.value = "liters";
});


dropdowngrams_per_eq.forEach((listitem) => {
  let option = document.createElement("option");
  option.value = listitem.value;
  option.text = `${listitem.value} - ${listitem.name}`;
  inputdrop3.add(option);
  inputdrop3.value = "g";
});

// ... [previous definitions]

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

function convertToStandardLiters(value, unit) {
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

function calculateNormality() {
    const weightOfSolute = convertToStandardGrams(parseFloat(input1.value), inputdrop1.value);
    const volumeOfSolvent = convertToStandardLiters(parseFloat(input2.value), inputdrop2.value);
    const equivalentWeight = convertToStandardGrams(parseFloat(input3.value), inputdrop3.value);

    const normality = weightOfSolute / (volumeOfSolvent * equivalentWeight);
    result.textContent = "Normality: " + normality.toFixed(4) + " N";
}

// Trigger calculation on button click
calcBtn.addEventListener("click", calculateNormality);

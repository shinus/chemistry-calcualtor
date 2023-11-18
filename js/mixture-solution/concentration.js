const dropdownDensity = [
    { value: "g/l", name: "grams per/liters" },
    { value: "kg/l", name: "kilogram/liters" },
    { value: "mg/l", name: "miligram/liter" }
];

const dropdownMolarity = [
    { value: "molar", name: "molar" },
    { value: "minimolar", name: "minimolar" },
    { value: "macromolar", name: "macromolar" }
]

const dropdownResultUnits = [
    { value: "kg", name: "kilogram" },
    { value: "g", name: "gram" },
    { value: "mg", name: "miligram" }
];
console.log('23')

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
let inputdrop5 = document.getElementById("inputdrop5");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

input2.placeholder = 'g/mol'
input4.placeholder = 'wt/wt %'
console.log("code v6");

calcBtn.addEventListener("click", calculateMass);
calcBtn.style.background = "black";

dropdownDensity.forEach((listitem) => {
  let option = document.createElement("option");
  option.value = listitem.value;
  option.text = `${listitem.value} - ${listitem.name}`;
  inputdrop1.add(option);
  inputdrop1.value = "kg/l";
});

dropdownMolarity.forEach((listitem) => {
  let option = document.createElement("option");
  option.value = listitem.value;
  option.text = `${listitem.value} - ${listitem.name}`;
  inputdrop3.add(option);
  inputdrop3.value = "molar";
});

dropdownResultUnits.forEach((listitem) => {
    let option = document.createElement("option");
    option.value = listitem.value;
    option.text = `${listitem.name}`;
    inputdrop5.add(option);
    inputdrop5.value = 'kg'
});

inputdrop5.addEventListener('change', updateResultUnit);

function updateResultUnit() {
    const currentResult = parseFloat(result.innerText);
    if (isNaN(currentResult)) {
        alert("Please ensure all inputs are valid and calculate before changing result units.");
        return;
    }

    switch(inputdrop5.value) {
        case 'kg':
            result.innerText = (currentResult * 0.001).toFixed(4);
            break;
        case 'mg':
            result.innerText = (currentResult * 1000).toFixed(4);
            break;
        default: // For 'g', it remains the same
            result.innerText = currentResult.toFixed(4);
            break;
    }
}


function convertToStandardDensity(value, unit) {
    switch(unit) {
        case 'kg/l': return value * 1000;
        case 'mg/l': return value / 1000;
        default: return value; // for g/l
    }
}

function convertToStandardMolarity(value, unit) {
    switch(unit) {
        case 'minimolar': return value / 1000;
        case 'macromolar': return value * 1000;
        default: return value; // for molar
    }
}


// Function to update results dynamically
function updateResults() {
  let filledInputs = 0;

  if (input1.value) filledInputs++;
  if (input2.value) filledInputs++;
  if (input3.value) filledInputs++;
  if (input4.value) filledInputs++;

  if (filledInputs === 3) {
    calculatebuffer();
  }
}
// ... [rest of the code, no changes]

function calculateMass() {
    // Check for empty inputs first
    if (!input1.value || !input2.value || !input3.value || !input4.value) {
        alert("Please fill in all inputs before calculating.");
        return;
    }

    // Get values from inputs
    const density = parseFloat(input1.value);
    const densityUnit = inputdrop1.value;
    const molarMass = parseFloat(input2.value);
    const molarity = parseFloat(input3.value);
    const molarityUnit = inputdrop3.value;
    const percentageConcentration = parseFloat(input4.value);

    // Convert to standard units
    const standardDensity = convertToStandardDensity(density, densityUnit);
    const standardMolarity = convertToStandardMolarity(molarity, molarityUnit);

    // Calculate mass per 100g H2O
    const wtPercent = (standardMolarity * 100 * molarMass) / standardDensity;
    const massSolute = (wtPercent * 100) / 100;
    const resultcal = (massSolute * 100) / (100 - massSolute);

    // Display the result
    result.innerText = resultcal.toFixed(4);
}

// Function to update results dynamically
function updateResults() {
  let filledInputs = 0;

  if (input1.value) filledInputs++;
  if (input2.value) filledInputs++;
  if (input3.value) filledInputs++;
  if (input4.value) filledInputs++;

  if (filledInputs === 4) {
    calculateMass();
  }
}

// Trigger calculation on button click
calcBtn.addEventListener("click", calculateMass);

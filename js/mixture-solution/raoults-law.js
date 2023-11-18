let pressureUnits = [
    { value: "Pa", name: "pascals (Pa)" },
    { value: "bar", name: "bars (bar)" },
    { value: "psi", name: "pounds per square inch (psi)" },
    { value: "at", name: "technical atmospheres (at)" },
    { value: "atm", name: "standard atmospheres (atm)" },
    { value: "Torr", name: "torr (Torr)" },
    { value: "kPa", name: "kilopascals (kPa)" },
    { value: "mmHg", name: "millimeters of mercury (mmHg)" }
];

let moleUnits = [
    { value: "mol", name: "moles (mol)" },
    { value: "mmol", name: "millimoles (mmol)" },
    { value: "μmol", name: "micromoles (μmol)" } 
];


let input1 = document.getElementById("input1");
let inputdrop1 = document.getElementById("inputdrop1");
let input3 = document.getElementById("input2");
let input2 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");
let inputdrop3 = document.getElementById("inputdrop2");
let inputdrop2 = document.getElementById("inputdrop3");
let inputdrop4 = document.getElementById("inputdrop4");
let inputdrop5 = document.getElementById("inputdrop5");
let label2 = document.querySelector('[for="option2__id"]');
let label3 = document.querySelector('[for="option3__id"]');
let label4 = document.querySelector('[for="option4__id"]');

calcBtn.addEventListener("click", calculate);
calcBtn.style.background = "black";

console.log('js loaded fe29')

pressureUnits.forEach((listitem) => {
  let option = document.createElement("option");
  option.value = listitem.value;
  option.text = `${listitem.value} - ${listitem.name}`;
  inputdrop1.add(option);
  inputdrop5.add(option.cloneNode(true));
  inputdrop1.value = "Pa";
  inputdrop5.value = "Pa";
});

moleUnits.forEach((listitem) => {
  let option = document.createElement("option");
  option.value = listitem.value;
  option.text = `${listitem.value} - ${listitem.name}`;
  inputdrop2.add(option);
  inputdrop3.add(option.cloneNode(true));
  inputdrop2.value = "mol";
  inputdrop3.value = "mol";
});

function convertPressureToStandardUnit(value, unit) {
    switch (unit) {
        case "Pa":
            return value;
        case "bar":
            return value * 1e5;
        case "psi":
            return value * 6894.76;
        case "at":
            return value * 98066.5;
        case "atm":
            return value * 101325;
        case "Torr":
            return value * 133.322;
        case "kPa":
            return value * 1e3;
        case "mmHg":
            return value * 133.322;
        default:
            return value;
    }
}

function convertMolesToStandardUnit(value, unit) {
    switch (unit) {
        case "mol":
            return value;
        case "mmol":
            return value * 1e-3;
        case "μmol":
            return value * 1e-6;
        default:
            return value;
    }
}

calcBtn.addEventListener("click", calculate);
input2.addEventListener('input', autofillBasedOnMoles);
input3.addEventListener('input', autofillBasedOnMoles);
input4.addEventListener('input', autofillBasedOnMoleFraction);

// ... (functions for converting units)

function autofillBasedOnMoles() {
    let molesSolute = convertMolesToStandardUnit(parseFloat(input2.value || 0), inputdrop2.value);
    let molesSolvent = convertMolesToStandardUnit(parseFloat(input3.value || 0), inputdrop3.value);
    
    if (molesSolvent && molesSolute) {
        let moleFractionSolvent = molesSolvent / (molesSolvent + molesSolute);
        input4.value = moleFractionSolvent.toFixed(4);
    }
}

function autofillBasedOnMoleFraction() {
    let moleFractionSolvent = parseFloat(input4.value || 0);

    if (moleFractionSolvent) {
        let totalMoles = 1;  // Default assumption for total moles
        let molesSolvent = moleFractionSolvent * totalMoles;
        let molesSolute = totalMoles - molesSolvent;
        
        input2.value = molesSolute.toFixed(4);
        input3.value = molesSolvent.toFixed(4);
    }
}

function calculate() {
    const partialPressureSolvent = convertPressureToStandardUnit(parseFloat(input1.value || 0), inputdrop1.value);
    let molesSolute = convertMolesToStandardUnit(parseFloat(input2.value || 0), inputdrop2.value);
    let molesSolvent = convertMolesToStandardUnit(parseFloat(input3.value || 0), inputdrop3.value);
    let moleFractionSolvent = parseFloat(input4.value || 0);
    let vaporPressureSolution = 0;

    // Validation checks
    if (partialPressureSolvent < 0 || molesSolute < 0 || molesSolvent < 0 || moleFractionSolvent < 0 || moleFractionSolvent > 1) {
        result.innerText = "Please enter valid positive values. Mole fraction should be between 0 and 1.";
        return;
    }

    vaporPressureSolution = moleFractionSolvent * partialPressureSolvent;
    const resultPressure = vaporPressureSolution / convertPressureToStandardUnit(1, inputdrop5.value);
    result.innerText = `Vapor Pressure of Solution: ${resultPressure.toFixed(4)} ${inputdrop5.value}`;
}
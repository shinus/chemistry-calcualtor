console.log('percentage-concentration-to-molarity')

let solutionlist = [
    { value: "Custom", name: "Custom" },
    { value: "Ammonia", name: "Ammonia" },
    { value: "Acetic acid", name: "Acetic acid" },
    { value: "Ethanol", name: "Ethanol" },
    { value: "Formaldehyde", name: "Formaldehyde" },
    { value: "Glucose", name: "Glucose" },
    { value: "Hydrochloric acid", name: "Hydrochloric acid" },
    { value: "Hydrogen peroxide", name: "Hydrogen peroxide" },
    { value: "Nitric acid", name: "Nitric acid" },
    { value: "Phosphoric acid", name: "Phosphoric acid" },
    { value: "Potassium hydroxide", name: "Potassium hydroxide" },
    { value: "Sodium chloride", name: "Sodium chloride" },
    { value: "Sodium hydroxide", name: "Sodium hydroxide" },
    { value: "Sulfuric acid", name: "Sulfuric acid" }
];

let dropdowngrams_per_mol = [
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

let densityUnitList = [
    { value: "kg/L", name: "kilograms per liter (kg/L)" },
    { value: "g/mL", name: "grams per milliliter (g/mL)" },
    { value: "t/m3", name: "tons per cubic meter (t/m3)" },
    { value: "g/cm3", name: "grams per cubic cm (g/cm3)" },
    { value: "oz/cu in", name: "ounces per cubic inch (oz/cu in)" },
    { value: "lb/cu in", name: "pounds per cubic inch (lb/cu in)" },
    { value: "lb/cu ft", name: "pounds per cubic feet (lb/cu ft)" },
    { value: "lb/US gal", name: "pounds per gallon (US) (lb/US gal)" },
    { value: "g/L", name: "grams per liter (g/L)" }
];

let molarityUnitList = [
    { value: "mol/mm3", name: "mol per cubic millimeter" },
    { value: "mol/cm3", name: "mol per cubic centimeter" },
    { value: "mol/dm3", name: "mol per cubic decimeter" },
    { value: "mol/cu in", name: "mol per cubic inch" },
    { value: "mol/ml", name: "mol per milliliter" },
    { value: "mol/cl", name: "mol per centiliter" },
    { value: "mol/liter", name: "mol per liter" },
    { value: "mol/US gal", name: "mol per gallon (US)" },
    { value: "mol/UK gal", name: "mol per gallon (UK)" }
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
let inputdrop5 = document.getElementById("inputdrop5");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;


calcBtn.addEventListener("click", calculateNormality);
calcBtn.style.background = "black";

solutionlist.forEach((listitem) => {
  let option = document.createElement("option");
  option.value = listitem.value;
  option.text = `${listitem.value} - ${listitem.name}`;
  inputdrop1.add(option);
  inputdrop1.value = "Custom";
});

dropdowngrams_per_mol.forEach((listitem) => {
  let option = document.createElement("option");
  option.value = listitem.value;
  option.text = `${listitem.value} - ${listitem.name}`;
  inputdrop2.add(option);
  inputdrop2.value = "g";
});

densityUnitList.forEach((listitem) => {
  let option = document.createElement("option");
  option.value = listitem.value;
  option.text = `${listitem.value} - ${listitem.name}`;
  inputdrop3.add(option);
  inputdrop3.value = "g/L";
});

molarityUnitList.forEach((listitem)=>{
    let option = document.createElement("option");
    option.value = listitem.value;
    option.text = `${listitem.value} - ${listitem.name}`;
    inputdrop5.add(option);
    inputdrop5.value = "mol/liter";
})


inputdrop1.addEventListener("change", function() {
    const selectedSolution = inputdrop1.value;
    if (selectedSolution === "Custom") {
        input2.parentElement.style.display = "block"; // Show molar mass input
    } else {
        input2.parentElement.style.display = "none"; // Hide molar mass input
        // Automatically fill molar mass value based on selected solution
        const solutionData = {
            "Ammonia": 17.03,
            "Acetic acid": 60.05,
            "Ethanol": 46.07,
            "Formaldehyde": 30.03,
            "Glucose": 180.16,
            "Hydrochloric acid": 36.46,
            "Hydrogen peroxide": 34.01,
            "Nitric acid": 63.01,
            "Phosphoric acid": 97.99,
            "Potassium hydroxide": 56.11,
            "Sodium chloride": 58.44,
            "Sodium hydroxide": 40.0,
            "Sulfuric acid": 98.08
        };
        
        input2.value = solutionData[selectedSolution] || 0;
    }
    calculateNormality(); // Recalculate molarity in real-time
});

function convertDensityToStandardUnit(value, unit) {
    switch (unit) {
        case "kg/L":
            return value * 1000; // Convert kg to g
        case "g/mL":
            return value * 1000; // Convert mL to L
        case "t/m3":
            return value; // Already in g/L
        case "g/cm3":
            return value * 1000; // Convert cm3 to L
        case "oz/cu in":
            return value * 1729.99404; // Convert cu in to L and oz to g
        case "lb/cu in":
            return value * 27679.9047; // Convert cu in to L and lb to g
        case "lb/cu ft":
            return value * 16.0185; // Convert cu ft to L and lb to g
        case "lb/US gal":
            return value * 3.78541; // Convert US gal to L and lb to g
        case "g/L":
            return value; // Already in g/L
        default:
            return value;
    }
}

function convertGramsPerMolToStandardUnit(value, unit) {
    switch (unit) {
        case "wg":
            return value * 1e-6; // Convert micrograms to grams
        case "mg":
            return value * 1e-3; // Convert milligrams to grams
        case "g":
            return value; // Already in grams
        case "dag":
            return value * 10; // Convert decagrams to grams
        case "kg":
            return value * 1000; // Convert kilograms to grams
        // ... Add other units conversions if needed
        default:
            return value;
    }
}

inputdrop5.addEventListener("change", calculateNormality);

function calculateNormality() {
    const molarMassUnit = inputdrop2.value;
    const densityUnit = inputdrop3.value;
    const percentageConcentration = parseFloat(input4.value) || 0;
    const molarMass = convertGramsPerMolToStandardUnit(parseFloat(input2.value || 0), molarMassUnit);
    const density = convertDensityToStandardUnit(parseFloat(input3.value || 0), densityUnit);
    const molarity = (percentageConcentration * density) / (molarMass * 100);
    
    let convertedMolarity = molarity; // Default value in mol/L
    const selectedMolarityUnit = inputdrop5.value;
    switch (selectedMolarityUnit) {
        case "mol/mm3":
            convertedMolarity = molarity / 1e9; // Convert L to mm3
            break;
        case "mol/cm3":
            convertedMolarity = molarity / 1e3; // Convert L to cm3
            break;
        case "mol/dm3":
            convertedMolarity = molarity; // mol/dm3 is equivalent to mol/L
            break;
        case "mol/cu in":
            convertedMolarity = molarity / 16.387; // Convert L to cu in
            break;
        case "mol/ml":
            convertedMolarity = molarity / 1e3; // Convert L to ml
            break;
        case "mol/cl":
            convertedMolarity = molarity / 10; // Convert L to cl
            break;
        case "mol/liter":
            convertedMolarity = molarity; // mol/liter is equivalent to mol/L
            break;
        case "mol/US gal":
            convertedMolarity = molarity / 3.78541; // Convert L to US gallon
            break;
        case "mol/UK gal":
            convertedMolarity = molarity / 4.54609; // Convert L to UK gallon
            break;
        default:
            break;
    }

    // Display the result in the selected unit
    result.innerText = `Molarity: ${convertedMolarity.toFixed(4)} ${selectedMolarityUnit.split("/")[1]}`;
}

// Event listeners
inputdrop1.addEventListener("change", calculateNormality);
inputdrop5.addEventListener("change", calculateNormality);
calcBtn.addEventListener("click", calculateNormality);

// Initial setup
inputdrop1.dispatchEvent(new Event("change"));
console.log('up3');
let dropdown1Options = [
    {value:'concentration of a base',name:"concentration of a base"},
    {value:'concentration of an acid', name:"concentration of an acid"},
];

let acidsArray = [
    { value: "CH3COOH", name: "Acetic acid - CH3COOH" },
    { value: "H3AsO4", name: "Arsenic acid - H3AsO4" },
    { value: "H3AsO3", name: "Arsenious acid - H3AsO3" },
    { value: "C6H5COOH", name: "Benzoic acid - C6H5COOH" },
    { value: "H3BO3", name: "Boric acid - H3BO3" },
    { value: "H2CO3", name: "Carbonic acid - H2CO3" },
    { value: "citric", name: "Citric acid" },
    { value: "HCOOH", name: "Formic acid - HCOOH" },
    { value: "HCN", name: "Hydrocyanic acid - HCN" },
    { value: "hydrofluoric", name: "Hydrofluoric acid" },
    { value: "HS", name: "Hydrosulfuric acid - HS" },
    { value: "HCl", name: "Hydrochloric acid - HCl" },
    { value: "HClO", name: "Hypochlorous acid - HClO" },
    { value: "HClO4", name: "Perchloric acid - HClO4" },
    { value: "HClO2", name: "Chlorous acid - HClO2" },
    { value: "H2SO4", name: "Sulfuric acid - H2SO4" },
    { value: "H2SO3", name: "Sulfurous acid - H2SO3" },
    { value: "HNO3", name: "Nitric acid - HNO3" },
    { value: "HNO2", name: "Nitrous acid - HNO2" },
    { value: "C6H5OH", name: "Phenol - C6H5OH" },
    { value: "H3PO4", name: "Phosphoric acid - H3PO4" },
    { value: "H3PO3", name: "Phosphorous acid - H3PO3" }
];

let basesArray = [
    { value: "NaOH", name: "Sodium hydroxide - NaOH" },
    { value: "C6H5NH2", name: "Aniline - C6H5NH2" },
    { value: "NH3", name: "Ammonia - NH3" },
    { value: "Mg(OH)2", name: "Magnesium hydroxide" },
    { value: "Fe(OH)2", name: "Iron (II) hydroxide" },
    { value: "LiOH", name: "Lithium hydroxide - LiOH" },
    { value: "Al(OH)3", name: "Aluminium hydroxide" }
];

let dropMolar = [
    { value: "M", name: "molars" },
    { value: "mM", name: "millimolars" },
    { value: "µM", name: "micromolars" },
    { value: "nM", name: "nanomolars" },
    { value: "pM", name: "picomolars" },
    { value: "fM", name: "femtomolars" },
    { value: "aM", name: "attomolars" },
    { value: "zM", name: "zeptomolars" },
    { value: "yM", name: "joktomolars" }
];

console.log('bufferph js updated vl23')

let input1 = document.getElementById("input1");
let inputdrop1 = document.getElementById("inputdrop1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let inputka = document.getElementById("inputka");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");
let inputdrop2 = document.getElementById("inputdrop2");
let inputdrop3 = document.getElementById("inputdrop3");
let inputdrop4 = document.getElementById("inputdrop4");
let inputdrop5 = document.getElementById("inputdrop5");
let label2 = document.querySelector('[for="option2__id"]');
let label3 = document.querySelector('[for="option3__id"]');
let label4 = document.querySelector('[for="option4__id"]');


const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;


let kaValues = {
    "CH3COOH": 1.8e-5, // Acetic acid
    "H3AsO4": 5.0e-3, // Arsenic acid (first dissociation)
    "H3AsO3": 5.1e-10, // Arsenious acid (first dissociation) 
    "C6H5COOH": 6.3e-5, // Benzoic acid 
    "H3BO3": 5.8e-10, // Boric acid
    "H2CO3": 4.3e-7, // Carbonic acid (first dissociation)
    "citric": 8.4e-4, // Citric acid (first dissociation)
    "HCOOH": 1.78e-4, // Formic acid 
    "HCN": 6.2e-10, // Hydrocyanic acid
    "hydrofluoric": 6.3e-4, // Hydrofluoric acid
    "HS": 9.6e-8, // Hydrosulfuric acid (first dissociation) 
    "HCl": null, // Hydrochloric acid (Strong acid, doesn't have a Ka in the usual sense)
    "HClO": 4.0e-8, // Hypochlorous acid 
    "HClO4": null, // Perchloric acid (Strong acid, doesn't have a Ka in the usual sense)
    "HClO2": 1.2e-2, // Chlorous acid
    "H2SO4": null, // Sulfuric acid (Strong acid for the first dissociation)
    "H2SO3": 1.5e-2, // Sulfurous acid (first dissociation)
    "HNO3": null, // Nitric acid (Strong acid, doesn't have a Ka in the usual sense)
    "HNO2": 4.0e-4, // Nitrous acid
    "C6H5OH": 1.6e-10, // Phenol
    "H3PO4": 7.5e-3, // Phosphoric acid (first dissociation)
    "H3PO3": 5.0e-2 // Phosphorous acid (first dissociation) 
};

let kbValues = {
    "NH3": 1.8e-5,
    "C6H5NH2": 4.3e-10,
    "(CH3)2NH": 5.4e-4,
    "C2H5NH2": 5.6e-4,
    "CH3NH2": 4.38e-4,
    "NaOH": null, // Strong base, doesn't have a Kb value in the usual sense
    "Mg(OH)2": null, // Strong base
    "Fe(OH)2": null, // Not typically expressed with a Kb value
    "LiOH": null, // Strong base
    "Al(OH)3": null  
};


calcBtn.addEventListener("click", calculate);
calcBtn.style.background = "black";

basesArray.forEach((listitem) => {
    let option = document.createElement("option");
    option.value = listitem.value;
    option.text = `${listitem.value} - ${listitem.name}`;
    inputdrop2.add(option);
    inputdrop2.value = "NaOH";
  });
// Remove the redundant event listener
// calcBtn.addEventListener("click", calculate);

// Modified Event listener for the first dropdown
inputdrop1.addEventListener('change', function() {
    let selectedValue = inputdrop1.value;

    // Clear the second dropdown
    while (inputdrop2.firstChild) {
        inputdrop2.removeChild(inputdrop2.firstChild);
    }

    if (selectedValue === 'concentration of a base') {
        label2.textContent = "Base";
        basesArray.forEach((base) => {
            let option = document.createElement("option");
            option.value = base.value;
            option.text = base.name;
            inputdrop2.add(option);
        });
    } else if (selectedValue === 'concentration of an acid') {
        label2.textContent = "Acid";
        acidsArray.forEach((acid) => {
            let option = document.createElement("option");
            option.value = acid.value;
            option.text = acid.name;
            inputdrop2.add(option);
        });
    }
});


dropdown1Options.forEach((listitem) => {
  let option = document.createElement("option");
  option.value = listitem.value;
  option.text = `${listitem.value} - ${listitem.name}`;
  inputdrop1.add(option);
  inputdrop1.value = "concentration of a base";
});

dropMolar.forEach((listitem) => {
    let option = document.createElement("option");
    option.value = listitem.value;
    option.text = `${listitem.value} - ${listitem.name}`;
    inputdrop3.add(option);
    inputdrop3.value = "M";
  });

// Event listener for the first dropdown
inputdrop1.addEventListener('change', function() {
    let selectedValue = inputdrop1.value;

    // Clear the second dropdown
    while (inputdrop2.firstChild) {
        inputdrop2.removeChild(inputdrop2.firstChild);
    }

    if (selectedValue === 'concentration of a base' || selectedValue === 'mass and volume of a base') {
        label2.textContent = "Base";
        basesArray.forEach((base) => {
            let option = document.createElement("option");
            option.value = base.value;
            option.text = base.name;
            inputdrop2.add(option);
        });
    } else if (selectedValue === 'concentration of an acid' || selectedValue === 'mass and volume of an acid') {
        label2.textContent = "Acid";
        acidsArray.forEach((acid) => {
            let option = document.createElement("option");
            option.value = acid.value;
            option.text = acid.name;
            inputdrop2.add(option);
        });
    }

    // Check if we need to add an input for mass
    const dynamicSection = document.getElementById("dynamic-section");
    if (selectedValue === 'mass and volume of an acid' || selectedValue === 'mass and volume of a base') {
        const massInputHtml = `
            <div class="col-md-12">
                <div class="d-flex">
                    <label for="massInput">Mass (g)</label>
                </div>
            </div>
            <div class="col-md-12">
                <div class="d-flex calculator-inputs">
                    <input class="form-control" type="number" name="massInput" id="massInput">
                </div>
            </div>
        `;
        dynamicSection.innerHTML = massInputHtml;
    } else {
        dynamicSection.innerHTML = '';
    }
});


function convertToStandardUnit(value, unit) {
    switch (unit) {
        // Molar concentration conversions
        case "M":
            return value;  // Already a standard unit for molarity in this context
        case "mM":
            return value * 1e-3;
        case "µM":
            return value * 1e-6;
        case "nM":
            return value * 1e-9;
        case "pM":
            return value * 1e-12;
        case "fM":
            return value * 1e-15;
        case "aM":
            return value * 1e-18;
        case "zM":
            return value * 1e-21;
        case "yM":
            return value * 1e-24;
        default:
            return value;
    }
}
function calculate() {
    let selectedType = inputdrop1.value;
    let concentration = parseFloat(input3.value);
    let selectedSubstance = inputdrop2.value;
    let unit = inputdrop3.value;

    // Convert the concentration to standard unit (M)
    concentration = convertToStandardUnit(concentration, unit);

    let pH;
    let pOH;
    let hConcentration;

    if (selectedType === 'concentration of a base') {
        if (kbValues[selectedSubstance]) {  // If it's a weak base
            let kb = kbValues[selectedSubstance];
            hConcentration = Math.sqrt(kb * concentration);  // Simplified; you may need to solve a quadratic equation in some cases
            pOH = -Math.log10(hConcentration);
        } else {  // For strong bases
            pOH = -Math.log10(concentration);
        }
        pH = 14 - pOH;
    } else if (selectedType === 'concentration of an acid') {
        if (kaValues[selectedSubstance]) {  // If it's a weak acid
            let ka = kaValues[selectedSubstance];
            hConcentration = Math.sqrt(ka * concentration);  // Simplified; you may need to solve a quadratic equation in some cases
            pH = -Math.log10(hConcentration);
        } else {  // For strong acids
            pH = -Math.log10(concentration);
        }
        pOH = 14 - pH;
    }

    result.innerHTML = `pH: ${pH.toFixed(2)} <br> pOH: ${pOH.toFixed(2)}`;
}

calcBtn.addEventListener("click", calculate);

let molarUnits = [
    { value: "M", name: "molars" },
    { value: "mM", name: "millimolars" },
    { value: "µM", name: "micromolars" },
    { value: "nM", name: "nanomolars" },
    { value: "pM", name: "picomolars" }
];

let substanceCategories = [
    { name: "Common Gases and Liquids", value: "common" },
    { name: "Salts", value: "salts" },
    { name: "Acids", value: "acids" },
    { name: "Alkali", value: "alkali" },
    { name: "Organic", value: "organic" },
    { name: "Pure Metals", value: "metals" },
    { name: "Other", value: "other" }
];

let common_substances = [
    { name: "Water (H2O)", value: "water", molarMass: 18.01528 },
    { name: "Nitrogen (N2)", value: "nitrogen", molarMass: 28.0134 },
    { name: "Oxygen (O2)", value: "oxygen", molarMass: 31.9988 },
    { name: "Hydrogen (H2)", value: "hydrogen", molarMass: 2.01588 },
    { name: "Helium (He)", value: "helium", molarMass: 4.002602 },
    { name: "Carbon dioxide (CO2)", value: "carbon_dioxide", molarMass: 44.0095 },
    { name: "Ammonia (NH3)", value: "ammonia", molarMass: 17.0305 },
    { name: "Hydrogen sulfide (H2S)", value: "hydrogen_sulfide", molarMass: 34.0809 },
    { name: "Chloroform (CHCl3)", value: "chloroform", molarMass: 119.377 }
];

let salt_list = [
    { name: "Sodium Chloride", value: "NaCl", molarMass: 58.443 },
    { name: "Potassium Chloride", value: "KCl", molarMass: 74.5513 },
    { name: "Magnesium Chloride", value: "MgCl2", molarMass: 95.211 },
    { name: "Calcium Chloride", value: "CaCl2", molarMass: 110.984 },
    { name: "Ammonium Chloride", value: "NH4Cl", molarMass: 53.491 },
    { name: "Sodium Nitrate", value: "NaN03", molarMass: 85.007 },
    { name: "Potassium Nitrate", value: "KNO3", molarMass: 101.1032 },
    { name: "Ammonium Nitrate", value: "NH4NO3", molarMass: 80.0434 },
    { name: "Nickel Nitrate", value: "Ni(NO3)2", molarMass: 182.7034 },
    { name: "Silver Nitrate", value: "AgNO3", molarMass: 169.873 },
    { name: "Calcium Carbonate", value: "CaCO3", molarMass: 100.0869 },
    { name: "Magnesium Sulfate", value: "MgSO4", molarMass: 120.3669 },
    { name: "Calcium Sulfate", value: "CaSO4", molarMass: 136.1406 },
    { name: "Potassium Permanganate", value: "KMnO4", molarMass: 158.0339 }
];

let acids_list = [
    { name: "Hydrochloric Acid", value: "HCl", molarMass: 36.461 },
    { name: "Sulfuric Acid", value: "H2SO4", molarMass: 98.079 },
    { name: "Sulfurous Acid", value: "H2SO3", molarMass: 82.076 },
    { name: "Hydrosulfuric Acid", value: "H2S", molarMass: 34.082 },
    { name: "Nitric Acid", value: "HNO3", molarMass: 63.012 },
    { name: "Nitrous Acid", value: "HNO2", molarMass: 47.013 },
    { name: "Phosphoric Acid", value: "H3PO4", molarMass: 97.994 },
    { name: "Phosphorous Acid", value: "H3PO3", molarMass: 82.004 },
    { name: "Hydrobromic Acid", value: "HBr", molarMass: 80.912 },
    { name: "Hydrofluoric Acid", value: "HF", molarMass: 20.006 },
    { name: "Formic Acid", value: "HCOOH", molarMass: 46.025 },
    { name: "Acetic Acid", value: "CH3COOH", molarMass: 60.052 }
];

let alkali_list = [
    { name: "Sodium Hydroxide", value: "NaOH", molarMass: 40.00 },
    { name: "Potassium Hydroxide", value: "KOH", molarMass: 56.11 },
    { name: "Magnesium Hydroxide", value: "Mg(OH)2", molarMass: 58.32 },
    { name: "Calcium Hydroxide", value: "Ca(OH)2", molarMass: 74.10 },
    { name: "Aluminium Hydroxide", value: "Al(OH)3", molarMass: 78.00 },
    { name: "Lithium Hydroxide", value: "LiOH", molarMass: 23.95 }
];

let organicCompounds = [
    { name: "Methane", value: "CH4", molarMass: 16.04 },
    { name: "Ethane", value: "C2H6", molarMass: 30.07 },
    { name: "Propane", value: "C3H8", molarMass: 44.10 },
    { name: "Butane", value: "C4H10", molarMass: 58.12 },
    { name: "Methanol", value: "CH3OH", molarMass: 32.04 },
    { name: "Ethanol", value: "C2H5OH", molarMass: 46.07 },
    { name: "Benzene", value: "C6H6", molarMass: 78.11 },
    { name: "Glucose", value: "C6H12O6", molarMass: 180.16 },
    { name: "Vitamin C", value: "C6H8O6", molarMass: 176.12 }
];

let pureMetals = [
    { name: "Iron (Fe)", value: "Fe", molarMass: 55.845 },
    { name: "Aluminium (Al)", value: "Al", molarMass: 26.9815 },
    { name: "Copper (Cu)", value: "Cu", molarMass: 63.546 },
    { name: "Titanium (Ti)", value: "Ti", molarMass: 47.867 },
    { name: "Silver (Ag)", value: "Ag", molarMass: 107.8682 },
    { name: "Gold (Au)", value: "Au", molarMass: 196.9665 },
    { name: "Nickel (Ni)", value: "Ni", molarMass: 58.6934 },
    { name: "Chromium (Cr)", value: "Cr", molarMass: 51.9961 },
    { name: "Cobalt (Co)", value: "Co", molarMass: 58.9332 },
    { name: "Manganese (Mn)", value: "Mn", molarMass: 54.938 },
    { name: "Mercury (Hg)", value: "Hg", molarMass: 200.592 },
    { name: "Lead (Pb)", value: "Pb", molarMass: 207.2 },
    { name: "Uranium (U)", value: "U", molarMass: 238.0289 }
];




let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");

let inputdrop1 = document.getElementById("inputdrop1");
let inputdrop2 = document.getElementById("inputdrop2");
let inputdrop3 = document.getElementById("inputdrop3");
let inputdrop4 = document.getElementById("inputdrop4");

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "chemical", values: inputdrop1 },
    { name: "element", values: inputdrop2 },
    { name: "molar", values: input3 },
    { name: "mass", values: input4 },
];

function setParamValues(queryParams) {
    const params = new URLSearchParams(window.location.search);
    for (queryP of queryParams) {
      var parameter_value = params.get(queryP.name);
      if (queryP.values.tagName == "INPUT") {
        queryP.values.value = parameter_value;
      } else if (queryP.values.tagName == "SELECT") {
        queryP.values.selectedIndex = parameter_value;
      }
    }
  }

function init() {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();     


var queryParams = [
  { name: "chemical", values: input1 },
  { name: "element", values: input2 },
  { name: "molar", values: input3 },
  { name: "mass", values: input4 },
];

function setParamValues(queryParams) {
    const params = new URLSearchParams(window.location.search);
    for (queryP of queryParams) {
      var parameter_value = params.get(queryP.name);
      if (queryP.values.tagName == "INPUT") {
        queryP.values.value = parameter_value;
      } else if (queryP.values.tagName == "SELECT") {
        queryP.values.selectedIndex = parameter_value;
      }
    }
  }  

function init() {
    var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
  }
  
  init();

substanceCategories.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop1.add(opt);
    inputdrop1.value = "common";
});

inputdrop1.addEventListener('change', (e) => {
    const selectedCategory = e.target.value;
    inputdrop2.innerHTML = ''; // Clear the options in inputdrop2

    let substanceList = common_substances; // Default to common substances

    if (selectedCategory === 'salts') {
        substanceList = salt_list;
    } else if (selectedCategory === 'acids') {
        substanceList = acids_list;
    } else if (selectedCategory === 'alkali') {
        substanceList = alkali_list;
    } else if (selectedCategory === 'organic') {
        substanceList = organicCompounds;
    } else if (selectedCategory === 'metals') {
        substanceList = pureMetals;
    }

    substanceList.forEach((option) => {
        let opt = document.createElement('option');
        opt.value = option.value;
        opt.text = option.name;
        inputdrop2.add(opt);
    });

    // Get the selected substance from inputdrop2 and set its molarMass in input3
    const selectedValue = inputdrop2.value;
    const selectedSubstance = substanceList.find(substance => substance.value === selectedValue);
    
    if (selectedSubstance) {
        input3.value = selectedSubstance.molarMass.toFixed(4);
    } else {
        input3.value = '';
    }

    inputdrop2.dispatchEvent(new Event('change'));
});

inputdrop1.dispatchEvent(new Event('change'));


function getDefaultMolarUnit(category) {
    // Define the default molar unit for each category here
    switch (category) {
        case 'common':
            return 'water'; // Set the default unit for "Common Gases"
        case 'salts':
            return 'NaCl'; // Set the default unit for "Salts"
        case 'acids':
            return 'HCl'; // Set the default unit for "Acids"
        case 'alkali':
            return 'NaOH'; // Set the default unit for "Alkali"
        case 'organic':
            return 'C2H6'; // Set the default unit for "Organic"
        case 'metals':
            return ''
        default:
            return ''; // Default to an empty string for unknown categories
    }
}


molarUnits.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    input3.value = option.value
   // inputdrop3.add(opt);
  //  inputdrop3.value = "M";
});

// Add an event listener to the substance dropdown
// Add an event listener to the substance dropdown
inputdrop2.addEventListener('change', (e) => {
    const selectedValue = e.target.value;
    const selectedCategory = inputdrop1.value; // Get the selected category from inputdrop1
    let substanceList;

    switch (selectedCategory) {
        case 'common':
            substanceList = common_substances;
            break;
        case 'salts':
            substanceList = salt_list;
            break;
        case 'acids':
            substanceList = acids_list;
            break;
        case 'alkali':
            substanceList = alkali_list;
            break;
        case 'organic':
            substanceList = organicCompounds;
            break;
        case 'metals':
            substanceList = pureMetals;
            break;
        default:
            substanceList = common_substances; // Default to common substances
            break;
    }

    const selectedSubstance = substanceList.find(substance => substance.value === selectedValue);

    if (selectedSubstance) {
        input3.value = selectedSubstance.molarMass.toFixed(4);
    } else {
        input3.value = '';
    }
});



// Trigger the change event to set the initial default value
inputdrop2.dispatchEvent(new Event('change'));


function calculate() {
    const grams = parseFloat(input4.value);
    const molarMass = parseFloat(input3.value);

    if (!isNaN(grams) && grams >= 0 && !isNaN(molarMass) && molarMass > 0) {
        // Calculate moles using the value: moles = grams / molarMass
        const moles = grams / molarMass;

        result = moles.toFixed(2)+ "mol"; // Display moles up to 4 decimal places
    } else {
        alert("Please enter valid values for grams and molar mass.");
    }
    return result
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

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var result = calculate();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>  " + result  +  "   </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
}

calcBtn.addEventListener("click", showResult);
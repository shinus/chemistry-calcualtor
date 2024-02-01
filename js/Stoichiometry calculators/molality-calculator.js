
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

let moles_of_solute = document.getElementById("input1");
let mass_of_solvent = document.getElementById("input2");
let inputdrop2 = document.getElementById("inputdrop2");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "moles", values: moles_of_solute },
    { name: "mass", values: mass_of_solvent },
    { name: "massdrop", values: inputdrop2 },
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

dropdowngrams.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop2.add(opt);
    inputdrop2.value = "kg"
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


function autoCalculate() {
    if (moles_of_solute.value && mass_of_solvent.value) {
        calculate();
    }
}

function calculate() {
    let solute_moles = parseFloat(moles_of_solute.value);
    let solvent_mass_standard = convertToStandardGrams(parseFloat(mass_of_solvent.value), inputdrop2.value); // Convert to grams

    // Compute molality: molality = moles of solute / mass of solvent (in kg)
    let computed_molality = solute_moles / (solvent_mass_standard * 1000); // divide by 1000 to convert grams to kg

    
    result = computed_molality.toFixed(2);
     return result
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

    div1.innerHTML = "<b> Molality " + result  +  "  mol per kilogram </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
}

calcBtn.addEventListener("click", showResult);


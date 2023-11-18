
let dropdowngrams = [
    { value: "wg", name: "micrograms" },
    { value: "mg", name: "milligrams" },
    { value: "g", name: "grams" },
];

let dropdownliters = [
    { value: "wl", name: "microliter" },
    { value: "ml", name: "milliliter" },
    { value: "l", name: "liter" },
];

let normalityunits = [
    { value: "eq_per_wl", name: "eq/microliter" },
    { value: "eq_per_ml", name: "eq/milliliter" },
    { value: "eq_per_l", name: "eq/liter" },
];

let equivalentWeight_units = [
    { value: "eq_per_wg", name: "eq per micrograms" },
    { value: "eq_per_mg", name: "eq per milligrams" },
    { value: "eq_per_g", name: "eq per grams" },
];


let mass_of_solute = document.getElementById("input1");
let equivalent_weight_of_solute = document.getElementById("input2");
let volume_of_solution = document.getElementById("input2");
let molality = document.getElementById("input3");
let inputdrop1 = document.getElementById("inputdrop1");
let inputdrop2 = document.getElementById("inputdrop2");
let inputdrop3 = document.getElementById("inputdrop3");
let inputdrop4 = document.getElementById("inputdrop4");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");


calcBtn.addEventListener("click", calculate);
calcBtn.style.background = 'black';

dropdowngrams.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop1.add(opt);
    inputdrop1.value = "g"
});

equivalentWeight_units.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop2.add(opt);
    inputdrop2.value = "eq_per_g"
});

console.log('updated v9')

dropdownliters.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop3.add(opt);
    inputdrop3.value = "l"
});

normalityunits.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop4.add(opt);
    inputdrop4.value = "eq_per_l";
});


function convertToStandardNormality(value, unit) {
    switch (unit) {
        case "eq_per_wl":
            return value * 1e-6;
        case "eq_per_ml":
            return value * 1e-3;
        case "eq_per_l":
            return value;
        default:
            return 0; // Default to 0 for unknown units
    }
}

function convertToStandardGrams(value, unit) {
    switch (unit) {
        case "wg":
            return value * 1e-6;
        case "mg":
            return value * 1e-3;
        case "g":
            return value;
        default:
            return 0; // Default to 0 for unknown units
    }
}

function convertToStandardLiters(value, unit) {
    switch (unit) {
        case "wl":
            return value * 1e-6;
        case "ml":
            return value * 1e-3;
        case "l":
            return value;
        default:
            return 0;
    }
}

function convertToStandardEquivalentWeight(value, unit) {
    switch (unit) {
        case "eq_per_wg":
            return value * 1e-6;
        case "eq_per_mg":
            return value * 1e-3;
        case "eq_per_g":
            return value;
        default:
            return 0;
    }
}

console.log('effivy')

function calculate() {
    var m = parseFloat(mass_of_solute.value);
    var e = parseFloat(equivalent_weight_of_solute.value);
    var v = parseFloat(volume_of_solution.value);
    var nUnit = inputdrop4.value; // Get the selected normality unit

    var massUnit = inputdrop1.value;
    var volumeUnit = inputdrop3.value;
    var equivalentWeightUnit = inputdrop2.value;

    // Convert input values to standard units (grams, liters, and grams/equivalent)
    var m_standard = convertToStandardGrams(m, massUnit);
    var v_standard = convertToStandardLiters(v, volumeUnit);
    var e_standard = convertToStandardEquivalentWeight(e, equivalentWeightUnit);

    // Calculate normality using the formula
    var n = m_standard / (e_standard * v_standard);

    // Convert normality to the selected unit
    var convertedN = convertToStandardNormality(n, nUnit);

    // Display the result with three decimal places
    result.innerText = convertedN.toFixed(3) + ` ${nUnit}`;

    // Debugging output
    console.log(result.innerText);
}
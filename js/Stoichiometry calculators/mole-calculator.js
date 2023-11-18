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
    { value: "mg", name: "miligram" },
    { value: "dag", name: "decagram" },
    { value: "ton", name: "metric ton" },
    { value: "lb", name: "pound" },
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

gmunits.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop1.add(opt);
    inputdrop1.value = "g";
});

let drop2unit = [
    { value: "g/mol", name: "g/mol" }
]

drop2unit.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop2.add(opt);
    inputdrop2.value = "g/mol";
});


molarUnits.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop3.add(opt);
    inputdrop3.value = "M";
});

function calculate() {
    const mass = parseFloat(input1.value);
    const molecularWeight = parseFloat(input2.value);
    const massUnit = inputdrop1.value;
    const molecularWeightUnit = inputdrop2.value;
    const molarUnit = inputdrop3.value;

    // Convert mass to grams if it's not already in grams
    const massInGrams = convertToGrams(mass, massUnit);

    // Convert molecular weight to g/mol if it's not already in g/mol
    const molecularWeightInGramsPerMole = convertToGrams(molecularWeight, molecularWeightUnit);

    // Calculate moles using the mole = mass / molecular weight formula
    const moles = massInGrams / molecularWeightInGramsPerMole;

    // Convert moles to the desired molar unit
    const molesInDesiredUnit = convertToStandardUnit(moles, molarUnit);

    // Display the result with four decimal places
    result.textContent = `Moles: ${molesInDesiredUnit.toFixed(4)} ${molarUnit}`;
}


console.log('code update v6')

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

console.log(8)

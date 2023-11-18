let dropOptions = [
    { value: "M", name: "Molar" },
    { value: "mM", name: "millimolar" },
    { value: "µM", name: "micromolar" }
];

let conjugate_base = document.getElementById("input1");
let inputdrop1 = document.getElementById('inputdrop1');
let acid = document.getElementById("input2");
let inputdrop2 = document.getElementById("inputdrop2");
let pk = document.getElementById("input3");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.addEventListener("click", calculatePh);
calcBtn.style.background='black'

dropOptions.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop1.add(opt);
    inputdrop2.add(opt.cloneNode(true));  // Clone the option for the second dropdown
});

function convertToM(value, unit) {
    const conversionFactors = {
        "M": 1,
        "mM": 0.001,
        "µM": 0.000001
    };
    return value * conversionFactors[unit];
}

function calculatePh() {
    let baseVal = convertToM(parseFloat(conjugate_base.value), inputdrop1.value);
    let acidVal = convertToM(parseFloat(acid.value), inputdrop2.value);
    let pKa = parseFloat(pk.value);

    let pH = pKa + Math.log10(baseVal / acidVal);
    result.innerHTML = `pH of the solution: ${pH.toFixed(4)}`;
}

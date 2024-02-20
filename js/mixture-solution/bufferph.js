const buffertype = [
    { value: "Acid", name: "Acid" },
    { value: "Base", name: "Base" },
]

let dropMolar = [
    { value: "M",  name: "molars" },
    { value: "mM", name: "millimolars" },
    { value: "µM", name: "micromolars" },
    { value: "nM", name: "nanomolars" },
    { value: "pM", name: "picomolars" },
    { value: "fM", name: "femtomolars" },
    { value: "aM", name: "attomolars" },
    { value: "zM", name: "zeptomolars" },
    { value: "yM", name: "joktomolars" }
];

let input1 = document.getElementById("input1");
let inputdrop1 = document.getElementById("inputdrop1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;
let inputdrop2 = document.getElementById("inputdrop2");
let inputdrop3 = document.getElementById("inputdrop3");
let inputdrop4 = document.getElementById("inputdrop4");
let inputdrop5 = document.getElementById("inputdrop5");
let label2 = document.querySelector('[for="option2__id"]');
let label3 = document.querySelector('[for="option3__id"]');
let label4 = document.querySelector('[for="option4__id"]');

var queryParams = [
    { name: "type", values: inputdrop1 },
    { name: "Ka", values: input2 },
    { name: "acid", values: input4 },
  ];

calcBtn.addEventListener("click", calculateph);
calcBtn.style.background = "black";

buffertype.forEach((listitem) => {
  let option = document.createElement("option");
  option.value = listitem.value;
  option.text = `${listitem.value} - ${listitem.name}`;
  inputdrop1.add(option);
  inputdrop1.value = "Acid";
});

dropMolar.forEach((listitem) => {
  let option = document.createElement("option");
  option.value = listitem.value;
  option.text = `${listitem.value} - ${listitem.name}`;
  inputdrop4.add(option);
  inputdrop5.add(option.cloneNode(true))
  inputdrop4.value = "M";
  inputdrop5.value = "M";
});

function updateLabelsBasedOnBufferType() {
    const bufferType = inputdrop1.value;

    if (bufferType === "Acid") {
        label2.innerText = "Ka";
        label3.innerText = "pKa";
        label4.innerText = "Acid concentration";
    } else if (bufferType === "Base") {
        label2.innerText = "Kb";
        label3.innerText = "pKb";
        label4.innerText = "Base concentration";
    }
}

// Attach event listener to the buffer type dropdown to detect changes
inputdrop1.addEventListener("change", updateLabelsBasedOnBufferType);

// Call the function once to set initial values
updateLabelsBasedOnBufferType();


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

// ... [All the previous code you provided]


input2.addEventListener("input", updatepKa);
input3.addEventListener("input", updateKa);
function updatepKa() {
    const KaOrKbValue = parseFloat(input2.value);
    if (!isNaN(KaOrKbValue) && KaOrKbValue > 0) {
        const pKaOrpKbValue = -Math.log10(KaOrKbValue);
        input3.value = pKaOrpKbValue.toFixed(4);
    } else {
        input3.value = "";  // Clear the pKa/pKb field if Ka/Kb is invalid
    }
}

function updateKa() {
    const pKaOrpKbValue = parseFloat(input3.value);
    if (!isNaN(pKaOrpKbValue)) {
        const KaOrKbValue = Math.pow(10, -pKaOrpKbValue);
        input2.value = KaOrKbValue.toExponential(4);  // Display in scientific notation for clarity
    } else {
        input2.value = "";  // Clear the Ka/Kb field if pKa/pKb is invalid
    }
}

function calculateph() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    const bufferType = inputdrop1.value;
    const KaOrKb = parseFloat(input2.value);
    const pKaOrpKb = parseFloat(input3.value);
    const concentration = convertToStandardUnit(parseFloat(input4.value), inputdrop4.value);
    const saltConcentration = convertToStandardUnit(parseFloat(input5.value), inputdrop5.value);

    if (isNaN(KaOrKb) || isNaN(pKaOrpKb) || isNaN(concentration) || isNaN(saltConcentration)) {
        alert("Please ensure all inputs are valid.");
        return;
    }

    let pH = 0;

    // For Acid
    if (bufferType === "Acid") {
        pH = pKaOrpKb + Math.log10(saltConcentration / concentration);
    } 
    // For Base
    else if (bufferType === "Base") {
        const pOH = pKaOrpKb + Math.log10(saltConcentration / concentration);
        pH = 14 - pOH;
    }

    // Display the result
    result.innerText = `pH : ${pH.toFixed(4)}`;
}

// Trigger calculation on button click
calcBtn.addEventListener("click", calculateph);

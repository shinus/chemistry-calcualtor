console.log("guess updated");

let dropOptions = [
  { value: "O_solute", name: "Mass percentage for solute" },
  { value: "O_chemical", name: "Mass percentage for chemical" },
];

let units = [
  { value: "g", name: "gram" },
  { value: "kg", name: "kilogram" },
  { value: "oz", name: "ounce" },
  { value: "µg", name: "microgram" },
  { value: "mg", name: "miligram" },
  { value: "dag", name: "decagram" },
  { value: "ton", name: "metric ton" },
  { value: "lb", name: "pound" },
];

let input0 = document.getElementById("input0");
let inputdrop0 = document.getElementById("inputdrop0");
let inputdrop1 = document.getElementById("inputdrop1");
let mass_of_solute = document.getElementById("input1");
let inputdrop2 = document.getElementById("inputdrop2");
let mass_of_solvent = document.getElementById("input2");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");
let label1 = document.querySelector("label[for='label1']");
let label2 = document.querySelector("label[for='label2']");

console.log(label1);
console.log(label2);

dropOptions.forEach((option) => {
  let opt = document.createElement("option");
  opt.value = option.value;
  opt.text = option.name;
  inputdrop0.add(opt);
});

units.forEach((option) => {
  let opt = document.createElement("option");
  opt.value = option.value;
  opt.text = option.name;
  inputdrop1.add(opt);
  inputdrop2.add(opt.cloneNode(true)); // Clone the option for the second dropdown
});

inputdrop0.addEventListener("change", function () {
  switch (inputdrop0.value) {
    case "O_solute":
      label1.innerText = "Mass of Solute";
      label2.innerText = "Mass of Solvent";
      break;
    case "O_chemical":
      label1.innerText = "Mass of Chemical";
      label2.innerText = "Total Mass of Compound";
      break;
    case "O_composition":
      // Update labels if needed for this option
      break;
  }
  calculateMassPercent(); // Recalculate when option changes
});


// Event listeners for real-time updates
mass_of_solute.addEventListener("input", calculateMassPercent);
mass_of_solvent.addEventListener("input", calculateMassPercent);
inputdrop1.addEventListener("change", calculateMassPercent);
inputdrop2.addEventListener("change", calculateMassPercent);

calcBtn.addEventListener("click", calculateMassPercent);

// Calculate Mass Percent
// Calculate Mass Percent
function calculateMassPercent() {
    let soluteVal = convertToGrams(
      parseFloat(mass_of_solute.value),
      inputdrop1.value
    );
    let solventVal = convertToGrams(
      parseFloat(mass_of_solvent.value),
      inputdrop2.value
    );
  
    let massPercent;
    if (inputdrop0.value === "O_solute") {
      let solutionVal = soluteVal + solventVal;
      massPercent = (soluteVal / solutionVal) * 100;
    } else if (inputdrop0.value === "O_chemical") {
      massPercent = (soluteVal / solventVal) * 100; // Here, soluteVal is Mass of Chemical and solventVal is Total Mass of Compound
    }
  
    result.innerText = `Mass Percent: ${massPercent.toFixed(2)}%`;
  }
  

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

console.log("drop 2 fix");

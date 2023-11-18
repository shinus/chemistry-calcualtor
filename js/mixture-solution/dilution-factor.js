let dropdownVolume = [
  { value: "mms", name: "cubic millimeters (mms)" },
  { value: "crn3", name: "cubic centimeters (crn3)" },
  { value: "dm3", name: "cubic decimeters (dm3)" },
  { value: "mi", name: "cubic meters (mi)" },
  { value: "cu in", name: "cubic inches (cu in)" },
  { value: "cu ft", name: "cubic feet (cu ft)" },
  { value: "cu yd", name: "cubic yards (cu yd)" },
  { value: "ml", name: "milliliters (ml)" },
  { value: "liters", name: "liters" },
  { value: "US gal", name: "gallons (US) (US gal)" },
  { value: "UK gal", name: "gallons (I-JK) (UK gal)" },
  { value: "US fl oz", name: "fluid ounces (US) (US fl oz)" },
  { value: "UK fl oz", name: "fluid ounces (UK) (UK fl oz)" }
];
  

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
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

console.log("code v5");
calcBtn.addEventListener("click", calculateDilutionFactor);
calcBtn.style.background = "black";

dropdownVolume.forEach((listitem) => {
  let option = document.createElement("option");
  option.value = listitem.value;
  option.text = `${listitem.value} - ${listitem.name}`;
  inputdrop1.add(option);
  inputdrop2.add(option.cloneNode(true))
  inputdrop3.add(option.cloneNode(true))
  inputdrop1.value = "mi";
  inputdrop2.value = "mi";
  inputdrop3.value = "mi";
});

function convertToStandardCubicMeter(value, unit) {
  switch (unit) {
      case "mms":
          return value * 1e-9;
      case "crn3":
          return value * 1e-6;
      case "dm3":
          return value * 1e-3;
      case "mi":
          return value;  // Already in m³
      case "cu in":
          return value * 1.6387e-5;
      case "cu ft":
          return value * 0.0283168;
      case "cu yd":
          return value * 0.764555;
      case "ml":
          return value * 1e-6;
      case "liters":
          return value * 1e-3;
      case "US gal":
          return value * 0.00378541;
      case "UK gal":
          return value * 0.00454609;
      case "US fl oz":
          return value * 2.95735e-5;
      case "UK fl oz":
          return value * 2.84131e-5;
      default:
          return value;
  }
}

function convertFromStandardCubicMeter(value, unit) {
  switch (unit) {
      case "mms":
          return value * 1e9;
      case "crn3":
          return value * 1e6;
      case "dm3":
          return value * 1e3;
      case "mi":
          return value;  // Already in m³
      case "cu in":
          return value * 61023.7;
      case "cu ft":
          return value * 35.3147;
      case "cu yd":
          return value * 1.30795;
      case "ml":
          return value * 1e6;
      case "liters":
          return value * 1e3;
      case "US gal":
          return value * 264.172;
      case "UK gal":
          return value * 219.969;
      case "US fl oz":
          return value * 33814.0;
      case "UK fl oz":
          return value * 35195.1;
      default:
          return value;
  }
}


function calculateDilutionFactor() {
  const unit1 = inputdrop1.value;
  const unit2 = inputdrop2.value;
  const unit3 = inputdrop3.value;

  // Convert the input values to standard cubic meters
  const initialVolumeInM3 = convertToStandardCubicMeter(parseFloat(input1.value), unit1);
  const dilutantVolumeInM3 = convertToStandardCubicMeter(parseFloat(input2.value), unit2);

  // Calculate the final volume in cubic meters
  const finalVolumeInM3 = initialVolumeInM3 + dilutantVolumeInM3;

  // Convert the final volume back to the desired unit
  const finalVolumeInDesiredUnit = convertFromStandardCubicMeter(finalVolumeInM3, unit3);

  const totalToStock = `1:${(finalVolumeInM3 / initialVolumeInM3).toFixed(4)}`;
  const dilutantToStock = `1:${(dilutantVolumeInM3 / initialVolumeInM3).toFixed(4)}`;

  // Display the results
  result.textContent = `Final Volume (in ${unit3}): ${finalVolumeInDesiredUnit.toFixed(2)}; Total to Stock: ${totalToStock}; Dilutant to Stock: ${dilutantToStock}`;
}


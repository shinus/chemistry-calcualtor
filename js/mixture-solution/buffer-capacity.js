let dropdownliter = [
    { value: "mm3", name: "cubic millimeters (mm3)" },
    { value: "cm3", name: "cubic centimeters (cm3)" },
    { value: "m3", name: "cubic meters (m3)" },
    { value: "cu in", name: "cubic inches (cu in)" },
    { value: "cu ft", name: "cubic feet (cu ft)" },
    { value: "ml", name: "milliliters (ml)" },
    { value: "liters", name: "liters" },
    { value: "US gal", name: "gallons (US) (US gal)" },
    { value: "UK gal", name: "gallons (UK) (UK gal)" },
  ];
  

let input1 = document.getElementById("input1");
let inputdrop1 = document.getElementById("inputdrop1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let inputdrop2 = document.getElementById("inputdrop2");
let inputdrop3 = document.getElementById("inputdrop3");
let inputdrop4 = document.getElementById("inputdrop4");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;


var queryParams = [
  { name: "acid", values: input1 },
  { name: "aciddrop", values: inputdrop1 },
  { name: "initial", values: input2 },
  { name: "final", values: input3 },
  { name: "buffer", values: inputdrop4 },
];

function setParamValues(queryParams) {
  const params = new URLSearchParams(window.location.search);
  for (const queryP of queryParams) {
      var parameter_value = params.get(queryP.name);
      if (queryP.values.tagName === "INPUT") {
          queryP.values.value = parameter_value;
      } else if (queryP.values.tagName === "SELECT") {
          queryP.values.value = parameter_value; // Change selectedIndex to value
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

dropdownliter.forEach((listitem) => {
  let option = document.createElement("option");
  option.value = listitem.value;
  option.text = `${listitem.value} - ${listitem.name}`;
  inputdrop1.add(option);
  inputdrop4.add(option.cloneNode(true));
  inputdrop1.value = "liters";
  inputdrop4.value = "liters";
});

input1.placeholder = 'mol' 

function convertToStandardLiter(value, unit) {
    switch (unit) {
      case "mm3":
        return value * 1e-6; // 1 mm³ is 1e-6 liters
      case "cm3":
        return value * 1e-3; // 1 cm³ is 1e-3 liters
      case "m3":
        return value * 1e3; // 1 m³ is 1000 liters
      case "cu in":
        return value * 0.0163871; // 1 cubic inch is approximately 0.0163871 liters
      case "cu ft":
        return value * 28.3168; // 1 cubic foot is approximately 28.3168 liters
      case "ml":
        return value; // 1 milliliter is 1e-3 liters but for simplicity, it's equivalent to 1 ml
      case "liters":
        return value; // Already in standard unit
      case "US gal":
        return value * 3.78541; // 1 US gallon is approximately 3.78541 liters
      case "UK gal":
        return value * 4.54609; // 1 UK gallon is approximately 4.54609 liters
      default:
        return value; // Return the original value if the unit isn't recognized
    }
  }



// Event Listeners for dynamic update on dropdown change
inputdrop1.addEventListener("change", updateResults);
// inputdrop2.addEventListener("change", updateResults);
// inputdrop3.addEventListener("change", updateResults);
inputdrop4.addEventListener("change", updateResults);

// Function to update results dynamically
function updateResults() {
  let filledInputs = 0;

  if (input1.value) filledInputs++;
  if (input2.value) filledInputs++;
  if (input3.value) filledInputs++;
  if (input4.value) filledInputs++;

  if (filledInputs === 3) {
    calculatebuffer();
  }
}
function calculatebuffer() {
    const volume = convertToStandardLiter(parseFloat(input1.value), inputdrop1.value); // Convert to liters
    const initialPH = parseFloat(input2.value);
    const finalPH = parseFloat(input3.value);
  
    // Validate pH values
    if (initialPH < 0 || initialPH > 14 || finalPH < 0 || finalPH > 14) {
      result = "Please enter valid pH values between 0 and 14.";
      return;
    }
  
    if (isNaN(volume) || isNaN(initialPH) || isNaN(finalPH)) {
      result = "Please enter valid values.";
      return;
    }
  
    const deltaPH = finalPH - initialPH;
    const bufferCapacity = volume / deltaPH; // This assumes that the amount in input1 is molarity (mol/L)
  
    return result = "Buffer capacity: " + bufferCapacity.toFixed(2) + " mol/liters";
  }
  
  
  function showResult() {
    if (event && event.type == "click") {
      reloadPage(queryParams);
      return;
  }
    var result = calculatebuffer();
    output.innerHTML = "<b>" + result + "</b>";
}

calcBtn.addEventListener("click", showResult);


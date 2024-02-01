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

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "mass", values: input1 },
    { name: "massunit", values: inputdrop1 },
    { name: "weight", values: input2 },
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

gmunits.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop1.add(opt);
    inputdrop1.value = "g";
});

function calculate() {
    const mass = parseFloat(input1.value);
    const molecularWeight = parseFloat(input2.value);
    const massUnit = inputdrop1.value;

    // Convert mass to grams if it's not already in grams
    const massInGrams = convertToGrams(mass, massUnit);

    // Calculate moles using the mole = mass / molecular weight formula
    const moles = massInGrams / molecularWeight;


    // Display the result with four decimal places
    result = "Moles: " + moles.toFixed(2) + " molars";
    return result
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


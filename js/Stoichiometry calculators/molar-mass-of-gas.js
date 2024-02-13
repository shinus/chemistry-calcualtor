// Unit conversion factors for pressure units (Pa as the base unit)
const pressureConversionFactors = {
    Pa: 1,
    bar: 100000,
    at: 98066.5,
    atm: 101325,
    torr: 133.322,
    hPa: 100,
    kPa: 1000,
    mmHg: 133.322,
};

// Unit conversion factors for temperature units (Kelvin as the base unit)
const temperatureConversionFactors = {
    K: 1,
    F: 5/9,
    C: 1,
};

// Unit conversion factors for volume units (cubic meters as the base unit)
const volumeConversionFactors = {
    mm3: 1e-9,
    cm3: 1e-6,
    dm3: 1e-3,
    m3: 1,
    "cu in": 0.000016387064,
    "cu ft": 0.0283168466,
    ml: 1e-6,
    l: 0.001,
    "US gal": 0.00378541,
    tbsp: 0.00002218474,
};

// Unit conversion factors for mass units (grams as the base unit)
const massConversionFactors = {
    µg: 0.000001,
    pg: 1e-12,
    mg: 0.001,
    g: 1,
    dag: 10,
    kg: 1000,
};

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
    { name: "pressure", values: input1 },
    { name: "temperature", values: input2 },
    { name: "volume", values: input3 },
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

// Define a function to calculate the molar mass
function calculateMolarMass() {
   var a = Number(input1.value)
   var b = Number(input2.value)
   var c = Number(input3.value)
   var d = Number(input4.value)
   var result, result2;
   var r = 0.0821;

   result = (a * c) / (r * b);
   result2  = d / result;
   return [result, result2]
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var [result, result2] = calculateMolarMass();
  
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
  
    output.innerHTML = "";
  
    div1.innerHTML = "<b> Moles  " + result.toFixed(2)  +  "  mol </b>";
    div2.innerHTML = "<b>Molar mass of the gas " + result2.toFixed(2)  +  "  g/mol </b>";
  
    output.append(div1);
    output.append(div2);
    output.append(div3);
  }
  
  calcBtn.addEventListener("click", showResult);

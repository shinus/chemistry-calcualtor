
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "ions", values: input1 },
  { name: "osmotic", values: input2 },
  { name: "molar", values: input3 },
  { name: "temperature", values: input4 },
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

input3.placeholder = 'Mol/L';
input4.placeholder = 'Kelvin';

function calculate() {
    const n = parseFloat(input1.value);
    const osmoticCoefficient = parseFloat(input2.value);
    const concentration = parseFloat(input3.value);
    const temperature = parseFloat(input4.value);

    if (isNaN(n) || isNaN(osmoticCoefficient) || isNaN(concentration) || isNaN(temperature) || n <= 0 || osmoticCoefficient <= 0 || concentration <= 0 || temperature <= 0) {
        alert("Please enter valid values for all input fields.");
        return;
    }

    const gasConstant = 8.31446261815324; // Universal gas constant in J/(K•mol)
    const osmoticPressure = n * osmoticCoefficient * concentration * gasConstant * temperature;

   return result = osmoticPressure;
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
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
  
    output.innerHTML = "";
  
    div1.innerHTML = "<b>  " + result.toFixed(2) + " Pa </b>";
  
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
  }
  
  calcBtn.addEventListener("click", showResult);




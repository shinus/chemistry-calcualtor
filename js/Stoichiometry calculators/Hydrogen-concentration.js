

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");


var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "pH", values: input1 },
    { name: "pOH", values: input2 },
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

function calculate() {
    const pH = parseFloat(input1.value);
    const pOH = parseFloat(input2.value);

    if (!isNaN(pH) && pH >= 0) {
        // Calculate pOH if pH is provided
        const calculatedPOH = 14 - pH;
        input2.value = calculatedPOH.toFixed(2); // Display pOH up to 2 decimal places

        // Calculate hydrogen ion concentration ([H+]) using pH: [H+] M = 10^(-pH)
        const concentration = Math.pow(10, -pH);

        // Convert the concentration to the selected unit and display
        result = concentration.toFixed(4); // Display concentration up to 4 decimal places
    } else if (!isNaN(pOH) && pOH >= 0) {
        // Calculate pH if pOH is provided
        const calculatedpH = 14 - pOH;
        input1.value = calculatedpH.toFixed(2); // Display pH up to 2 decimal places

        // Calculate hydrogen ion concentration ([H+]) using pOH: [H+] M = 10^(-pOH)
        const concentration = Math.pow(10, -pOH);

        // Convert the concentration to the selected unit and display
        result = concentration.toFixed(2); // Display concentration up to 4 decimal places
    } else {
        alert("Please enter a valid pH or pOH value.");
    }
    return result
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

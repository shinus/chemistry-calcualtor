
let input1 = document.getElementById("input1");
let inputdrop1 = document.getElementById('inputdrop1')
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let inputdrop2 = document.getElementById("inputdrop2");
let inputdrop3 = document.getElementById("inputdrop3");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");


var queryParams = [
    { name: "charge", values: input1 },
    { name: "strength", values: input2 },
    { name: "activity", values: input3 },
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

init()


function calculate() {
    const A = 0.509; // Constant for water at 25°C
    let z = parseFloat(input1.value);
    let I = parseFloat(input2.value);
    let f = parseFloat(input3.value);

    let result = "";

    if (isNaN(z)) {
        z = Math.sqrt(Math.abs(Math.log10(f) / (2 * A * Math.sqrt(I)))); // Corrected formula for Z
        result = "Charge number of ions (Z) = " + z.toFixed(2);
    } else if (isNaN(I)) {
        I = Math.pow(10, -A * z * z); // Corrected formula for I
        result = "Ionic strength (I) = " + I.toFixed(2);
    } else if (isNaN(f)) {
        f = Math.pow(10, -A * z * z / Math.sqrt(I)); // Corrected formula for f
        result = "Activity coefficient (f) = " + f.toFixed(2);
    } else {
        result = "Please leave one of the values empty.";
    }
    return result;
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

    output.innerHTML = "";

    div1.innerHTML = "<b> " + result + "  </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}


calcBtn.addEventListener("click", showResult);
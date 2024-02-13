
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "constant", values: input1 },
  { name: "pressure", values: input2 },
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

function calculateLangmuir() {
    const eqConstant = parseFloat(input1.value);
    const partialPressure = parseFloat(input2.value);

    if (isNaN(eqConstant) || isNaN(partialPressure) || eqConstant <= 0 || partialPressure < 0) {
        alert("Please enter valid values for Equilibrium constant and Partial pressure.");
        return;
    }

    const surfaceFraction = eqConstant * partialPressure / (1 + eqConstant * partialPressure);
    const surfacePercent = surfaceFraction * 100;
    var result, result2;

    result = surfaceFraction
    result2 = surfacePercent
    return [result, result2]
}

function showResult() {
    if (event && event.type == "click") {
      reloadPage(queryParams);
      return;
    }
    var [result, result2] = calculateLangmuir();
  
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
  
    output.innerHTML = "";
  
    div1.innerHTML = "<b> Surface Fraction: " + result.toFixed(2) + "  </b>";
    div2.innerHTML = "<b> Surface Percent: " + result2.toFixed(2) + " % </b>";
  
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
  }
  
  calcBtn.addEventListener("click", showResult);


let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "gas1", values: input1 },
  { name: "gas2", values: input2 },
  { name: "molar1", values: input3 },
  { name: "molar2", values: input4 },
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
    const rate1 = parseFloat(input1.value);
    const rate2 = parseFloat(input2.value);
    const molarmass1 = parseFloat(input3.value);
    const molarmass2 = parseFloat(input4.value);

    let missingMolarMass1 = NaN;
    let missingMolarMass2 = NaN;
    let validInputCount = 0;

    if (!isNaN(rate1)) validInputCount++;
    if (!isNaN(rate2)) validInputCount++;
    if (!isNaN(molarmass1)) validInputCount++;
    if (!isNaN(molarmass2)) validInputCount++;

    if (validInputCount >= 2) {
      if (!isNaN(rate1) && !isNaN(rate2) && isNaN(molarmass1) && !isNaN(molarmass2)) {
        missingMolarMass1 = (rate2 * rate2 * molarmass2) / (rate1 * rate1);
      } else if (!isNaN(rate1) && !isNaN(rate2) && !isNaN(molarmass1) && isNaN(molarmass2)) {
        missingMolarMass2 = (rate1 * rate1 * molarmass1) / (rate2 * rate2);
      }

      var result, result2, result3, result4;

      result = rate1;
      result2 = rate2;
      result3 = !isNaN(molarmass1) ? molarmass1 : missingMolarMass1;
      result4 = !isNaN(molarmass2) ? molarmass2 : missingMolarMass2;
    } else {
      result = "Please provide numeric values in at least two input fields.";
    }
     return [result, result2, result3, result4]
  }

  function showResult() {
    if (event && event.type == "click") {
      reloadPage(queryParams);
      return;
    }
    var [result, result2, result3, result4] = calculate();
  
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
  
    output.innerHTML = "";
  
    div1.innerHTML = "<b>  Rate of Effusion of Gas 1: " + result.toFixed(2) + "  </b>";
    div2.innerHTML = "<b>  Rate of Effusion of Gas 2: " + result2.toFixed(2) + "  </b>";
    div3.innerHTML = "<b>  Molar Mass of Gas 1 (optional): " + result3.toFixed(2) + " g/mol </b>";
    div4.innerHTML = "<b>  Molar Mass of Gas 2 (optional): " + result4.toFixed(2) + " g/mol </b>";
  
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
  }
  
  calcBtn.addEventListener("click", showResult);
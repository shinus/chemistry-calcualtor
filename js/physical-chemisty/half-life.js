
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "initial", values: input1 },
  { name: "remaining", values: input2 },
  { name: "time", values: input3 },
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
    const initial = parseFloat(input1.value);
    const remaining = parseFloat(input2.value);
    const elapsed = parseFloat(input3.value);

    if (isNaN(initial) || isNaN(remaining) || isNaN(elapsed)) {
        result.innerHTML = "Please enter a value in all three input fields.";
        return;
    }

    const halfLife = elapsed * Math.log(2) / Math.log(initial / remaining);
    const decayConstant = Math.log(2) / halfLife;
    const meanLifetime = halfLife / Math.log(2);

    var result, result2, result3;

    result = meanLifetime;
    result2 = decayConstant;
    result3 = halfLife;

    return [result, result2, result3]
}

  
function showResult() {
    if (event && event.type == "click") {
      reloadPage(queryParams);
      return;
    }
    var [result, result2, result3] = calculate();
  
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
  
    output.innerHTML = "";
  
    div1.innerHTML = "<b> Mean Lifetime: " + result.toFixed(2) + "  </b>";
    div2.innerHTML = "<b> Decay Constant: " + result2.toFixed(2) + "  </b>";
    div3.innerHTML = "<b> Half-Life: " + result3.toFixed(2) + "  </b>";
  
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
  }
  
  calcBtn.addEventListener("click", showResult);


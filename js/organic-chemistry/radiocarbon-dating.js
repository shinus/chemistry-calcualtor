let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "percent", values: input1 },
  { name: "halflife", values: input2 },
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
  const percentRemaining = parseFloat(input1.value);
  const halfLife = parseFloat(input2.value);

  const k = Math.log(2) / halfLife;
  const t = Math.log(percentRemaining / 100) / k;

 return result = t.toFixed(2);
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

  div1.innerHTML =
    "<b>radiocarbon age  " + result  +"  </b>";

  output.append(div1);
  output.append(div2);
  output.append(div3);
  output.append(div4);
  output.append(div5);
}

calcBtn.addEventListener("click", showResult);

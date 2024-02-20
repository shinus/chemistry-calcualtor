var ions = document.getElementById("input1");
var strength = document.getElementById("input2");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "ions", values: ions },
  { name: "strength", values: strength },
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

function getExact() {
  var io = Number(ions.value);
  var st = Number(strength.value);
  var result;
  var a = Math.sqrt(io);
  var b = Math.pow(st, 2);
  var c = -0.509;

  var activityCoefficient = a * b * c;
  result = Math.pow(10, activityCoefficient);

  return result;
}

function showResult() {
  if (event && event.type == "click") {
    reloadPage(queryParams);
    return;
  }
  var result = getExact();

  var div1 = document.createElement("div");

  output.innerHTML = "";

  div1.innerHTML = "<b>Activity coefficient (f)  " + result.toFixed(2) + "   </b>";

  output.append(div1);
}

calcBtn.addEventListener("click", showResult);

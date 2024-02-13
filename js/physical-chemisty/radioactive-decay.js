let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "mass", values: input1 },
  { name: "substance", values: input2 },
  { name: "halflife", values: input3 },
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
  const mass = Number(input1.value)
  const molarMass = Number(input2.value)
  const halfLife = Number(input3.value)
  const NA = 6.02214076e23; 

  const activity = (NA / molarMass) * mass * Math.LN2 / halfLife;

  const specificActivity = (NA * Math.LN2) / (molarMass * halfLife);
  var result, result2;
  
  result = activity;
  result2 = specificActivity;

  return [result,result2]
}

function showResult() {
  if (event && event.type == "click") {
    reloadPage(queryParams);
    return;
  }
  var [result, result2] = calculate();

  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");
  var div4 = document.createElement("div");
  var div5 = document.createElement("div");

  output.innerHTML = "";

  div1.innerHTML = "<b> Activity: " + result.toExponential(4) + " Bq </b>";
  div2.innerHTML = "<b> Specific Activity: " + result2.toExponential(4) + " Bq/g </b>";

  output.append(div1);
  output.append(div2);
  output.append(div3);
  output.append(div4);
  output.append(div5);
}

calcBtn.addEventListener("click", showResult);
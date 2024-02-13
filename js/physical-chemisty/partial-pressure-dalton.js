let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "pressure", values: input1 },
  { name: "fraction", values: input2 },
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
    
const totalPressure = parseFloat(input1.value
  );
  const moleFraction = parseFloat(input2.value);
  

    const partialPressure = totalPressure * moleFraction;
  
  
 return result = partialPressure;
  
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

  div1.innerHTML = "<b> Partial Pressure: " + result.toFixed(2) + "  </b>";

  output.append(div1);
  output.append(div2);
  output.append(div3);
  output.append(div4);
  output.append(div5);
}

calcBtn.addEventListener("click", showResult);
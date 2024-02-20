let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;


var queryParams = [
  { name: "acid", values: input1 },
  { name: "initial", values: input2 },
  { name: "final", values: input3 },
];

function setParamValues(queryParams) {
  const params = new URLSearchParams(window.location.search);
  for (const queryP of queryParams) {
      var parameter_value = params.get(queryP.name);
      if (queryP.values.tagName === "INPUT") {
          queryP.values.value = parameter_value;
      } else if (queryP.values.tagName === "SELECT") {
          queryP.values.value = parameter_value; // Change selectedIndex to value
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

function calculatebuffer() {
    const volume = parseFloat(input1.value); // Convert to liters
    const initialPH = parseFloat(input2.value);
    const finalPH = parseFloat(input3.value);
  
    var result = (volume / (finalPH - initialPH))
  
    return result = "Buffer capacity: " + result.toFixed(2) + " mol/liters";
  }
  
  
  function showResult() {
    if (event && event.type == "click") {
      reloadPage(queryParams);
      return;
  }
    var result = calculatebuffer();
    output.innerHTML = "<b>" + result + "</b>";
}

calcBtn.addEventListener("click", showResult);


let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "moles", values: input1 },
  { name: "temperature", values: input2 },
  { name: "volume", values: input3 },
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
  const moles = parseFloat(input1.value);
  const temperature = parseFloat(input2.value);
  const volume = parseFloat(input3.value);

  if (
    isNaN(moles) ||
    isNaN(temperature) ||
    isNaN(volume) ||
    moles < 0 ||
    temperature < 0 ||
    volume < 0
  ) {
    alert(
      "Please enter valid values for amount of moles, temperature, and volume."
    );
    return;
  }

  const gasConstant = 8.3145; // J/(mol·K)
  const partialPressure = (moles * gasConstant * temperature) / volume;

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

  div1.innerHTML = "<b>  " + result.toFixed(2) + " Pa </b>";

  output.append(div1);
  output.append(div2);
  output.append(div3);
  output.append(div4);
  output.append(div5);
}

calcBtn.addEventListener("click", showResult);
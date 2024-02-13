
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "carbon", values: input1 },
  { name: "hydrogen", values: input2 },
  { name: "nitrogen", values: input3 },
  { name: "halogens", values: input4 },
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
    const carbon = parseFloat(input1.value);
    const hydrogen = parseFloat(input2.value);
    const nitrogen = parseFloat(input3.value);
    const halogen = parseFloat(input4.value);

    if (isNaN(carbon) || isNaN(hydrogen) || isNaN(nitrogen) || isNaN(halogen)) {
       result.textContent = "Please enter valid numeric values for all inputs.";
        return;
    }

    const degreeOfUnsaturation = carbon + 1 + nitrogen / 2 - hydrogen / 2 - halogen / 2;
   return result = degreeOfUnsaturation;
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
  
    div1.innerHTML = "<b>Degree of Unsaturation (DU):  " + result.toFixed(2)  + "  </b>";
  
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
  }
  
  calcBtn.addEventListener("click", showResult);
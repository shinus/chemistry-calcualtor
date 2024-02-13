
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let input3 = document.getElementById("input3");

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "carbon", values: input1 },
  { name: "hydrogen", values: input2 },
  { name: "oxygen", values: input3 },
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
    const carbonInput = document.getElementById("input1");
const hydrogenInput = document.getElementById("input2");
const oxygenInput = document.getElementById("input3");

const carbonCoeff = Math.round(carbonInput.value);
const hydrogenCoeff = Math.round(hydrogenInput.value / 2); 
const oxygenCoeff = Math.round(carbonInput.value + ((hydrogenInput.value / 4) - (oxygenInput.value / 2)));

const substance = "C<sub>" + carbonInput.value + "</sub>" +  
             "H<sub>" + hydrogenInput.value + "</sub>" +
             "O<sub>" + oxygenInput.value + "</sub>";

const reactants = carbonCoeff + " CO<sub>2</sub> " +  
             hydrogenCoeff + " H<sub>2</sub>O " + 
             oxygenCoeff + " O<sub>2</sub>";

const products = substance;

const equation = reactants + " &#8594; " + products; 

var result1, result2, result3,result4;
 result1 = substance
result2 = equation
result3 = reactants
result4 = products
 
return [result1,result2,result3,result4];
}

function showResult() {
    if (event && event.type == "click") {
      reloadPage(queryParams);
      return;
    }
    var [result1, result2,result3,result4] = calculate();
  
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
  
    output.innerHTML = "";
  
    div1.innerHTML = "<b><p>Substance: " + result1 + "</p> <p>Equation: " +  result2 + "</p> <p>Reactants: " + result3 + "</p> <p>Products: " + result4 + "</p></b>";
  
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
  }
  
  calcBtn.addEventListener("click", showResult);
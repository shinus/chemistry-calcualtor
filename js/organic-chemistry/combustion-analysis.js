
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "molar", values: input1 },
  { name: "carbon", values: input2 },
  { name: "water", values: input3 },
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


input1.placeholder = 'g/mol'
input2.placeholder = 'g'
input3.placeholder = 'g'


function calculate() {
    const sampleMolarMass = parseFloat(input1.value);
    const co2Mass = parseFloat(input2.value);
    const h2oMass = parseFloat(input3.value);

    const co2MolarMass = 44.010;
    const h2oMolarMass = 18.0153;

    const carbonMass = (co2Mass * (12.011 / co2MolarMass));
    const hydrogenMass = ((h2oMass * 2) * (1.00797 / h2oMolarMass));
    const oxygenMass = sampleMolarMass - carbonMass - hydrogenMass;

    const carbonMoles = carbonMass / 12.011;
    const hydrogenMoles = hydrogenMass / 1.00797;
    const oxygenMoles = oxygenMass / 15.9994;

    const smallestMoles = Math.min(carbonMoles, hydrogenMoles, oxygenMoles);

    const empiricalCarbon = Math.round(carbonMoles / smallestMoles);
    const empiricalHydrogen = Math.round(hydrogenMoles / smallestMoles);
    const empiricalOxygen = Math.round(oxygenMoles / smallestMoles);

    const empiricalFormula = `C${empiricalCarbon}H${empiricalHydrogen}O${empiricalOxygen}`;
    const empiricalMass = (empiricalCarbon * 12.011) + (empiricalHydrogen * 1.00797) + (empiricalOxygen * 15.9994);

    var result, result2;

    result = empiricalFormula  ;
    result2 = empiricalMass
   return [result,result2];
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
  
    div1.innerHTML = "<b> " + result + " emperial mass is  " +  result2 + " </b>";
  
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
  }
  
  calcBtn.addEventListener("click", showResult);

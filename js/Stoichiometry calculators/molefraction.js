let molarUnits = [
    { value: "M", name: "molars" },
    { value: "mM", name: "millimolars" },
    { value: "µM", name: "micromolars" },
    { value: "nM", name: "nanomolars" },
    { value: "pM", name: "picomolars" }
];

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");


var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "solute", values: input1 },
    { name: "solvent", values: input2 },
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
// Define a function to calculate the mole fraction
function calculate() {
    const molesSolute = parseFloat(input1.value);
    const molesSolventOrTotal = parseFloat(input2.value);
  


    if (!isNaN(molesSolute) && !isNaN(molesSolventOrTotal) && molesSolute >= 0 && molesSolventOrTotal >= 0) {
        const moleFraction = molesSolute / (molesSolute + molesSolventOrTotal);

        // Display the result with four decimal places
        result = "Mole Fraction of Solute: "  + moleFraction.toFixed(2);
    } else {
        alert("Please enter valid moles for Solute and Solvent/Total Moles.");
    }
     return result
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

    output.innerHTML = "";

    div1.innerHTML = "<b> " + result  +  "   </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
}

calcBtn.addEventListener("click", showResult);
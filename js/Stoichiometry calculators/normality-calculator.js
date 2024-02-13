
let mass_of_solute = document.getElementById("input1");
let equivalent_weight_of_solute = document.getElementById("input2");
let volume_of_solution = document.getElementById("input3");
let molality = document.getElementById("input3");
let inputdrop1 = document.getElementById("inputdrop1");
let inputdrop2 = document.getElementById("inputdrop2");
let inputdrop3 = document.getElementById("inputdrop3");
let inputdrop4 = document.getElementById("inputdrop4");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "mass", values: mass_of_solute },
    { name: "solute", values: equivalent_weight_of_solute },
    { name: "solution", values: volume_of_solution },
    // { name: "normallity", values: molality },
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
console.log('effivy')

function calculate() {
    var m = parseFloat(mass_of_solute.value);
    var e = parseFloat(equivalent_weight_of_solute.value);
    var v = parseFloat(volume_of_solution.value);

    // Calculate normality using the formula
    var n = m / (e * v);

    // Display the result with three decimal places
    result = n;
    
    // Debugging output
    console.log(result.innerText);
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

    div1.innerHTML = "<b>chemical concentrations  " + result.toFixed(2)  +  " liters  </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
}

calcBtn.addEventListener("click", showResult);
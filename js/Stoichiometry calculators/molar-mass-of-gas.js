
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "pressure", values: input1 },
    { name: "temperature", values: input2 },
    { name: "volume", values: input3 },
    { name: "mass", values: input4 },
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

// Define a function to calculate the molar mass
function calculateMolarMass() {

    const pressure = parseFloat(input1.value) 
    const temperature = parseFloat(input2.value) 
    const volume = parseFloat(input3.value) 
    const mass = parseFloat(input4.value) 

    // Ideal gas constant (R)
    const R = 0.0821; // L.atm/mol.K

    // Calculate the number of moles using the ideal gas law
    const moles = (pressure * volume) / (R * temperature);

    // Calculate molar mass if mass is provided
    let molarMass;
    if (!isNaN(mass)) {
        molarMass = mass / moles;
    } else {
        molarMass = "Mass not provided";
    }

    // Display the result
    result = molarMass.toFixed(2) + " g/mol";
    return result
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var result = calculateMolarMass();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>  " + result  +  "   </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
}

calcBtn.addEventListener("click", showResult);


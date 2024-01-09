
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");


let inputdrop1 = document.getElementById("inputdrop1");
let inputdrop2 = document.getElementById("inputdrop2");

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "potential", values: input1 },
    { name: "temperature", values: input2 },
    { name: "electrons", values: input3 },
    { name: "reduced", values: input4 },
    { name: "oxidized", values: input5 },
];

// calcBtn.style.background ='black'
// Faraday's constant 

function init() {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()

calcBtn.addEventListener("click", showResult);
// calcBtn.style.background ='black'


// Set initial values for the dropdWowns
input1.placeholder = "V";
input2.placeholder = "C";
input3.placeholder = "mol";


function getExact() {
    var standardPotential = parseFloat(input1.value);
    var temperatureCelsius = parseFloat(input2.value);
    var electronsTransferred = parseFloat(input3.value);
    var activityReduced = parseFloat(input4.value);
    var activityOxidized = parseFloat(input5.value);

    // Convert temperature from Celsius to Kelvin
    var temperatureKelvin = temperatureCelsius + 273.15;

    // Constants
    var gasConstant = 8.314; // J/(K·mol)
    var faradayConstant = 96485.3; // C/mol

    // Calculate reduction potential using the Nernst equation
    var reductionPotential = standardPotential - (gasConstant * temperatureKelvin / (electronsTransferred * faradayConstant)) * Math.log(activityReduced / activityOxidized);

    result = reductionPotential;
    return result
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var result = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>Reduction Potential (E):  " + result.toFixed(2) + " volts </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}



var enthalpy = document.getElementById("enthalpy_input_id");
var entropy = document.getElementById("entropy_input_id");
var temperature = document.getElementById("temperature_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "enthalpy", values: enthalpy },
    { name: "entropy", values: entropy },
    { name: "temperature", values: temperature },
];

function init() {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function getExact() {
    var enth = Number(enthalpy.value)
    var ento = Number(entropy.value)
    var temp = Number(temperature.value)
    var result = 0;

    result = enth - (temp * ento);
    
    return result;
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

    output.innerHTML = "";

    div1.innerHTML = "<b>Gibbs free energy (ΔG)  " + result.toFixed(2) + " kilojoules(kj)  </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
}

calcBtn.addEventListener("click", showResult);
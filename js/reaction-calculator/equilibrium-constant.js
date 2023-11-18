var concenA = document.getElementById("concenA_input_id");
var coeffA = document.getElementById("coeffA_input_id");
var concenB = document.getElementById("concenB_input_id");
var coeffB = document.getElementById("coeffB_input_id");
var concenC = document.getElementById("concenC_input_id");
var coeffC = document.getElementById("coeffC_input_id");
var concenD = document.getElementById("concenD_input_id");
var coeffD = document.getElementById("coeffD_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "concentrationA", values: concenA },
    { name: "coefficientA", values: coeffA },
    { name: "concentrationB", values: concenB },
    { name: "coefficientB", values: coeffB },
    { name: "concentrationC", values: concenC },
    { name: "coefficientC", values: coeffC },
    { name: "concentrationD", values: concenD },
    { name: "coefficientD", values: coeffD },
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
    var conA = Number(concenA.value)
    var coeA = Number(coeffA.value)
    var conB = Number(concenB.value)
    var coeB = Number(coeffB.value)
    var conC = Number(concenC.value)
    var coeC = Number(coeffC.value)
    var conD = Number(concenD.value)
    var coeD = Number(coeffD.value)
    var result = 0;

    result =  ((Math.pow(conC, coeC) * Math.pow(conD, coeD)) / (Math.pow(conB,coeB) * Math.pow(conA, coeA)));

    return result;
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var result = getExact();

    var div1 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>Equilibrium constant  " + result.toFixed(2)  +  "   </b>";

    output.append(div1);
}

calcBtn.addEventListener("click", showResult);
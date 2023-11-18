var components = document.getElementById("components_input_id");
var phase = document.getElementById("phases_input_id");
var factor = document.getElementById("factor_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "components", values: components },
    { name: "phase", values: phase },
    { name: "factor", values: factor },
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
    var comp = Number(components.value)
    var phas = Number(phase.value)
    var fact = Number(factor.value)
    var result = 0;

    result = comp - phas + fact;
    
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

    div1.innerHTML = "<b>Degrees of freedom  " + result.toFixed(0) + "   </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
}

calcBtn.addEventListener("click", showResult);
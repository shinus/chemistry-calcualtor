
let bleach = document.getElementById("input1");
let chlorine_concentration = document.getElementById("input2");
let chlorine_volume = document.getElementById("input3");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "bleach", values: bleach },
    { name: "concentration", values: chlorine_concentration },
    { name: "volume", values: chlorine_volume },
];

function setParamValues(queryParams) {
    const params = new URLSearchParams(window.location.search);
    for (const queryP of queryParams) {
        var parameter_value = params.get(queryP.name);
        if (queryP.values.tagName === "INPUT") {
            queryP.values.value = parameter_value;
        } else if (queryP.values.tagName === "SELECT") {
            queryP.values.value = parameter_value; // Change selectedIndex to value
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
    let bleachConc = parseFloat(bleach.value);
    let desiredChlorineConc = parseFloat(chlorine_concentration.value);
    let desiredVolume = parseFloat(chlorine_volume.value);
    var result , a;
     a = desiredChlorineConc * desiredVolume
     result = ( a * 0.00105) * (100 / bleachConc)

    return result
    
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var result = calculate();
    output.innerHTML = "<b>Required bleach volume " + result.toFixed(2) + " militers(ml)</b>";
}

calcBtn.addEventListener("click", showResult);


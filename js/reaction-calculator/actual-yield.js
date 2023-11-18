var theoretical = document.getElementById("theoretical_input_id");
var percent = document.getElementById("percent_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "theoretical", values: theoretical },
    { name: "percent", values: percent },
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
    var ther = Number(theoretical.value)
    var per = Number(percent.value)
    var result = 0;

    result =  (per / 100) * ther;

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

    div1.innerHTML = "<b>Actual yield  " + result.toFixed(3)  +  " grams  </b>";

    output.append(div1);
}

calcBtn.addEventListener("click", showResult);
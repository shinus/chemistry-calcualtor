var theoretical = document.getElementById("theoretical_input_id");
var actual = document.getElementById("actual_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "theoretical", values: theoretical },
    { name: "actual", values: actual },
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
    var act = Number(actual.value)
    var result = 0;

    result =  (act / ther) * 100;

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

    div1.innerHTML = "<b>Percent yield  " + result.toFixed(2)  +  " %  </b>";

    output.append(div1);
}

calcBtn.addEventListener("click", showResult);
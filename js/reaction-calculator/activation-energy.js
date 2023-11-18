var temp = document.getElementById("temperature _input_id");
var rate = document.getElementById("rate_input_id");
var constant = document.getElementById("constant_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "temperature", values: temp },
    { name: "rate", values: rate },
    { name: "constant", values: constant },
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
    var te = Number(temp.value)
    var ra = Number(rate.value)
    var co = Number(constant.value)
    var result = 0;

    result =  (-8.314 * te * Math.log(ra / co)) / 1000;

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

    div1.innerHTML = "<b>Activation energy (Eₐ)  " + result.toFixed(3)  +  " kj/mol  </b>";

    output.append(div1);
}

calcBtn.addEventListener("click", showResult);
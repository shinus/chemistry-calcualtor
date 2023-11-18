var altitude = document.getElementById("altitude_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "altitude", values: altitude },
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
    var alt = Number(altitude.value)
    var result, result2 = 0;

    result =  29.921 * Math.pow((1 - 0.0000068753 * alt), 5.2559);
    result2 = 49.161 * Math.log(result) + 44.932

    return [result, result2];
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var [result, result2] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>Pressure  " + result.toFixed(2)  +  " inches of mercury  </b>";
    div2.innerHTML = "<b>Boiling point  " + result2.toFixed(2)  +  " Fahrenheit  </b>";

    output.append(div1);
    output.append(div2);
}

calcBtn.addEventListener("click", showResult);
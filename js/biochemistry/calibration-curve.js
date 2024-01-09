
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "sensitivity", values: input1 },
    { name: "background", values: input2 },
    { name: "signal", values: input3 },
];

function init() {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

// calcBtn.style.background = "black";
calcBtn.addEventListener("click", showResult);

function getExact(){
    const a = parseFloat(input1.value);
    const b = parseFloat(input2.value);
    const y = parseFloat(input3.value);

    if (isNaN(a) || isNaN(b) || isNaN(y)) {
        result = "Please enter valid numeric values.";
    } else {
        const x = (y - b) / a;
        result = x;
    }
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

    output.innerHTML = "";

    div1.innerHTML = "<b>Concentration (x):  " + result  +  "  </b>";

    output.append(div1);
    output.append(div2);
}
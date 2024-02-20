let conjugate_base = document.getElementById("input1");
let acid = document.getElementById("input2");
let pk = document.getElementById("input3");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "base", values: conjugate_base },
    { name: "acid", values: acid },
    { name: "constant", values: pk },
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

function calculatePh() {
    let baseVal = parseFloat(conjugate_base.value);
    let acidVal = parseFloat(acid.value);
    let pKa = parseFloat(pk.value);

    let pH = pKa + Math.log10(baseVal / acidVal);
    result.innerHTML = `pH of the solution: ${pH.toFixed(4)}`;
}

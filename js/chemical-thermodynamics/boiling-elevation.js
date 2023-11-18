var solvent = document.getElementById("solvent_input_id");
var constant = document.getElementById("constant_input_id");
var molarity = document.getElementById("molarity_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "solvent", values: solvent },
    { name: "constant", values: constant },
    { name: "molarity", values: molarity },
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
    var solv = Number(solvent.value)
    var cons = Number(constant.value)
    var mola = Number(molarity.value)
    var result, result2 = 0;

    result =  (cons * mola);
    result2 = solv + result

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

    div1.innerHTML = "<b>Boiling point elevation (ΔT)  " + result.toFixed(0)  +  " °C  </b>";
    div2.innerHTML = "<b>Boiling point of solution (T_solution)  " + result2.toFixed(0)  +  " °C  </b>";

    output.append(div1);
    output.append(div2);
}

calcBtn.addEventListener("click", showResult);
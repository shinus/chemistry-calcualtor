var initemp = document.getElementById("INtemperature_input_id");
var fintemp = document.getElementById("FItemperature_input_id");
var inipress = document.getElementById("INpressure_input_id");
var vaporization = document.getElementById("vaporization_input_id");
var functio = document.getElementById("function_input_id");
var solvent = document.getElementById("solvent_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "initial_temperature", values: initemp },
    { name: "final_temperature", values: fintemp },
    { name: "initial_pressure", values: inipress },
    { name: "vaporization", values: vaporization },
    { name: "function", values: functio },
    { name: "solvent", values: solvent },
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
    var itemp = Number(initemp.value)
    var ftemmp = Number(fintemp.value)
    var ipres = Number(inipress.value)
    var vapo = Number(vaporization.value)
    var func = Number(functio.value)
    var solv = Number(solvent.value)
    var result, result2 = 0;

    var a = (vapo / (8.3145) * ((1 / ftemmp) - (1 / itemp)))
    result = (ipres / Math.pow(Math.E, a))
    result2 =  solv * func;
    
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
    var div3 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>Final pressure  " + result.toFixed(2) + "   pascals (Pa) </b>";
    div2.innerHTML = "<b>Vapor pressure of the solution  " + result2.toFixed(0) + " pascals (Pa) </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
}

calcBtn.addEventListener("click", showResult);
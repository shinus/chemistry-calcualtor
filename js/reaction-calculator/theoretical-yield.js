var mass = document.getElementById("mass_input_id");
var weight = document.getElementById("weight_input_id");
var stoichiometry = document.getElementById("stoichiometry_input_id");
var stoich = document.getElementById("stoich2_input_id");
var molecular = document.getElementById("molecular_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "mass", values: mass },
    { name: "weight", values: weight },
    { name: "stoichiometry", values: stoichiometry },
    { name: "stoichiometry2", values: stoich },
    { name: "weight2", values: molecular },
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
    var ma = Number(mass.value)
    var we = Number(weight.value)
    var st = Number(stoichiometry.value)
    var st2 = Number(stoich.value)
    var we2 = Number(molecular.value)
    var result, result2, result3 = 0;

    result =  (ma / we);
    result2 = ((result / st) * (st2));
    result3 = result2 * we2;

    return [result, result2, result3];
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var [result, result2, result3] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>Limiting reagent Moles  " + result.toFixed(4)  +  " mole(s)  </b>";
    div2.innerHTML = "<b>Desired product Moles  " + result2.toFixed(4)  +  " mole(s)  </b>";
    div3.innerHTML = "<b>Theoretical yield  " + result3.toFixed(4)  +  " grams (g)  </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
}

calcBtn.addEventListener("click", showResult);
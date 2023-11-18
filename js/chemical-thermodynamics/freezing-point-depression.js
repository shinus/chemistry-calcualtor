var molality = document.getElementById("molality_input_id");
var solvent = document.getElementById("solvent_dd_Id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "molality", values: molality },
    { name: "solvent", values: solvent },
];

var soUnit = [
    {
        name: "Water",
        value: 0
    },
    {
        name: "Benzene",
        value: 1
    },
    {
        name: "Ethanol",
        value: 2
    },
    {
        name: "Chloroform",
        value: 3
    },
    {
        name: "Ether",
        value: 4
    },
    {
        name: "Nitrobenzene",
        value: 5
    },
    {
        name: "Hydrogen acetate",
        value: 6
    }
]

function init() {
    createDropDown(soUnit,solvent)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function getExact() {
    var mol = Number(molality.value)
    var sol = Number(getSelectedValue(solvent))
    var result, result2, result3 = 0;

    if(sol == 0) {
        result = 1.86;
        result2 = 0
        result3 = result2 + (result * (-mol))
    } else if(sol == 1) {
        result = 5.12;
        result2 = 5.5
        result3 = result2 + (result * (-mol))
    }  else if(sol == 2) {
        result = 1.99;
        result2 = -114.6
        result3 = result2 + (result * (-mol))
    } else if(sol == 3) {
        result = 4.68;
        result2 = -63.5
        result3 = result2 + (result * (-mol))
    } else if(sol == 4) {
        result = 1.79;
        result2 = -116.2
        result3 = result2 + (result * (-mol))
    } else if(sol == 5) {
        result = 8.1;
        result2 = 5.61
        result3 = result2 + (result * (-mol))
    } else if(sol == 6) {
        result = 3.9;
        result2 = 5.67
        result3 = result2 + (result * (-mol))
    }

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

    div1.innerHTML = "<b>Freezing point depression constant  " + result.toFixed(2) + " °C kg/mol  </b>";
    div2.innerHTML = "<b>Freezing point of pure solvent  " + result2.toFixed(2) + " °C  </b>";
    div3.innerHTML = "<b>Freezing point of solution  " + result3.toFixed(2) + " °C  </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
}

calcBtn.addEventListener("click", showResult);
var fuel = document.getElementById("fuel_dd_Id");
var water = document.getElementById("water_input_id");
var combusted = document.getElementById("combusted_input_id");
var vaporized = document.getElementById("vaporized_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "fuel", values: fuel },
    { name: "water", values: water },
    { name: "combusted", values: combusted },
    { name: "vaporized", values: vaporized },
];

var fuUnit = [
    {
        name: "Hydrogen",
        value: 119.96
    },
    {
        name: "Methane",
        value: 50
    },
    {
        name: "Ethane",
        value: 47.62
    },
    {
        name: "Propane",
        value: 46.35
    },
    {
        name: "Butane",
        value: 45.75
    },
    {
        name: "Pentane",
        value: 45.34
    },
    {
        name: "Paraffin wax",
        value: 41.5
    },
    {
        name: "Kerosene",
        value: 43
    },
    {
        name: "Diesel",
        value: 43.4
    },
    {
        name: "Natural gas",
        value: 47.1
    },
];

function init() {
    createDropDown(fuUnit,fuel)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function getExact() {
    var fu = Number(getSelectedValue(fuel))
    var wa = Number(water.value)
    var co = Number(combusted.value)
    var va = Number(vaporized.value)
    var result = 0;

    result = fu + wa * (co / va);
    
    return result;
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var result = getExact();
    var ff = Number(getSelectedValue(fuel))

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>Lower heating value  " + ff + "   Mj/kg </b>";
    div2.innerHTML = "<b>Heat of combustion  " + result.toFixed(2) + "  megajoules per kilogram (Mj/kg) </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
}

calcBtn.addEventListener("click", showResult);
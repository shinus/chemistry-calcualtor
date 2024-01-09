var volume = document.getElementById("volume_input_id");
var temperature = document.getElementById("temperature_input_id");
var pressure = document.getElementById("pressure_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "volume", values: volume },
    { name: "temperature", values: temperature },
    { name: "pressure", values: pressure },
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
    var vol = Number(volume.value)
    var temp = Number(temperature.value)
    var press = Number(pressure.value)
    var result, result2 = 0;

    result = vol * (273.15 / temp) * (press / 760);
    result2 = result / 22.4;
    
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

    div1.innerHTML = "<b> Volume  " + result.toFixed(3) + "   Liters (l) </b>";
    div2.innerHTML = "<b> No. of moles  " + result2.toFixed(3) + "  </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
}

calcBtn.addEventListener("click", showResult);

const pKaInput = document.getElementById("input1");
const pKbInput = document.getElementById("input2");

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "acid", values: pKaInput },
    { name: "base", values: pKbInput },
];

function init() {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()

// calcBtn.style.background = "black";
calcBtn.addEventListener("click", showResult);

function getExact() {
    const pKa = parseFloat(pKaInput.value);
    const pKb = parseFloat(pKbInput.value);

    if (!isNaN(pKa) && !isNaN(pKb)) {
        const pI = (pKa + pKb) / 2;
        result = pI;
    } else {
        result = "Please enter valid pKa and pKb values.";
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

    div1.innerHTML = "<b>Isoelectric point (pI)  " + result +  "  </b>";

    output.append(div1);
    output.append(div2);
}
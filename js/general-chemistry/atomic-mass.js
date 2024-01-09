
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");


var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "protonz", values: input1 },
    { name: "neutronz", values: input2 },
];

// calcBtn.style.background = 'black';

function init() {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()
calcBtn.addEventListener("click", showResult);

function getExact() {
    const protons = input1.value;
    const neutrons = input2.value;
    const atomicMass = parseInt(protons) + parseInt(neutrons);
    const atomicMassKg = atomicMass * 1.66e-27;
    const massNumber = atomicMass;

    var result, result2, result3 =
    result = atomicMass
    result2 = atomicMassKg.toExponential(3)
    result3 = massNumber
    

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
    var div4 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b> Atomic mass " + result + " atomic mass units  </b>";
    div2.innerHTML = "<b> Atomic mass (SI) " + result2 + "  ×10⁻²⁷ kg </b>";
    div3.innerHTML = "<b> Mass number " + result3 + "  </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

console.log('test 2')

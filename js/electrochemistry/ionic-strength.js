let ionicof1 = document.getElementById('input1')
let chargenumof1 = document.getElementById('input2')

let ionicof2 = document.getElementById('input3')
let chargenumof2 = document.getElementById('input4')

let ionicof3 = document.getElementById('input5')
let chargenumof3 = document.getElementById('input6')

let ionicof4 = document.getElementById('input7')
let chargenumof4 = document.getElementById('input8')

let ionicof5 = document.getElementById('input9')
let chargenumof5 = document.getElementById('input10')


var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "ion1", values: ionicof1 },
    { name: "charge1", values: chargenumof1 },
    { name: "ion2", values: ionicof2 },
    { name: "charge2", values: chargenumof2 },
    { name: "ion3", values: ionicof3 },
    { name: "charge3", values: chargenumof3 },
    { name: "ion4", values: ionicof4 },
    { name: "charge4", values: chargenumof4 },
    { name: "ion5", values: ionicof5 },
    { name: "charge5", values: chargenumof5 },
];

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
    let totalIonicStrength = 0;
    let ionInputs = [];
// Add ion inputs to the array
addIonInput(ionicof1, chargenumof1);
addIonInput(ionicof2, chargenumof2);
addIonInput(ionicof3, chargenumof3);
addIonInput(ionicof4, chargenumof4);
addIonInput(ionicof5, chargenumof5);

function addIonInput(ionicInput, chargeInput) {
    ionInputs.push({
        ionicInput: ionicInput,
        chargeInput: chargeInput
    });
}

    // Calculate the ionic strength for each ion input
    for (let i = 0; i < ionInputs.length; i++) {
        let ionConcentration = parseFloat(ionInputs[i].ionicInput.value);
        let ionCharge = parseInt(ionInputs[i].chargeInput.value);

        // Check if the inputs are valid numbers
        if (!isNaN(ionConcentration) && !isNaN(ionCharge)) {
            totalIonicStrength += ionConcentration * ionCharge * ionCharge;
        }
    }

    // Divide the total ionic strength by 2
    totalIonicStrength /= 2;

    // Display the result or use it for further calculations
    result =  totalIonicStrength;
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
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>Total Ionic Strength:  " + result.toFixed(2) + " mol/L or " + result.toFixed(2) + " mol/kg. </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}





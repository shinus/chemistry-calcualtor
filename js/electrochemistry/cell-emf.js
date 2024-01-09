
// let voltUnits = [
//     { value: 'V', name: 'volts (V)' },
//     { value: 'mV', name: 'minivolts (mV)' },
//     { value: 'kV', name: 'kilovolts (kV)' },
//     { value: 'MV', name: 'megavolts' }
// ];

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

// let inputdrop1 = document.getElementById("inputdrop1");
// let inputdrop2 = document.getElementById("inputdrop2");

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "ancode", values: input1 },
    // { name: "drop1", values: inputdrop1 },
    { name: "cathode", values: input2 },
    // { name: "drop2", values: inputdrop2 },
];

function init() {
    // createDropDown(voUnit, inputdrop1)
    // createDropDown(voUnit, inputdrop2)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()

calcBtn.addEventListener("click", showResult);
// calcBtn.style.background = 'black';

// voltUnits.forEach((option) => {
//     let opt = document.createElement("option");
//     opt.value = option.value;
//     opt.text = option.name;
//     inputdrop1.add(opt);
//     inputdrop2.add(opt.cloneNode(true));
// });

// Set initial values for the dropdWowns
// inputdrop1.value = "V";
// inputdrop2.value = "mV";

function getExact() {
    const anode = parseFloat(input1.value);
    const cathode = parseFloat(input2.value);
    // var anodeunit = getSelectedValue(inputdrop1)
    // var cathodeunit = getSelectedValue(inputdrop2)

    // Convert anode and cathode values to standard units (volts)
    // var standardAnode = (anode * anodeunit);
    // var standardCathode = (cathode * cathodeunit);

    // Calculate the EMF difference
    var emfDifference = anode - cathode;

    // Display the result in the result section
    result = emfDifference;
    return result
}

// var voUnit = [
//     {
//         name: "Volts (V)",
//         value: 0
//     },
//     {
//         name: "minivolts (mv)",
//         value: 1000
//     },
//     {
//         name: "kilovolts",
//         value: 1000
//     },
//     {
//         name: "megavolts",
//         value: 1000000
//     },
// ];
// function convertToStandardUnit(value, unit) {
//     switch (unit) {
//         case "V":
//             return value;
//         case "mV":
//             return value / 1000; // Convert millivolts to volts
//         case "µM":
//             return value / 1e6;  // Convert microvolts to volts
//         case "kV":
//             return value * 1000;  // Convert kilovolts to volts
//         case "MV":
//             return value * 1e6;   // Convert megavolts to volts
//         default:
//             return value;
//     }
// }

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var result = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>EMF Difference:  " + result.toFixed(2) + " V </b>";

    output.append(div1);
    output.append(div2);
}

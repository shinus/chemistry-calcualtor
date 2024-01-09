// Select elements 
// const massInput = document.getElementById('mass'); 
// massInput.placeholder = "Enter mass in g";

const equivalentInput = document.getElementById('equivalent');
equivalentInput.placeholder = "Enter equivalent in C/mol";

const currentInput = document.getElementById('current');  
currentInput.placeholder = "Enter current in A";

const timeInput = document.getElementById('time');
timeInput.placeholder = "Enter time in s";
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    // { name: "mass", values: massInput },
    { name: "equivalent", values: equivalentInput },
    { name: "current", values: currentInput },
    { name: "time", values: timeInput },
];

// calcBtn.style.background ='black'
// Faraday's constant 

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
  const FARADAY = 96485; 
  // const mass = parseFloat(massInput.value);
  const equivalent = parseFloat(equivalentInput.value);
  const current = parseFloat(currentInput.value);
  const time = parseFloat(timeInput.value);

  // Calculate missing value
    missing = (equivalent * current * time) / FARADAY;
 
  var result = 0;
  // Display result
  result =  missing 

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

    div1.innerHTML = "<b>mass  " + result.toFixed(2) + " V </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

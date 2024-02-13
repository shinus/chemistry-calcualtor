let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');
let input5 = document.getElementById('input5');

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "cross-section", values: input1 },
  { name: "laser", values: input2 },
  { name: "wavelength", values: input3 },
  { name: "size", values: input4 },
  { name: "time", values: input5 },
];

function setParamValues(queryParams) {
    const params = new URLSearchParams(window.location.search);
    for (queryP of queryParams) {
      var parameter_value = params.get(queryP.name);
      if (queryP.values.tagName == "INPUT") {
        queryP.values.value = parameter_value;
      } else if (queryP.values.tagName == "SELECT") {
        queryP.values.selectedIndex = parameter_value;
      }
    }
  }  

function init() {
    var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
  }
  
  init();

function calculate() {
    const crossSection = parseFloat(input1.value);
    const laserPower = parseFloat(input2.value);
    const wavelength = parseFloat(input3.value) * 1e-9; // Convert nm to meters
    const focusSize = parseFloat(input4.value) * 1e-6; // Convert μm to meters
    const exposureTime = parseFloat(input5.value);

    if (isNaN(crossSection) || isNaN(laserPower) || isNaN(wavelength) || isNaN(focusSize) || isNaN(exposureTime) ||
        crossSection <= 0 || laserPower <= 0 || wavelength <= 0 || focusSize <= 0 || exposureTime <= 0) {
        alert("Please enter valid positive values for all input fields.");
        return;
    }

    // Calculate photon flux
    const photonFlux = (laserPower) / (Math.PI * (focusSize * focusSize / 4) * wavelength);

    // Calculate excitations per molecule
   // const excitations = 0.5 * crossSection * photonFlux * Math.pow(exposureTime, 2);

    const excitations1 = 0.5 * crossSection *  Math.pow(photonFlux, 2) * exposureTime;

    var result, result2;

    result = photonFlux
    result2 = excitations1;

    return [result, result2]
}

function showResult() {
    if (event && event.type == "click") {
      reloadPage(queryParams);
      return;
    }
    var [result, result2] = calculate();
  
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
  
    output.innerHTML = "";
  
    div1.innerHTML = "<b>  Photon Flux " + result.toFixed(2) + "  </b>";
    div2.innerHTML = "<b>  Excitations per Molecule: " + result2.toFixed(2) + "  </b>";
  
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
  }
  
  calcBtn.addEventListener("click", showResult);
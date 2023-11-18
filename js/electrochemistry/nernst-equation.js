
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");


let inputdrop1 = document.getElementById("inputdrop1");
let inputdrop2 = document.getElementById("inputdrop2");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.addEventListener("click", calculate);
calcBtn.style.background ='black'


// Set initial values for the dropdWowns
input1.placeholder = "V";
input2.placeholder = "C";
input3.placeholder = "mol";


function calculate() {
    var standardPotential = parseFloat(input1.value);
    var temperatureCelsius = parseFloat(input2.value);
    var electronsTransferred = parseFloat(input3.value);
    var activityReduced = parseFloat(input4.value);
    var activityOxidized = parseFloat(input5.value);

    // Convert temperature from Celsius to Kelvin
    var temperatureKelvin = temperatureCelsius + 273.15;

    // Constants
    var gasConstant = 8.314; // J/(K·mol)
    var faradayConstant = 96485.3; // C/mol

    // Calculate reduction potential using the Nernst equation
    var reductionPotential = standardPotential - (gasConstant * temperatureKelvin / (electronsTransferred * faradayConstant)) * Math.log(activityReduced / activityOxidized);

    result.textContent = "Reduction Potential (E): " + reductionPotential.toFixed(2) + " volts";
}


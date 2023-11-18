const altitudeInput = document.getElementById('input1');

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

altitudeInput.placeholder = 'enter value in feet'

calcBtn.addEventListener("click", calculate);

function calculate() {
    const altitudeInFeet = parseFloat(altitudeInput.value);

    

    // Check if the input is valid
    if (isNaN(altitudeInFeet) || altitudeInFeet < 0) {
        alert('Please enter a valid altitude in feet.');
        return;
    }

    // Calculate pressure (in inches of mercury) using the provided formula
    const pressure = 29.921 * Math.pow((1 - 0.0000068753 * altitudeInFeet), 5.2559);

    // Calculate boiling point (in degrees Fahrenheit) using the provided formula
    const boilingPoint = 49.161 * Math.log(pressure) + 44.932;

    result.textContent = `Boiling Point at ${altitudeInFeet} feet: ${boilingPoint.toFixed(2)}°F and the pressure ${pressure.toFixed(2)} inHg`;
}
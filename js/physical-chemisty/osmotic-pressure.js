
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

input3.placeholder = 'Mol/L';
input4.placeholder = 'Kelvin';

calcBtn.addEventListener("click", calculate);
calcBtn.style.background = 'black';


function calculate() {
    const n = parseFloat(input1.value);
    const osmoticCoefficient = parseFloat(input2.value);
    const concentration = parseFloat(input3.value);
    const temperature = parseFloat(input4.value);

    if (isNaN(n) || isNaN(osmoticCoefficient) || isNaN(concentration) || isNaN(temperature) || n <= 0 || osmoticCoefficient <= 0 || concentration <= 0 || temperature <= 0) {
        alert("Please enter valid values for all input fields.");
        return;
    }

    const gasConstant = 8.31446261815324; // Universal gas constant in J/(K•mol)
    const osmoticPressure = n * osmoticCoefficient * concentration * gasConstant * temperature;

    result.textContent = `${osmoticPressure.toFixed(4)} Pa`;
}



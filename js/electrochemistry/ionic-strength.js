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


let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.addEventListener("click", calculate);
calcBtn.style.background = 'black'

// Array to store ion inputs
let ionInputs = [];

// Function to add ion inputs to the array
function addIonInput(ionicInput, chargeInput) {
    ionInputs.push({
        ionicInput: ionicInput,
        chargeInput: chargeInput
    });
}

// Add ion inputs to the array
addIonInput(ionicof1, chargenumof1);
addIonInput(ionicof2, chargenumof2);
addIonInput(ionicof3, chargenumof3);
addIonInput(ionicof4, chargenumof4);
addIonInput(ionicof5, chargenumof5);


calcBtn.addEventListener("click", calculate);
calcBtn.style.background = 'black';

function calculate() {
    let totalIonicStrength = 0;

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
    result.innerText = "Total Ionic Strength: " + totalIonicStrength;
}





let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");


input3.value = 2

// Calculate degrees of freedom when the button is clicked
calcBtn.addEventListener('click', () => {
    // Get input values
    const components = parseFloat(input1.value);
    const phases = parseFloat(input2.value);
    const factor = parseFloat(input3.value);

    // Check if inputs are valid
    if (isNaN(components) || isNaN(phases) || isNaN(factor)) {
        alert('Please enter valid numeric values for all inputs.');
        return;
    }

    // Calculate degrees of freedom (F) using Gibbs' phase rule formula
    const degreesOfFreedom = components - phases + factor;

    // Display the result
    result.innerHTML = `<p>Number of Degrees of Freedom (F): ${degreesOfFreedom}</p>`;
});


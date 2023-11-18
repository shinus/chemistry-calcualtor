
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");


let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.addEventListener("click", calculateAtomicMass);
calcBtn.style.background = 'black';

function calculateAtomicMass() {
    const protons = input1.value;
    const neutrons = input2.value;
    const atomicMass = parseInt(protons) + parseInt(neutrons);
    const atomicMassKg = atomicMass * 1.66e-27;
    const massNumber = atomicMass;

    const resultText = `
        Atomic Mass (u): ${atomicMass}
        Atomic Mass (kg): ${atomicMassKg.toExponential(3)}
        Mass Number (A): ${massNumber}
    `;

    result.textContent = resultText;
}

console.log('test 2')

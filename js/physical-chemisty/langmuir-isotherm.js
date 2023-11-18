
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.addEventListener("click", calculateLangmuir);
calcBtn.style.background ='black'

function calculateLangmuir() {
    const eqConstant = parseFloat(input1.value);
    const partialPressure = parseFloat(input2.value);

    if (isNaN(eqConstant) || isNaN(partialPressure) || eqConstant <= 0 || partialPressure < 0) {
        alert("Please enter valid values for Equilibrium constant and Partial pressure.");
        return;
    }

    const surfaceFraction = eqConstant * partialPressure / (1 + eqConstant * partialPressure);
    const surfacePercent = surfaceFraction * 100;

    result.textContent = `Surface fraction ${surfaceFraction.toFixed(4)},surfacePercent ${surfacePercent.toFixed(4)} %`
}
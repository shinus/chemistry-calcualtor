
const pKaInput = document.getElementById("input1");
const pKbInput = document.getElementById("input2");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.style.background = "black";
calcBtn.addEventListener("click", calculateIsoelectricPoint);

function calculateIsoelectricPoint() {
    const pKa = parseFloat(pKaInput.value);
    const pKb = parseFloat(pKbInput.value);

    if (!isNaN(pKa) && !isNaN(pKb)) {
        const pI = (pKa + pKb) / 2;
        result.textContent = pI.toFixed(2);
    } else {
        result.textContent = "Please enter valid pKa and pKb values.";
    }
}

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.style.background = "black";
calcBtn.addEventListener("click", calculate);

function calculate(){
    const a = parseFloat(input1.value);
    const b = parseFloat(input2.value);
    const y = parseFloat(input3.value);

    if (isNaN(a) || isNaN(b) || isNaN(y)) {
        result.textContent = "Please enter valid numeric values.";
    } else {
        const x = (y - b) / a;
        result.textContent = `Concentration (x): ${x.toFixed(2)}`;
    }
}
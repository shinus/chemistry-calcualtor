
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");


let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.style.background = "#f8320df7";


input1.placeholder = 'Enter mass in kg'
input2.placeholder = 'Enter volume in m3'
calcBtn.addEventListener('click',calculate)

function calculate(){
    let weightI = Number(input1.value)
    let volumeI = Number(input2.value)
    let destiny = weightI / volumeI
    result.textContent = `${destiny} kg per cubic meter`
}


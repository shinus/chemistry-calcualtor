console.log('js loaded alligation')

let input1 = document.getElementById("input1");
let inputdrop1 = document.getElementById('inputdrop1')
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");
let inputdrop2 = document.getElementById("inputdrop2");
let inputdrop3 = document.getElementById("inputdrop3");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;


calcBtn.addEventListener("click", calculateAlligation);
calcBtn.style.background ='black'


function calculateAlligation() {
    let highConc = parseFloat(input1.value);
    let lowConc = parseFloat(input2.value);
    let reqConc = parseFloat(input3.value);

    let H = reqConc - lowConc;
    let L = highConc - reqConc;

    result.textContent = "The alligation ratio to mix the two concentrations is \n" + H + " : " + L;
}

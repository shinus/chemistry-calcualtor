
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");


let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.style.background = "#f8320df7";

calcBtn.addEventListener('click', calculate);

function calculate() {
    const carbon = parseFloat(input1.value);
    const hydrogen = parseFloat(input2.value);
    const nitrogen = parseFloat(input3.value);
    const halogen = parseFloat(input4.value);

    if (isNaN(carbon) || isNaN(hydrogen) || isNaN(nitrogen) || isNaN(halogen)) {
       result.textContent = "Please enter valid numeric values for all inputs.";
        return;
    }

    const degreeOfUnsaturation = carbon + 1 + nitrogen / 2 - hydrogen / 2 - halogen / 2;
    result.textContent = `Degree of Unsaturation (DU): ${degreeOfUnsaturation}`;
}
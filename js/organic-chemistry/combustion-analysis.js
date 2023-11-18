
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");


let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.style.background = "#f8320df7";

input1.placeholder = 'g/mol'
input2.placeholder = 'g'
input3.placeholder = 'g'

calcBtn.addEventListener('click',calculate)


function calculate() {
    const sampleMolarMass = parseFloat(input1.value);
    const co2Mass = parseFloat(input2.value);
    const h2oMass = parseFloat(input3.value);

    const co2MolarMass = 44.010;
    const h2oMolarMass = 18.0153;

    const carbonMass = (co2Mass * (12.011 / co2MolarMass));
    const hydrogenMass = ((h2oMass * 2) * (1.00797 / h2oMolarMass));
    const oxygenMass = sampleMolarMass - carbonMass - hydrogenMass;

    const carbonMoles = carbonMass / 12.011;
    const hydrogenMoles = hydrogenMass / 1.00797;
    const oxygenMoles = oxygenMass / 15.9994;

    const smallestMoles = Math.min(carbonMoles, hydrogenMoles, oxygenMoles);

    const empiricalCarbon = Math.round(carbonMoles / smallestMoles);
    const empiricalHydrogen = Math.round(hydrogenMoles / smallestMoles);
    const empiricalOxygen = Math.round(oxygenMoles / smallestMoles);

    const empiricalFormula = `C${empiricalCarbon}H${empiricalHydrogen}O${empiricalOxygen}`;
    const empiricalMass = (empiricalCarbon * 12.011) + (empiricalHydrogen * 1.00797) + (empiricalOxygen * 15.9994);

    result.textContent = `${empiricalFormula} , emperial mass is ${empiricalMass.toFixed(3)}`;
   
}

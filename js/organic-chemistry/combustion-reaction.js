
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let input3 = document.getElementById("input3");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.style.background = "#f8320df7";


calcBtn.addEventListener('click',calculate)


function calculate() {
    const carbonInput = document.getElementById("input1");
const hydrogenInput = document.getElementById("input2");
const oxygenInput = document.getElementById("input3");

const carbonCoeff = Math.round(carbonInput.value);
const hydrogenCoeff = Math.round(hydrogenInput.value / 2); 
const oxygenCoeff = Math.round(carbonInput.value + ((hydrogenInput.value / 4) - (oxygenInput.value / 2)));

const substance = "C<sub>" + carbonInput.value + "</sub>" +  
             "H<sub>" + hydrogenInput.value + "</sub>" +
             "O<sub>" + oxygenInput.value + "</sub>";

const reactants = carbonCoeff + " CO<sub>2</sub> " +  
             hydrogenCoeff + " H<sub>2</sub>O " + 
             oxygenCoeff + " O<sub>2</sub>";

const products = substance;

const equation = reactants + " &#8594; " + products; 


result.innerHTML = `
<p>Substance: ${substance}</p>
<p>Equation: ${equation}</p>
<p>Reactants: ${reactants}</p>
<p>Products: ${products}</p>
`;
}
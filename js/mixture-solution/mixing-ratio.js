console.log("ratio calc update");

let substance1 = document.getElementById("input1");
let substance2 = document.getElementById("input2");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");
let form = document.getElementById('calculator-form');

let substanceCount = 2; // Starting with 2 since two are already present

calcBtn.addEventListener("click", calculateMixingRatio);

// Add event listener to the last input box
addInputListenerToLast();

function addNewSubstanceInput() {
    substanceCount++;
    let addthis = `
        <div class="row" id="calculator-row-${substanceCount}">
            <div class="col-md-12">
                <div class="d-flex">
                    <label for="substance${substanceCount}_id">Substance ${substanceCount}</label>
                </div>
            </div>
            <div class="col-md-12">
                <div class="d-flex calculator-inputs">
                    <input class="form-control" type="number" name="" id="input${substanceCount}">
                </div>
            </div>
        </div>
    `;

    form.insertAdjacentHTML('beforeend', addthis);

    // Add event listener to the new input box
    addInputListenerToLast();
}

function addInputListenerToLast() {
    const allInputs = form.querySelectorAll('.form-control');
    const lastInput = allInputs[allInputs.length - 1];

    lastInput.addEventListener('input', function() {
        if (this.value && !this.getAttribute('data-listener-added')) {
            this.setAttribute('data-listener-added', 'true');
            addNewSubstanceInput();
        }
    });
}

function calculateMixingRatio() {
    const allInputs = form.querySelectorAll('.form-control');
    let total = 0;
    let percentages = [];

    allInputs.forEach(input => {
        let value = parseFloat(input.value) || 0;
        total += value;
    });

    allInputs.forEach(input => {
        let value = parseFloat(input.value) || 0;
        percentages.push((value / total) * 100);
    });

    let resultString = '';
    percentages.forEach((percent, index) => {
        resultString += `Substance ${index + 1}: ${percent.toFixed(2)}% | `;
    });

    result.innerText = resultString.slice(0, -3); // Remove trailing " | "
}

console.log(2487);

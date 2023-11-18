let per_or_dec = [
    { name: 'percent', value: 'percent' },
    { name: 'decimal', value: 'decimal' }
];

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");
let calculatorForm = document.getElementById("calculator-form");

calcBtn.addEventListener("click", calculateAverageAtomicMass);
calcBtn.style.background = 'black';

let numberOfIsotopes = 0;

// Initialize the first two isotopes' inputs
addNewIsotope();
addNewIsotope();


function addNewIsotope() {
    if (numberOfIsotopes < 10) {
        numberOfIsotopes++;
        let newRow1 = createNewRow(numberOfIsotopes, "Percentage");
        let newRow2 = createNewRow(numberOfIsotopes, "Mass");
        calculatorForm.appendChild(newRow1);
        calculatorForm.appendChild(newRow2);
        if (numberOfIsotopes < 10) {
            let lastMassInput = document.getElementById("input" + (numberOfIsotopes * 2));
            lastMassInput.addEventListener("change", function () {
                if (this.value !== "" && !isNaN(this.value)) {
                    this.removeEventListener("change", arguments.callee);
                    addNewIsotope();
                }
            });
        }
    }
}


function createNewRow(isotopeNumber, label) {
    let newRow = document.createElement("div");
    newRow.className = "row";
    newRow.id = "calculator-row-" + isotopeNumber;
    newRow.innerHTML = '<div class="col-md-12"><div class="d-flex"><label for="option' + isotopeNumber + '__id">' + label + ' of ' + isotopeNumber + 'st isotope</label></div></div><div class="col-md-12"><div class="d-flex calculator-inputs"><input class="form-control" type="number" name="" id="input' + ((isotopeNumber - 1) * 2 + (label === "Percentage" ? 1 : 2)) + '">' + (label === "Percentage" ? '<select class="form-control" name="" id="inputdrop' + isotopeNumber + '"><option value="percent">percent</option><option value="decimal">decimal</option></select>' : '') + '</div></div>';
    return newRow;
}

function calculateAverageAtomicMass() {
    let averageAtomicMass = 0;
    for (let i = 1; i <= numberOfIsotopes; i++) {
        let percentageInput = document.getElementById("input" + ((i - 1) * 2 + 1));
        let massInput = document.getElementById("input" + (i * 2));
        let dropDown = document.getElementById("inputdrop" + i);

        let percentage = parseFloat(percentageInput.value);
        let mass = parseFloat(massInput.value);

        if (isNaN(percentage) || isNaN(mass)) {
            continue;
        }

        if (dropDown.value === "percent") {
            percentage /= 100;
        }

        averageAtomicMass += (percentage * mass);
    }
    result.textContent = "Average Atomic Mass: " + averageAtomicMass + " amu";
}

console.log(90)

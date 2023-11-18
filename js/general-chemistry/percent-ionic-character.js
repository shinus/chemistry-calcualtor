calcfrom = [
    {name:'dipole moment',value:'dipole-moment'},
    {name:'electronegativity',value:'electronegativity'},
]

dipoleunits = [
    {name:'coulomb meter(C.m)',value:'coulomb-meter'},
    {name:'debye(D)',value:'debye'}
]
let inputdrop1 = document.getElementById("inputdrop1");

let input2 = document.getElementById("input2");
let inputdrop2 = document.getElementById("inputdrop2");
let option2_id = document.querySelector("label[for='option2__id']");


let input3 = document.getElementById("input3");
let inputdrop3 = document.getElementById("inputdrop3");
let option3_id = document.querySelector("label[for='option3__id']");


let input4 = document.getElementById("input4");
let option4_id = document.querySelector("label[for='option4__id']");


let input5 = document.getElementById("input5");
let option5_id = document.querySelector("label[for='option5__id']");


let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");


calcfrom.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.innerHTML = option.name;
    inputdrop1.add(opt);
    inputdrop1.value = "dipole-moment";
});


dipoleunits.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.innerHTML = option.name;
    inputdrop2.add(opt);
    inputdrop3.add(opt.cloneNode(true));
    inputdrop2.value = "coulomb-meter";
});


calcBtn.style.background = 'black';

inputdrop1.addEventListener('change', handleCalcFromChange);
calcBtn.addEventListener('click', calculateresult);

function handleCalcFromChange() {
    const selectedValue = inputdrop1.value;
    if (selectedValue === 'dipole-moment') {
        // Show dipole moment inputs
        option2_id.style.display = 'block';
        input2.style.display = 'block';
        inputdrop2.style.display = 'block';
        option3_id.style.display = 'block';
        input3.style.display = 'block';
        inputdrop3.style.display = 'block';

        // Hide electronegativity inputs
        option4_id.style.display = 'none';
        input4.style.display = 'none';
        option5_id.style.display = 'none';
        input5.style.display = 'none';
    } else {
        // Hide dipole moment inputs
        option2_id.style.display = 'none';
        input2.style.display = 'none';
        inputdrop2.style.display = 'none';
        option3_id.style.display = 'none';
        input3.style.display = 'none';
        inputdrop3.style.display = 'none';

        // Show electronegativity inputs
        option4_id.style.display = 'block';
        input4.style.display = 'block';
        option5_id.style.display = 'block';
        input5.style.display = 'block';
    }
}


function calculateresult() {
    const selectedValue = inputdrop1.value;
    let calculatedResult;

    if (selectedValue === 'dipole-moment') {
        const measuredMoment = parseFloat(input2.value);
        const calculatedMoment = parseFloat(input3.value);

        const measuredUnit = inputdrop2.value;
        const calculatedUnit = inputdrop3.value;

        // convert to debye
        const measuredMomentDebye = measuredUnit === 'debye' ? measuredMoment : measuredMoment * 3.336e-30;
        const calculatedMomentDebye = calculatedUnit === 'debye' ? calculatedMoment : calculatedMoment * 3.336e-30;

        calculatedResult = 100 * (measuredMomentDebye / calculatedMomentDebye);

    } else {
        const electronegativity1 = parseFloat(input4.value);
        const electronegativity2 = parseFloat(input5.value);

        const deltaElectronegativity = Math.abs(electronegativity1 - electronegativity2);
        calculatedResult = 100 * (1 - Math.exp(-Math.pow((deltaElectronegativity / 2), 2)));
    }

    result.innerHTML = 'Percent Ionic Character: ' + calculatedResult.toFixed(2) + '%';
}


// call handleCalcFromChange on page load
handleCalcFromChange();

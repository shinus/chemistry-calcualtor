const elements = [
    {name: 'Hydrogen (H)', value: 'H', molarMass: 1.0079},
    {name: 'Helium (He)', value: 'He', molarMass: 4.0026},
    {name: 'Lithium (Li)', value: 'Li', molarMass: 6.94},
    {name: 'Beryllium (Be)', value: 'Be', molarMass: 9.0122},
    {name: 'Boron (B)', value: 'B', molarMass: 10.81},
    {name: 'Carbon (C)', value: 'C', molarMass: 12.01},
    {name: 'Nitrogen (N)', value: 'N', molarMass: 14.01},
    {name: 'Oxygen (O)', value: 'O', molarMass: 16.00},
    {name: 'Fluorine (F)', value: 'F', molarMass: 19.00},
    {name: 'Neon (Ne)', value: 'Ne', molarMass: 20.18},
    {name: 'Sodium (Na)', value: 'Na', molarMass: 22.99},
    {name: 'Magnesium (Mg)', value: 'Mg', molarMass: 24.31},
    {name: 'Aluminum (Al)', value: 'Al', molarMass: 26.98},
    {name: 'Silicon (Si)', value: 'Si', molarMass: 28.09},
    {name: 'Phosphorus (P)', value: 'P', molarMass: 30.97},
    {name: 'Sulfur (S)', value: 'S', molarMass: 32.07},
    {name: 'Chlorine (Cl)', value: 'Cl', molarMass: 35.45},
    {name: 'Argon (Ar)', value: 'Ar', molarMass: 39.95},
    {name: 'Potassium (K)', value: 'K', molarMass: 39.10},
    {name: 'Calcium (Ca)', value: 'Ca', molarMass: 40.08},
    {name: 'Scandium (Sc)', value: 'Sc', molarMass: 44.96},
    {name: 'Titanium (Ti)', value: 'Ti', molarMass: 47.87},
    {name: 'Vanadium (V)', value: 'V', molarMass: 50.94},
    {name: 'Chromium (Cr)', value: 'Cr', molarMass: 52.00},
    {name: 'Manganese (Mn)', value: 'Mn', molarMass: 54.94},
    {name: 'Iron (Fe)', value: 'Fe', molarMass: 55.85},
    {name: 'Cobalt (Co)', value: 'Co', molarMass: 58.93},
    {name: 'Nickel (Ni)', value: 'Ni', molarMass: 58.69},
    {name: 'Copper (Cu)', value: 'Cu', molarMass: 63.55},
    {name: 'Zinc (Zn)', value: 'Zn', molarMass: 65.38},
    {name: 'Gallium (Ga)', value: 'Ga', molarMass: 69.723},
    {name: 'Germanium (Ge)', value: 'Ge', molarMass: 72.63},
    {name: 'Arsenic (As)', value: 'As', molarMass: 74.92},
    {name: 'Selenium (Se)', value: 'Se', molarMass: 78.97},
    {name: 'Bromine (Br)', value: 'Br', molarMass: 79.904},
    {name: 'Krypton (Kr)', value: 'Kr', molarMass: 83.798},
    {name: 'Rubidium (Rb)', value: 'Rb', molarMass: 85.468},
    {name: 'Strontium (Sr)', value: 'Sr', molarMass: 87.62},
    {name: 'Yttrium (Y)', value: 'Y', molarMass: 88.906},
    {name: 'Zirconium (Zr)', value: 'Zr', molarMass: 91.224},
    {name: 'Niobium (Nb)', value: 'Nb', molarMass: 92.906},
    {name: 'Molybdenum (Mo)', value: 'Mo', molarMass: 95.95},
    {name: 'Technetium (Tc)', value: 'Tc', molarMass: 98},
    {name: 'Ruthenium (Ru)', value: 'Ru', molarMass: 101.07},
    {name: 'Rhodium (Rh)', value: 'Rh', molarMass: 102.91},
    {name: 'Palladium (Pd)', value: 'Pd', molarMass: 106.42},
    {name: 'Silver (Ag)', value: 'Ag', molarMass: 107.87},
    {name: 'Cadmium (Cd)', value: 'Cd', molarMass: 112.41},
    {name: 'Indium (In)', value: 'In', molarMass: 114.82},
    {name: 'Tin (Sn)', value: 'Sn', molarMass: 118.71},
    {name: 'Antimony (Sb)', value: 'Sb', molarMass: 121.76},
    {name: 'Tellurium (Te)', value: 'Te', molarMass: 127.60},
    {name: 'Iodine (I)', value: 'I', molarMass: 126.90},
    {name: 'Xenon (Xe)', value: 'Xe', molarMass: 131.29},
    {name: 'Cesium (Cs)', value: 'Cs', molarMass: 132.91},
    {name: 'Barium (Ba)', value: 'Ba', molarMass: 137.33},
    {name: 'Lanthanum (La)', value: 'La', molarMass: 138.91},
    {name: 'Cerium (Ce)', value: 'Ce', molarMass: 140.12},
    {name: 'Praseodymium (Pr)', value: 'Pr', molarMass: 140.91},
    {name: 'Neodymium (Nd)', value: 'Nd', molarMass: 144.24},
    {name: 'Promethium (Pm)', value: 'Pm', molarMass: 145},
    {name: 'Samarium (Sm)', value: 'Sm', molarMass: 150.36},
    {name: 'Europium (Eu)', value: 'Eu', molarMass: 151.96},
    {name: 'Gadolinium (Gd)', value: 'Gd', molarMass: 157.25},
    {name: 'Terbium (Tb)', value: 'Tb', molarMass: 158.93},
    {name: 'Dysprosium (Dy)', value: 'Dy', molarMass: 162.50},
    {name: 'Holmium (Ho)', value: 'Ho', molarMass: 164.93},
    {name: 'Erbium (Er)', value: 'Er', molarMass: 167.26},
    {name: 'Thulium (Tm)', value: 'Tm', molarMass: 168.93},
    {name: 'Ytterbium (Yb)', value: 'Yb', molarMass: 173.05},
    {name: 'Lutetium (Lu)', value: 'Lu', molarMass: 174.97},
    {name: 'Hafnium (Hf)', value: 'Hf', molarMass: 178.49},
    {name: 'Tantalum (Ta)', value: 'Ta', molarMass: 180.95},
    {name: 'Tungsten (W)', value: 'W', molarMass: 183.84},
    {name: 'Rhenium (Re)', value: 'Re', molarMass: 186.21},
    {name: 'Osmium (Os)', value: 'Os', molarMass: 190.23},
    {name: 'Iridium (Ir)', value: 'Ir', molarMass: 192.22},
    {name: 'Platinum (Pt)', value: 'Pt', molarMass: 195.08},
    {name: 'Gold (Au)', value: 'Au', molarMass: 196.97},
    {name: 'Mercury (Hg)', value: 'Hg', molarMass: 200.59},
    {name: 'Thallium (Tl)', value: 'Tl', molarMass: 204.38},
    {name: 'Lead (Pb)', value: 'Pb', molarMass: 207.2},
    {name: 'Bismuth (Bi)', value: 'Bi', molarMass: 208.98},
    {name: 'Thorium (Th)', value: 'Th', molarMass: 232.04},
    {name: 'Protactinium (Pa)', value: 'Pa', molarMass: 231.04},
    {name: 'Uranium (U)', value: 'U', molarMass: 238.05},
    {name: 'Neptunium (Np)', value: 'Np', molarMass: 237},
    {name: 'Plutonium (Pu)', value: 'Pu', molarMass: 244},
    {name: 'Americium (Am)', value: 'Am', molarMass: 243},
    {name: 'Curium (Cm)', value: 'Cm', molarMass: 247},
    {name: 'Berkelium (Bk)', value: 'Bk', molarMass: 247},
    {name: 'Californium (Cf)', value: 'Cf', molarMass: 251},
    {name: 'Einsteinium (Es)', value: 'Es', molarMass: 252},
    {name: 'Fermium (Fm)', value: 'Fm', molarMass: 257},
    {name: 'Mendelevium (Md)', value: 'Md', molarMass: 258},
    {name: 'Nobelium (No)', value: 'No', molarMass: 259},
    {name: 'Lawrencium (Lr)', value: 'Lr', molarMass: 262},
    {name: 'Rutherfordium (Rf)', value: 'Rf', molarMass: 267},
    {name: 'Dubnium (Db)', value: 'Db', molarMass: 270},
    {name: 'Seaborgium (Sg)', value: 'Sg', molarMass: 271},
    {name: 'Bohrium (Bh)', value: 'Bh', molarMass: 270},
    {name: 'Hassium (Hs)', value: 'Hs', molarMass: 277},
    {name: 'Meitnerium (Mt)', value: 'Mt', molarMass: 276},
    {name: 'Darmstadtium (Ds)', value: 'Ds', molarMass: 281},
    {name: 'Roentgenium (Rg)', value: 'Rg', molarMass: 282},
    {name: 'Copernicium (Cn)', value: 'Cn', molarMass: 285},
    {name: 'Nihonium (Nh)', value: 'Nh', molarMass: 286},
    {name: 'Flerovium (Fl)', value: 'Fl', molarMass: 289},
    {name: 'Moscovium (Mc)', value: 'Mc', molarMass: 290},
    {name: 'Livermorium (Lv)', value: 'Lv', molarMass: 293},
    {name: 'Tennessine (Ts)', value: 'Ts', molarMass: 294},
    {name: 'Oganesson (Og)', value: 'Og', molarMass: 294}
];


let input1 = document.getElementById("input1");
let inputdrop1 = document.getElementById("inputdrop1");

let input2 = document.getElementById("input2");
let inputdrop2 = document.getElementById("inputdrop2");


let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.addEventListener("click", calculate);
calcBtn.style.background = 'black';

let calculatorForm = document.getElementById('calculator-form');

function addElementInput(index) {
    let existingRow = document.getElementById('calculator-row-' + index);
    if (existingRow) return;

    let rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    rowDiv.id = 'calculator-row-' + index;

    let html = `
        <div class="col-md-12">
            <div class="d-flex">
                <label for="label${index}">${index}st Element and no. of atoms</label>
            </div>
        </div>
        <div class="col-md-12">
            <div class="d-flex calculator-inputs">
                <input class="form-control" type="number" name="" id="input${index}" oninput="addElementInput(${index + 1})">
                <select class="form-control" name="" id="inputdrop${index}"></select>
            </div>
        </div>
    `;

    rowDiv.innerHTML = html;
    calculatorForm.appendChild(rowDiv);

    populateDropdown(document.getElementById('inputdrop' + index));
}

function populateDropdown(dropdown) {
    elements.forEach((element) => {
        let opt = document.createElement("option");
        opt.value = element.value;
        opt.text = element.name;
        dropdown.add(opt);
    });
}

// Initialize the first two inputs and dropdowns
addElementInput(1);
addElementInput(2);

console.log(23)

function calculate() {
    let totalMolarMass = 0;
    let chemicalFormula = '';
    let totalElectrons = 0;
    let elementSymbols = '';
    let resultHTML = '';

    for (let i = 1; i <= elements.length; i++) {
        let input = document.getElementById('input' + i);
        let inputdrop = document.getElementById('inputdrop' + i);

        if (!input || !inputdrop) break;

        let numberOfAtoms = input.value;
        let selectedElementSymbol = inputdrop.value;

        if (!numberOfAtoms || !selectedElementSymbol) continue;

        let selectedElement = elements.find(element => element.value === selectedElementSymbol);

        if (!selectedElement) continue;

        let molarMass = selectedElement.molarMass;
        let atomicNumber = elements.indexOf(selectedElement) + 1;

        totalMolarMass += molarMass * numberOfAtoms;
        chemicalFormula += selectedElementSymbol + (numberOfAtoms > 1 ? numberOfAtoms : '');
        totalElectrons += atomicNumber * numberOfAtoms;
        elementSymbols += selectedElementSymbol + ' ';

        resultHTML += `
            <div>
                <strong>Element:</strong> ${selectedElement.name}
            </div>
            <div>
                <strong>Symbol:</strong> ${selectedElementSymbol}
            </div>
            <div>
                <strong>Molar Mass:</strong> ${molarMass} g/mol
            </div>
            <div>
                <strong>Number of Atoms:</strong> ${numberOfAtoms}
            </div>
            <div>
                <strong>Total Molar Mass:</strong> ${(molarMass * numberOfAtoms).toFixed(2)} g/mol
            </div>
            <div>
                <strong>Percent of Total Molar Mass:</strong> ${((molarMass * numberOfAtoms / totalMolarMass) * 100).toFixed(2)}%
            </div>
            <br>
        `;
    }

    resultHTML += `
        <div>
            <strong>Chemical Formula:</strong> ${chemicalFormula}
        </div>
        <div>
            <strong>Total Electrons:</strong> ${totalElectrons}
        </div>
        <div>
            <strong>Element Symbols:</strong> ${elementSymbols}
        </div>
        <div>
            <strong>Total Molar Mass:</strong> ${totalMolarMass.toFixed(2)} g/mol
        </div>
    `;

    result.innerHTML = resultHTML;
}

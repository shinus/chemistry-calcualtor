const elements = [
    {name: 'Hydrogen (H)', value: 2.20},
    {name: 'custom', value: 'custom'},
    {name: 'Helium (He)', value: 0},
    {name: 'Lithium (Li)', value: 0.98},
    {name: 'Beryllium (Be)', value: 1.57},
    {name: 'Boron (B)', value: 2.04},
    {name: 'Carbon (C)', value: 2.55},
    {name: 'Nitrogen (N)', value: 3.04},
    {name: 'Oxygen (O)', value: 3.44},
    {name: 'Fluorine (F)', value: 3.98},
    {name: 'Neon (Ne)', value: 0},
    {name: 'Sodium (Na)', value: 0.93},
    {name: 'Magnesium (Mg)', value: 1.31},
    {name: 'Aluminum (Al)', value: 1.61},
    {name: 'Silicon (Si)', value: 1.90},
    {name: 'Phosphorus (P)', value: 2.19},
    {name: 'Sulfur (S)', value: 2.58},
    {name: 'Chlorine (Cl)', value: 3.16},
    {name: 'Argon (Ar)', value: 0},
    {name: 'Potassium (K)', value: 0.82},
    {name: 'Calcium (Ca)', value: 1.00},
    {name: 'Scandium (Sc)', value: 1.36},
    {name: 'Titanium (Ti)', value: 1.54},
    {name: 'Vanadium (V)', value: 1.63},
    {name: 'Chromium (Cr)', value: 1.66},
    {name: 'Manganese (Mn)', value: 1.55},
    {name: 'Iron (Fe)', value: 1.83},
    {name: 'Cobalt (Co)', value: 1.88},
    {name: 'Nickel (Ni)', value: 1.91},
    {name: 'Copper (Cu)', value: 1.90},
    {name: 'Zinc (Zn)', value: 1.65},
    {name: 'Gallium (Ga)', value: 1.81},
    {name: 'Germanium (Ge)', value: 2.01},
    {name: 'Arsenic (As)', value: 2.18},
    {name: 'Selenium (Se)', value: 2.55},
    {name: 'Bromine (Br)', value: 2.96},
    {name: 'Krypton (Kr)', value: 3.00},
    {name: 'Rubidium (Rb)', value: 0.82},
    {name: 'Strontium (Sr)', value: 0.95},
    {name: 'Yttrium (Y)', value: 1.22},
    {name: 'Zirconium (Zr)', value: 1.33},
    {name: 'Niobium (Nb)', value: 1.6},
    {name: 'Molybdenum (Mo)', value: 2.16},
    {name: 'Technetium (Tc)', value: 1.9},
    {name: 'Ruthenium (Ru)', value: 2.2},
    {name: 'Rhodium (Rh)', value: 2.28},
    {name: 'Palladium (Pd)', value: 2.20},
    {name: 'Silver (Ag)', value: 1.93},
    {name: 'Cadmium (Cd)', value: 1.69},
    {name: 'Indium (In)', value: 1.78},
    {name: 'Tin (Sn)', value: 1.96},
    {name: 'Antimony (Sb)', value: 2.05},
    {name: 'Tellurium (Te)', value: 2.1},
    {name: 'Iodine (I)', value: 2.66},
    {name: 'Xenon (Xe)', value: 2.6},
    {name: 'Cesium (Cs)', value: 0.79},
    {name: 'Barium (Ba)', value: 0.89},
    {name: 'Lanthanum (La)', value: 1.10},
    {name: 'Cerium (Ce)', value: 1.12},
    {name: 'Praseodymium (Pr)', value: 1.13},
    {name: 'Neodymium (Nd)', value: 1.14},
    {name: 'Promethium (Pm)', value: 0},
    {name: 'Samarium (Sm)', value: 1.17},
    {name: 'Europium (Eu)', value: 0},
    {name: 'Gadolinium (Gd)', value: 1.20},
    {name: 'Terbium (Tb)', value: 0},
    {name: 'Dysprosium (Dy)', value: 1.22},
    {name: 'Holmium (Ho)', value: 1.23},
    {name: 'Erbium (Er)', value: 1.24},
    {name: 'Thulium (Tm)', value: 1.25},
    {name: 'Ytterbium (Yb)', value: 0},
    {name: 'Lutetium (Lu)', value: 1.27},
    {name: 'Hafnium (Hf)', value: 1.3},
    {name: 'Tantalum (Ta)', value: 1.5},
    {name: 'Tungsten (W)', value: 2.36},
    {name: 'Rhenium (Re)', value: 1.9},
    {name: 'Osmium (Os)', value: 2.2},
    {name: 'Iridium (Ir)', value: 2.20},
    {name: 'Platinum (Pt)', value: 2.28},
    {name: 'Gold (Au)', value: 2.54},
    {name: 'Mercury (Hg)', value: 2.00},
    {name: 'Thallium (Tl)', value: 1.62},
    {name: 'Lead (Pb)', value: 2.33},
    {name: 'Bismuth (Bi)', value: 2.02},
    {name: 'Polonium (Po)', value: 2.0},
    {name: 'Astatine (At)', value: 2.2},
    {name: 'Radon (Rn)', value: 0},
    {name: 'Francium (Fr)', value: 0.7},
    {name: 'Radium (Ra)', value: 0.9},
    {name: 'Actinium (Ac)', value: 1.1},
    {name: 'Thorium (Th)', value: 1.3},
    {name: 'Protactinium (Pa)', value: 1.5},
    {name: 'Uranium (U)', value: 1.38},
    {name: 'Neptunium (Np)', value: 1.36},
    {name: 'Plutonium (Pu)', value: 1.28},
    {name: 'Americium (Am)', value: 1.13},
    {name: 'Curium (Cm)', value: 1.28},
    {name: 'Berkelium (Bk)', value: 1.3},
    {name: 'Californium (Cf)', value: 1.3},
    {name: 'Einsteinium (Es)', value: 1.3},
    {name: 'Fermium (Fm)', value: 1.3},
    {name: 'Mendelevium (Md)', value: 1.3},
    {name: 'Nobelium (No)', value: 1.3},
    {name: 'Lawrencium (Lr)', value: 1.3},
    {name: 'Rutherfordium (Rf)', value: 0},
    {name: 'Dubnium (Db)', value: 0},
    {name: 'Seaborgium (Sg)', value: 0},
    {name: 'Bohrium (Bh)', value: 0},
    {name: 'Hassium (Hs)', value: 0},
    {name: 'Meitnerium (Mt)', value: 0},
    {name: 'Darmstadtium (Ds)', value: 0},
    {name: 'Roentgenium (Rg)', value: 0},
    {name: 'Copernicium (Cn)', value: 0},
    {name: 'Nihonium (Nh)', value: 0},
    {name: 'Flerovium (Fl)', value: 0},
    {name: 'Moscovium (Mc)', value: 0},
    {name: 'Livermorium (Lv)', value: 0},
    {name: 'Tennessine (Ts)', value: 0},
    {name: 'Oganesson (Og)', value: 0},

];


let inputdrop1 = document.getElementById("inputdrop1");
let inputdrop2 = document.getElementById("inputdrop2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.style.background = 'black'

elements.forEach((option, index) => {
    let opt1 = document.createElement("option");
    opt1.value = option.value;
    opt1.text = option.name;
    inputdrop1.add(opt1);
    if (index === 2) { 
        opt1.selected = true;
    }

    let opt2 = document.createElement("option");
    opt2.value = option.value;
    opt2.text = option.name;
    inputdrop2.add(opt2);
    if (index === 10) { 
        opt2.selected = true;
    }
});



inputdrop1.addEventListener('change',()=>{
    input3.value = inputdrop1.value;
});

inputdrop2.addEventListener('change',()=>{
    input4.value = inputdrop2.value;
});

input3.addEventListener('input',()=>{
    inputdrop1.value = 'custom';
});

input4.addEventListener('input',()=>{
    inputdrop2.value = 'custom';
});

calcBtn.addEventListener('click',()=>{
    let element1 = parseFloat(input3.value);
    let element2 = parseFloat(input4.value);

    if(isNaN(element1) || isNaN(element2) || element1 < 0 || element2 < 0) {
        result.innerText = "Please enter valid electronegativity values.";
        return;
    }

    let Electronegativity_difference = Math.abs(element1 - element2);
    let bondType = "";

    if (Electronegativity_difference < 0.4) {
        bondType = "a covalent bond";
    } else if (Electronegativity_difference < 2.00) {
        bondType = "a polar covalent bond";
    } else {
        bondType = "an ionic bond";
    }

    result.innerText = "Electronegativity difference (END) " + Electronegativity_difference.toFixed(2) + "\nIf the two elements were to form a bond, it\nwould be:\n" + bondType;
});

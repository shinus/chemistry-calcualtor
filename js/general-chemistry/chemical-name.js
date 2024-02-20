const cations = [
    {
      value: "Al3+",
      name: "Aluminum (Al<sup>3+</sup>)",
    },
    {
      value: "NH4+",
      name: "Ammonium (NH<sub>4</sub><sup>+</sup>)",
    },
    {
      value: "Ba2+",
      name: "Barium (Ba<sup>2+</sup>)",
    },
    {
      value: "Ca2+",
      name: "Calcium (Ca<sup>2+</sup>)",
    },
    {
      value: "Cr2+",
      name: "Chromium(II) (Cr<sup>2+</sup>)",
    },
    {
      value: "Cr3+",
      name: "Chromium(III) (Cr<sup>3+</sup>)",
    },
    {
      value: "Cu+",
      name: "Copper(I) (Cu<sup>+</sup>)",
    },
    {
      value: "Cu2+",
      name: "Copper(II) (Cu<sup>2+</sup>)",
    },
    {
      value: "Fe2+",
      name: "Iron(II) (Fe<sup>2+</sup>)",
    },
    {
      value: "Fe3+",
      name: "Iron(III) (Fe<sup>3+</sup>)",
    },
    {
      value: "H+",
      name: "Hydrogen (H<sup>+</sup>)",
    },
    {
      value: "H3O+",
      name: "Hydronium (H<sub>3</sub>O<sup>+</sup>)",
    },
    {
      value: "Pb2+",
      name: "Lead(II) (Pb<sup>2+</sup>)",
    },
    {
      value: "Li+",
      name: "Lithium (Li<sup>+</sup>)",
    },
    {
      value: "Mg2+",
      name: "Magnesium (Mg<sup>2+</sup>)",
    },
    {
      value: "Mn2+",
      name: "Manganese(II) (Mn<sup>2+</sup>)",
    },
    {
      value: "Mn3+",
      name: "Manganese(III) (Mn<sup>3+</sup>)",
    },
    {
      value: "Hg+",
      name: "Mercury(I) (Hg<sup>+</sup>)",
    },
    {
      value: "Hg2+",
      name: "Mercury(II) (Hg<sup>2+</sup>)",
    },
    {
      value: "NO2+",
      name: "Nitronium (NO<sub>2</sub><sup>+</sup>)",
    },
    {
      value: "K+",
      name: "Potassium (K<sup>+</sup>)",
    },
    {
      value: "Ag+",
      name: "Silver (Ag<sup>+</sup>)",
    },
    {
      value: "Na+",
      name: "Sodium (Na<sup>+</sup>)",
    },
    {
      value: "Sr2+",
      name: "Strontium (Sr<sup>2+</sup>)",
    },
    {
      value: "Sn2+",
      name: "Tin(II) (Sn<sup>2+</sup>)",
    },
    {
      value: "Sn4+",
      name: "Tin(IV) (Sn<sup>4+</sup>)",
    },
    {
      value: "Zn2+",
      name: "Zinc (Zn<sup>2+</sup>)",
    }
  ];
  

const anions = [
    {
      value: "H-",
      name: "Hydride (H<sup>-</sup>)",
    },
    {
      value: "F-",
      name: "Fluoride (F<sup>-</sup>)",
    },
    {
      value: "Cl-",
      name: "Chloride (Cl<sup>-</sup>)",
    },
    {
      value: "Br-",
      name: "Bromide (Br<sup>-</sup>)",
    },
    {
      value: "I-",
      name: "Iodide (I<sup>-</sup>)",
    },
    {
      value: "AsO4^3-",
      name: "Arsenate (AsO<sub>4</sub><sup>3-</sup>)",
    },
    {
      value: "AsO3^3-",
      name: "Arsenite (AsO<sub>3</sub><sup>3-</sup>)",
    },
    {
      value: "SO4^2-",
      name: "Sulfate (SO<sub>4</sub><sup>2-</sup>)",
    },
    {
      value: "HSO4-",
      name: "Hydrogen sulfate (HSO<sub>4</sub><sup>-</sup>)",
    },
    {
      value: "S2O3^2-",
      name: "Thiosulfate (S<sub>2</sub>O<sub>3</sub><sup>2-</sup>)",
    },
    {
      value: "SO3^2-",
      name: "Sulfite (SO<sub>3</sub><sup>2-</sup>)",
    },
    {
      value: "ClO4-",
      name: "Perchlorate (ClO<sub>4</sub><sup>-</sup>)",
    },
    {
      value: "ClO3-",
      name: "Chlorate (ClO<sub>3</sub><sup>-</sup>)",
    },
    {
      value: "ClO2-",
      name: "Chlorite (ClO<sub>2</sub><sup>-</sup>)",
    },
    {
      value: "ClO-",
      name: "Hypochlorite (ClO<sup>-</sup>)",
    },
    {
      value: "CO3^2-",
      name: "Carbonate (CO<sub>3</sub><sup>2-</sup>)",
    },
    {
      value: "HCO3-",
      name: "Hydrogen carbonate or Bicarbonate (HCO<sub>3</sub><sup>-</sup>)",
    },
    {
      value: "C2H3O2-",
      name: "Acetate (C<sub>2</sub>H<sub>3</sub>O<sub>2</sub><sup>-</sup>)",
    },
    {
      value: "CN-",
      name: "Cyanide (CN<sup>-</sup>)",
    },
    {
      value: "OCN-",
      name: "Cyanate (OCN<sup>-</sup>)",
    },
    {
      value: "SCN-",
      name: "Thiocyanate (SCN<sup>-</sup>)",
    },
    {
      value: "OH-",
      name: "Hydroxide (OH<sup>-</sup>)",
    }
  ];
  

let input1 = document.getElementById("inputdrop1");
let input2 = document.getElementById("inputdrop2");

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "cation", values: input1 },
  { name: "anion", values: input2 },
];

function setParamValues(queryParams) {
  const params = new URLSearchParams(window.location.search);
  for (queryP of queryParams) {
    var parameter_value = params.get(queryP.name);
    if (queryP.values.tagName == "INPUT") {
      queryP.values.value = parameter_value;
    } else if (queryP.values.tagName == "SELECT") {
      queryP.values.selectedIndex = parameter_value;
    }
  }
}

function init() {
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}

init()

cations.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.innerHTML = option.name;
    input1.add(opt);
    input1.value = "Na+";
});


anions.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.innerHTML = option.name;
    input2.add(opt);
    input2.value = "H-";
});


  function calculate() {
    console.log(input1.value, input1)
    console.log(input2.value)
    const cation = cations.find(cation => cation.value === input1.value);
const anion = anions.find(anion => anion.value === input2.value);
    const calculationResult = calculateIonicCompound(cation, anion);
    result = "Name: " + calculationResult.name + " <br> Formula: " + calculationResult.formula;
    return result
}


function calculateIonicCompound(cation, anion) {
    const cationCharge = parseInt(cation.value.replace(/\D/g, ''));
    const anionCharge = parseInt(anion.value.replace(/\D/g, ''));

    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    const divisor = gcd(Math.abs(cationCharge), Math.abs(anionCharge));

    const cationCount = Math.abs(anionCharge) / divisor;
    const anionCount = Math.abs(cationCharge) / divisor;

    const cationSymbol = cation.value.match(/[A-Za-z0-9]+/)[0];
    const anionSymbol = anion.value.match(/[A-Za-z0-9]+/)[0];
    const formula = `${cationSymbol}${cationCount > 1 ? cationCount : ''}${anionSymbol}${anionCount > 1 ? anionCount : ''}`;

    const cationName = cation.name.split(' ')[0];
    const anionName = anion.name.split(' ')[0];
    const name = `${cationName} ${anionName}`;

    return {
        formula,
        name
    };
}

function showResult() {
  if (event && event.type == "click") {
    reloadPage(queryParams);
    return;
  }
  var result = calculate();

  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");
  var div4 = document.createElement("div");

  output.innerHTML = "";

  div1.innerHTML = "<b>  " + result + "  </b>";

  output.append(div1);
  output.append(div2);
  output.append(div3);
  output.append(div4);
}

calcBtn.addEventListener("click", showResult);
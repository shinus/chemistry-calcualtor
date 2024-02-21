const cations = [
  {
    value: 0,
    name: "Aluminum (Al3+)",
  },
  {
    value: 1,
    name: "Ammonium (NH4+)",
  },
  {
    value: 2,
    name: "Barium (Ba2+)",
  },
  {
    value: 3,
    name: "Calcium (Ca2+)",
  },
  {
    value: 4,
    name: "Chromium(II) (Cr2+)",
  },
  {
    value: 5,
    name: "Chromium(III) (Cr3+)",
  },
  {
    value: 6,
    name: "Copper(I) (Cu+)",
  },
  {
    value: 7,
    name: "Copper(II) (Cu2+)",
  },
  {
    value: 8,
    name: "Iron(II) (Fe2+)",
  },
  {
    value: 9,
    name: "Iron(III) (Fe3+)",
  },
  {
    value: 10,
    name: "Hydrogen (H+)",
  },
  {
    value: 11,
    name: "Hydronium (H3O+)",
  },
  {
    value: 12,
    name: "Lead(II) (Pb2+)",
  },
  {
    value: 13,
    name: "Lithium (Li+)",
  },
  {
    value: 14,
    name: "Magnesium (Mg2+)",
  },
  {
    value: 15,
    name: "Manganese(II) (Mn2+)",
  },
  {
    value: 16,
    name: "Manganese(III) (Mn3+)",
  },
  {
    value: 17,
    name: "Mercury(I) (Hg+)",
  },
  {
    value: 18,
    name: "Mercury(II) (Hg2+)",
  },
  {
    value: 19,
    name: "Nitronium (NO2+)",
  },
  {
    value: 20,
    name: "Potassium (K+)",
  },
  {
    value: 21,
    name: "Silver (Ag+)",
  },
  {
    value: 22,
    name: "Sodium (Na+)",
  },
  {
    value: 23,
    name: "Strontium (Sr2+)",
  },
  {
    value: 24,
    name: "Tin(II) (Sn2+)",
  },
  {
    value: 25,
    name: "Tin(IV) (Sn4+)",
  },
  {
    value: 26,
    name: "Zinc (Zn2+)",
  },
];

const anions = [
  {
    value: 1,
    name: "Hydride (H-)",
  },
  {
    value: 2,
    name: "Fluoride (F-)",
  },
  {
    value: 3,
    name: "Chloride (Cl-)",
  },
  {
    value: 4,
    name: "Bromide (Br-)",
  },
  {
    value: 5,
    name: "Iodide (I-)",
  },
  {
    value: 6,
    name: "Arsenate (AsO43-)",
  },
  {
    value: 7,
    name: "Arsenite (AsO33-)",
  },
  {
    value: 8,
    name: "Sulfate (SO42-)",
  },
  {
    value: 9,
    name: "Hydrogen sulfate (HSO4-)",
  },
  {
    value: 10,
    name: "Thiosulfate (S2O32-)",
  },
  {
    value: 11,
    name: "Sulfite (SO32-)",
  },
  {
    value: 12,
    name: "Perchlorate (ClO4-)",
  },
  {
    value: 13,
    name: "Chlorate (ClO3-)",
  },
  {
    value: 14,
    name: "Chlorite (ClO2-)",
  },
  {
    value: 15,
    name: "Hypochlorite (ClO-)",
  },
  {
    value: 16,
    name: "Carbonate (CO32-)",
  },
  {
    value: 17,
    name: "Hydrogen carbonate or Bicarbonate (HCO3-)",
  },
  {
    value: 18,
    name: "Acetate (C2H3O2-)",
  },
  {
    value: 19,
    name: "Cyanide (CN-)",
  },
  {
    value: 20,
    name: "Cyanate (OCN-)",
  },
  {
    value: 21,
    name: "Thiocyanate (SCN-)",
  },
  {
    value: 22,
    name: "Hydroxide (OH-)",
  },
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

function createDropDown(arr, element) {
  element.innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    var option = document.createElement("option");
    option.text = arr[i].name;
    option.value = arr[i].value;
    element.appendChild(option);
  }
}

function init() {
  createDropDown(cations, input1);
  createDropDown(anions, input2);
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}

init();

function getSelectedName(dropDown) {
  return dropDown.options[dropDown.selectedIndex].text;
}

function calculate() {
  var cat = getSelectedName(input1);
  var ani = getSelectedName(input2);
  var resultName = cat.split(" ")[0] + " " + ani.split(" ")[0];
  var resultFormula = cat.split(" ")[1] + "(" + ani.split(" ")[1] + ")" + "₃";
  var result =
    "Ionic compound name: " +
    resultName +
    "<br>Chemical formula: " +
    resultFormula;
  return result;
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

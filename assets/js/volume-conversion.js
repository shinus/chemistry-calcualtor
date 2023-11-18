let area = [
  { value: "bbl", name: "Barrel (Oil)" },
  { value: "cm³", name: "Cubic Centimeter" },
  { value: "ft³", name: "Cubic Foot" },
  { value: "m³", name: "Cubic Meter" },
  { value: "gal", name: "Gallon" },
  { value: "gal_uk", name: "Gallon (UK)" },
  { value: "L", name: "Liter" },
  { value: "mL", name: "Milliliters" },
  { value: "oz", name: "Ounce (fl oz)" },
  { value: "acre-ft", name: "Acre-Foot" },
  { value: "acre-in", name: "Acre-Inch" },
  { value: "al", name: "Attoliter" },
  { value: "bbl", name: "Barrel" },
  { value: "bbl", name: "Bath (Biblical)" },
  { value: "bd ft", name: "Board Foot" },
  { value: "bu", name: "Bushel" },
  { value: "bu_uk", name: "Bushel (UK)" },
  { value: "cab", name: "Cab (Biblical)" },
  { value: "cc", name: "Cc" },
  { value: "ccf", name: "Ccf" },
  { value: "cor", name: "Cor (Biblical)" },
  { value: "cord", name: "Cord" },
  { value: "in³", name: "Cubic Inch" },
  { value: "yd³", name: "Cubic Yard" },
  { value: "cup", name: "Cup" },
  { value: "cup_uk", name: "Cup (UK)" },
  { value: "dl", name: "Deciliter" },
  { value: "dSt", name: "Decistere" },
  { value: "dal", name: "Dekaliter" },
  { value: "daSt", name: "Dekastere" },
  { value: "d.s.", name: "Dessertspoon" },
  { value: "d.s._uk", name: "Dessertspoon (UK)" },
  { value: "dr", name: "Dram" },
  { value: "dr_uk", name: "Dram (UK)" },
  { value: "drop", name: "Drop" },
  { value: "dry pt", name: "Dry Pint" },
  { value: "dry qt", name: "Dry Quart" },
  { value: "EL", name: "Exaliter" },
  { value: "fl", name: "Femtoliter" },
  { value: "GL", name: "Gigaliter" },
  { value: "gi", name: "Gill" },
  { value: "gi_uk", name: "Gill (UK)" },
  { value: "hL", name: "Hectoliter" },
  { value: "hin", name: "Hin (Biblical)" },
  { value: "hogshead", name: "Hogshead" },
  { value: "homer", name: "Homer (Biblical)" },
  { value: "100 ft³", name: "Hundred-Cubic Foot" },
  { value: "kL", name: "Kiloliter" },
  { value: "log", name: "Log (Biblical)" },
  { value: "ML", name: "Megaliter" },
  { value: "µL", name: "Microliter" },
  { value: "min", name: "Minim" },
  { value: "min_uk", name: "Minim (UK)" },
  { value: "nL", name: "Nanoliter" },
  { value: "oz_uk", name: "Ounce (UK)" },
  { value: "pk", name: "Peck" },
  { value: "pk_uk", name: "Peck (UK)" },
  { value: "PL", name: "Petaliter" },
  { value: "pl", name: "Picoliter" },
  { value: "pt", name: "Pint" },
  { value: "pt_uk", name: "Pint (UK)" },
  { value: "qt", name: "Quart" },
  { value: "qt_uk", name: "Quart (UK)" },
  { value: "stere", name: "Stere" },
  { value: "t.s.", name: "Tablespoon" },
  { value: "t.s._uk", name: "Tablespoon (UK)" },
  { value: "taza", name: "Taza (Spanish)" },
  { value: "tsp", name: "Teaspoon" },
  { value: "tsp_uk", name: "Teaspoon (UK)" },
  { value: "TL", name: "Teraliter" },
  { value: "tun", name: "Tun" },
];

let selectFrom = document.getElementById("from");
let selectTo = document.getElementById("to");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");
let defaultval = document.getElementById("from1");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;
defaultval.value = 100;

calcBtn.addEventListener("click", convertArea);

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectFrom.add(option);
  selectFrom.value = "bbl";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "cup";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInL = 0;
  let output = 0;

  // Convert ione unit to another
  switch (from) {
    case "bbl":
      inputInL = input * 158.9873;
      break;
    case "cm³":
      inputInL = input / 1000;
      break;
    case "ft³":
      inputInL = input * 28.31685;
      break;
    case "m³":
      inputInL = input * 1000;
      break;
    case "gal":
      inputInL = input * 3.785412;
      break;
    case "gal_uk":
      inputInL = input * 4.546092;
      break;
    case "L":
      inputInL = input;
      break;
    case "mL":
      inputInL = input / 1000;
      break;
    case "oz":
      inputInL = input / 33.81402;
      break;
    case "in³":
      inputInL = input / 61.02374;
      break;
    case "cup":
      inputInL = input / 4.22675283773;
      break;
    case "cup_uk":
      inputInL = input / 3.51951;
      break;
    case "dl":
      inputInL = input / 10;
      break;
    case "dSt":
      inputInL = input / 10;
      break;
    case "dal":
      inputInL = input * 10;
      break;
    case "daSt":
      inputInL = input * 100;
      break;
    case "d.s.":
      inputInL = input / 67.628;
      break;
    case "d.s._uk":
      inputInL = input / 75;
      break;
    case "dr":
      inputInL = input / 270.51;
      break;
    case "dr_uk":
      inputInL = input / 225.28;
      break;
    case "drop":
      inputInL = input / 196.841;
      break;
    case "dry pt":
      inputInL = input / 0.55061;
      break;
    case "dry qt":
      inputInL = input / 1.10122;
      break;
    case "gi":
      inputInL = input / 118.2941;
      break;
    case "gi_uk":
      inputInL = input / 142;
      break;
    case "hin":
      inputInL = input * 3.0662;
      break;
    case "min":
      inputInL = input / 162.3073;
      break;
    case "min_uk":
      inputInL = input / 16910.4;
      break;
    case "pk":
      inputInL = input / 0.11352;
      break;
    case "pt":
      inputInL = input / 2.11338;
      break;
    case "pt_uk":
      inputInL = input / 1.75975;
      break;
    case "qt":
      inputInL = input / 1.05669;
      break;
    case "qt_uk":
      inputInL = input / 0.87988;
      break;
    case "Tbs":
      inputInL = input / 67.628;
      break;
    case "Tbs_uk":
      inputInL = input / 56.312;
      break;
    case "tsp":
      inputInL = input / 202.884;
      break;
    case "tsp_uk":
      inputInL = input / 168.936;
      break;
    // new code starts here
    case "oz":
      inputInL = input * 0.0295735;
      break;
    case "acre-ft":
      inputInL = input * 1233480;
      break;
    case "acre-in":
      inputInL = input * 102791;
      break;
    case "al":
      inputInL = input / 1000000000000000000;
      break;
    case "bbl":
      inputInL = input * 158.9873;
      break;
    case "bath":
      inputInL = input * 22;
      break;
    case "bd ft":
      inputInL = input * 2.35974;
      break;
    case "bu":
      inputInL = input * 35.2391;
      break;
    case "bu_uk":
      inputInL = input * 36.3687;
      break;
    case "cab":
      inputInL = input * 1.2222221627;
      break;
    case "cc":
      inputInL = input * 0.001;
      break;
    case "ccf":
      inputInL = input * 2831.68466;
      break;
    case "cor":
      inputInL = input * 220;
      break;
    case "cord":
      inputInL = input * 3624.56;
      break;
    case "yd³":
      inputInL = input * 764.55485798;
      break;
    case "EL":
      inputInL = input / 1.0e-15;
      break;
    case "fl":
      inputInL = input / 1000000000;
      break;
    case "GL":
      inputInL = input * 1e9;
      break;
    case "hL":
      inputInL = input * 100;
      break;
    case "hin":
      inputInL = input / 3.5;
      break;
    case "hogshead":
      inputInL = input * 238.480942;
      break;
    case "homer":
      inputInL = input * 220;
      break;
    case "100 ft³":
      inputInL = input * 2831.68466;
      break;
    case "kL":
      inputInL = input * 1000;
      break;
    case "log":
      inputInL = input * 0.316;
      break;
    case "ML":
      inputInL = input * 1000000;
      break;
    case "µL":
      inputInL = input / 1000000;
      break;
    case "nL":
      inputInL = input / 1000000000;
      break;
    case "oz_uk":
      inputInL = input * 0.0284131;
      break;
    case "PL":
      inputInL = input * 1e15;
      break;
    case "pl":
      inputInL = input / 1000000000000;
      break;
    case "stere":
      inputInL = input * 1000;
      break;
    case "t.s.":
      inputInL = input * 0.0147868;
      break;
    case "t.s._uk":
      inputInL = input * 0.0177582;
      break;
    case "taza":
      inputInL = input * 0.2365882365;
      break;
    case "TL":
      inputInL = input * 1000000000000;
      break;
    case "tun":
      inputInL = input * 954.678;
      break;
  }

  // Convert one unit to output unit
  switch (to) {
    case "bbl":
      output = inputInL / 158.9873;
      break;
    case "cm³":
      output = inputInL / 0.001;
      break;
    case "ft³":
      output = inputInL / 28.31685;
      break;
    case "m³":
      output = inputInL / 1000;
      break;
    case "gal":
      output = inputInL / 3.785412;
      break;
    case "gal_uk":
      output = inputInL / 4.546092;
      break;
    case "L":
      output = inputInL;
      break;
    case "mL":
      output = inputInL * 1000;
      break;
    case "oz":
      output = inputInL * 33.81402;
      break;
    case "in³":
      output = inputInL * 61.02374;
      break;
    case "cup":
      output = inputInL * 4.22675283773;
      break;
    case "cup_uk":
      output = inputInL * 3.51951;
      break;
    case "dl":
      output = inputInL * 10;
      break;
    case "dSt":
      output = inputInL * 10;
      break;
    case "dal":
      output = inputInL / 10;
      break;
    case "daSt":
      output = inputInL / 100;
      break;
    case "d.s.":
      output = inputInL * 67.628;
      break;
    case "d.s._uk":
      output = inputInL * 75;
      break;
    case "dr":
      output = inputInL * 270.51;
      break;
    case "dr_uk":
      output = inputInL * 225.28;
      break;
    case "drop":
      output = inputInL * 196.841;
      break;
    case "dry pt":
      output = inputInL * 0.55061;
      break;
    case "dry qt":
      output = inputInL * 1.10122;
      break;
    case "gi":
      output = inputInL * 118.2941;
      break;
    case "gi_uk":
      output = inputInL * 142;
      break;
    case "hin":
      output = inputInL / 3.0662;
      break;
    case "min":
      output = inputInL * 162.3073;
      break;
    case "min_uk":
      output = inputInL * 16910.4;
      break;
    case "pk":
      output = inputInL * 0.11352;
      break;
    case "pt":
      output = inputInL * 2.11338;
      break;
    case "pt_uk":
      output = inputInL * 1.75975;
      break;
    case "qt":
      output = inputInL * 1.05669;
      break;
    case "qt_uk":
      output = inputInL * 0.87988;
      break;
    case "Tbs":
      output = inputInL * 67.628;
      break;
    case "Tbs_uk":
      output = inputInL * 56.312;
      break;
    case "tsp":
      output = inputInL * 202.884;
      break;
    case "tsp_uk":
      output = inputInL * 168.936;
      break;
    // new
    case "oz":
      output = inputInL * 33.814;
      break;
    case "acre-ft":
      output = inputInL / 1233480;
      break;
    case "acre-in":
      output = inputInL / 102.790153;
      break;
    case "al":
      output = inputInL * 1000000000000000000;
      break;
    case "bbl":
      output = inputInL * 0.158987294928;
      break;
    case "bath":
      output = inputInL * 22.9925;
      break;
    case "bd ft":
      output = inputInL / 2.35974;
      break;
    case "bu":
      output = inputInL / 35.2391;
      break;
    case "bu_uk":
      output = inputInL * 0.03636872;
      break;
    case "cab":
      output = inputInL / 1.2222221627;
      break;
    case "cc":
      output = inputInL / 0.001;
      break;
    case "ccf":
      output = inputInL / 2831.68466;
      break;
    case "cor":
      output = inputInL / 220;
      break;
    case "cord":
      output = inputInL / 3624.56;
      break;
    case "yd³":
      output = inputInL / 764.55485798;
      break;
    case "EL":
      output = inputInL * 1.0e-15;
      break;
    case "fl":
      output = inputInL * 1000000000;
      break;
    case "GL":
      output = inputInL / 1e9;
      break;
    case "hL":
      output = inputInL / 100;
      break;
    case "hin":
      output = inputInL * 3.5;
      break;
    case "hogshead":
      output = inputInL / 238.480942;
      break;
    case "homer":
      output = inputInL / 220;
      break;
    case "100 ft³":
      output = inputInL / 2831.68466;
      break;
    case "kL":
      output = inputInL / 1000;
      break;
    case "log":
      output = inputInL / 0.316;
      break;
    case "ML":
      output = inputInL / 1000000;
      break;
    case "µL":
      output = inputInL * 1000000;
      break;
    case "nL":
      output = inputInL * 1000000000;
      break;
    case "oz_uk":
      output = inputInL / 0.0284131;
      break;
    case "PL":
      output = inputInL / 1e15;
      break;
    case "pl":
      output = inputInL * 1000000000000;
      break;
    case "stere":
      output = inputInL / 1000;
      break;
    case "t.s.":
      output = inputInL / 0.0147868;
      break;
    case "t.s._uk":
      output = inputInL / 0.0177582;
      break;
    case "taza":
      output = inputInL / 0.2365882365;
      break;
    case "TL":
      output = inputInL / 1000000000000;
      break;
    case "tun":
      output = inputInL / 954.678;
      break;
  }

  result.innerHTML = `${input} ${from} = ${output.toFixed(2)} ${to}`;
}
let queryParams = [
  {
    name: "value",
    values: defaultval,
  },
  {
    name: "convertfrom",
    values: selectFrom,
  },
  {
    name: "convertto",
    values: selectTo,
  },
];
function handleSubmit() {
  convertArea();
  resultPage2(queryParams);
}
calcBtn.addEventListener("click", handleSubmit);

function setParams(queryParams) {
  let url =
    window.location.protocol +
    "//" +
    window.location.host +
    "/" +
    permaLink +
    "?";
  for (queryP of queryParams) {
    if (history.pushState) {
      var str = "&" + queryP.name + "=" + queryP.values.value;
      url = url + str;
    }
  }
  window.history.pushState({ path: url }, "", url);
}

function setParamValues(queryParams) {
  const params = new URLSearchParams(window.location.search);
  for (queryP of queryParams) {
    var parameter_value = params.get(queryP.name);
    if (queryP.values.tagName == "INPUT") {
      queryP.values.value = parameter_value;
    } else if (queryP.values.tagName == "SELECT") {
      queryP.values.value = parameter_value;
    }
  }
}
function resultPage2(queryParams) {
  var newUrl = window.location.href;
  if (!newUrl.includes("?")) {
    setParams(queryParams);
  } else {
    setParams(queryParams);
    // gtag("event", "page_view", {
    //   page_location: window.location.pathname + location.search,
    // });
  }
}
function init() {
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    handleSubmit();
  }
}
init();

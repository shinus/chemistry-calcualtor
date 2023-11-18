let area = [
  { value: "atm", name: "Atmospheres (atm)" },
  { value: "bar", name: "Bar (bar)" },
  { value: "cmHg", name: "Centimeter Mercury (0°C) (cmHg)" },
  { value: "cmAq", name: "Centimeter Water (4°C) (cmAq)" },
  { value: "ftAq", name: "Foot Water (60°F) (ftAq)" },
  { value: "inHg", name: "Inch Mercury (32°F) (inHg)" },
  { value: "inAq", name: "Inch Water (60°F) (inAq)" },
  { value: "kg/cm²", name: "Kilogram-force/Square Centimeter (kg/cm²)" },
  { value: "kN/m²", name: "Kilonewton/Square Meter (kN/m²)" },
  { value: "kPa", name: "Kilopascal (kPa)" },
  { value: "MPa", name: "Megapascal (MPa)" },
  { value: "mmHg", name: "Millimeter Mercury (0°C) (mmHg)" },
  { value: "Pa", name: "Pascal (Pa)" },
  { value: "lb/in²", name: "Pound/Square Inch (lb/in²)" },
  { value: "Psi", name: "Psi (Psi)" },
  { value: "torr", name: "Torr (torr)" },
  { value: "aPa", name: "Attopascal (aPa)" },
  { value: "cPa", name: "Centipascal (cPa)" },
  { value: "dPa", name: "Decipascal (dPa)" },
  { value: "daPa", name: "Dekapascal (daPa)" },
  { value: "dyn/cm²", name: "Dyne/Square Centimeter (dyn/cm²)" },
  { value: "EPa", name: "Exapascal (EPa)" },
  { value: "fPa", name: "Femtopascal (fPa)" },
  { value: "GPa", name: "Gigapascal (GPa)" },
  { value: "hPa", name: "Hectopascal (hPa)" },
  { value: "kg/m²", name: "Kilogram/Square Meter (kg/m²)" },
  { value: "kg/mm²", name: "Kilogram/Square Millimeter (kg/mm²)" },
  { value: "kip/in²", name: "Kip/Square Inch (kip/in²)" },
  { value: "µBar", name: "Microbar (µBar)" },
  { value: "µPa", name: "Micropascal (µPa)" },
  { value: "mBar", name: "Millibar (mBar)" },
  { value: "mPa", name: "Millipascal (mPa)" },
  { value: "nPa", name: "Nanopascal (nPa)" },
  { value: "N/cm²", name: "Newton/Square Centimeter (N/cm²)" },
  { value: "N/m²", name: "Newton/Square Meter (N/m²)" },
  { value: "N/mm²", name: "Newton/Square Millimeter (N/mm²)" },
  { value: "PPa", name: "Petapascal (PPa)" },
  { value: "pPa", name: "Picopascal (pPa)" },
  { value: "lb/ft²", name: "Pound/Square Foot (lb/ft²)" },
  { value: "TPa", name: "Terapascal (TPa)" },
  { value: "t/ft²", name: "Ton/Square Foot (t/ft²)" },
  { value: "t/in²", name: "Ton/Square Inch (t/in²)" },
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
  selectFrom.value = "atm";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "kg/m²";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInKilogramSquareMeter = 0;
  let output = 0;

  switch (from) {
    case "atm":
      inputInKilogramSquareMeter = input * 10332.27453;
      break;
    case "bar":
      inputInKilogramSquareMeter = input * 10197.16213;
      break;
    case "cmHg":
      inputInKilogramSquareMeter = input * 135.95098;
      break;
    case "cmAq":
      inputInKilogramSquareMeter = input * 9.99972;
      break;
    case "ftAq":
      inputInKilogramSquareMeter = input * 9.99972;
      break;
    case "inHg":
      inputInKilogramSquareMeter = input * 345.31549;
      break;
    case "inAq":
      inputInKilogramSquareMeter = input * 25.37462;
      break;
    case "kg/cm²":
      inputInKilogramSquareMeter = input * 10000;
      break;
    case "kN/m²":
      inputInKilogramSquareMeter = input * 101.97162;
      break;
    case "kPa":
      inputInKilogramSquareMeter = input * 101.97162;
      break;
    case "MPa":
      inputInKilogramSquareMeter = input * 101971.6213;
      break;
    case "mmHg":
      inputInKilogramSquareMeter = input * 13.5951;
      break;
    case "Pa":
      inputInKilogramSquareMeter = input * 0.10197;
      break;
    case "lb/in²":
      inputInKilogramSquareMeter = input * 703.06958;
      break;
    case "Psi":
      inputInKilogramSquareMeter = input * 703.06958;
      break;
    case "torr":
      inputInKilogramSquareMeter = input * 13.5951;
      break;
    case "aPa":
      inputInKilogramSquareMeter = input * 1.019716212e-19;
      break;
    case "cPa":
      inputInKilogramSquareMeter = input * 0.00102;
      break;
    case "dPa":
      inputInKilogramSquareMeter = input * 0.0102;
      break;
    case "daPa":
      inputInKilogramSquareMeter = input * 1.01972;
      break;
    case "dyn/cm²":
      inputInKilogramSquareMeter = input * 0.0102;
      break;
    case "EPa":
      inputInKilogramSquareMeter = input * 101971621299999980;
      break;
    case "fPa":
      inputInKilogramSquareMeter = input * 1.019716212e-16;
      break;
    case "GPa":
      inputInKilogramSquareMeter = input * 10.19716;
      break;
    case "hPa":
      inputInKilogramSquareMeter = input * 1000000;
      break;
    case "kg/m²":
      inputInKilogramSquareMeter = input;
      break;
    case "kg/mm²":
      inputInKilogramSquareMeter = input * 1000000;
      break;
    case "kip/in²":
      inputInKilogramSquareMeter = input * 703069.57966;
      break;
    case "µBar":
      inputInKilogramSquareMeter = input * 0.0102;
      break;
    case "µPa":
      inputInKilogramSquareMeter = input * 1.019716212e-7;
      break;
    case "mBar":
      inputInKilogramSquareMeter = input * 10.19716;
      break;
    case "mPa":
      inputInKilogramSquareMeter = input * 0.0001;
      break;
    case "nPa":
      inputInKilogramSquareMeter = input * 1.019716212e-10;
      break;
    case "N/cm²":
      inputInKilogramSquareMeter = input * 1019.71621;
      break;
    case "N/m²":
      inputInKilogramSquareMeter = input * 0.10197;
      break;
    case "N/mm²":
      inputInKilogramSquareMeter = input * 101971.6213;
      break;
    case "PPa":
      inputInKilogramSquareMeter = input * 101971621299999.98;
      break;
    case "pPa":
      inputInKilogramSquareMeter = input * 1.019716212e-13;
      break;
    case "lb/ft²":
      inputInKilogramSquareMeter = input * 4.88243;
      break;
    case "TPa":
      inputInKilogramSquareMeter = input * 101971621300;
      break;
    case "t/ft²":
      inputInKilogramSquareMeter = input * 9764.85527;
      break;
    case "t/in²":
      inputInKilogramSquareMeter = input * 1406139.15931;
      break;
  }

  switch (to) {
    case "atm":
      output = inputInKilogramSquareMeter / 10332.27453;
      break;
    case "bar":
      output = inputInKilogramSquareMeter / 10197.16213;
      break;
    case "cmHg":
      output = inputInKilogramSquareMeter / 135.95098;
      break;
    case "cmAq":
      output = inputInKilogramSquareMeter / 9.99972;
      break;
    case "ftAq":
      output = inputInKilogramSquareMeter / 9.99972;
      break;
    case "inHg":
      output = inputInKilogramSquareMeter / 345.31549;
      break;
    case "inAq":
      output = inputInKilogramSquareMeter / 25.37462;
      break;
    case "kg/cm²":
      output = inputInKilogramSquareMeter / 10000;
      break;
    case "kN/m²":
      output = inputInKilogramSquareMeter / 101.97162;
      break;
    case "kPa":
      output = inputInKilogramSquareMeter / 101.97162;
      break;
    case "MPa":
      output = inputInKilogramSquareMeter / 101971.6213;
      break;
    case "mmHg":
      output = inputInKilogramSquareMeter / 13.5951;
      break;
    case "Pa":
      output = inputInKilogramSquareMeter / 0.10197;
      break;
    case "lb/in²":
      output = inputInKilogramSquareMeter / 703.06958;
      break;
    case "Psi":
      output = inputInKilogramSquareMeter / 703.06958;
      break;
    case "torr":
      output = inputInKilogramSquareMeter / 13.5951;
      break;
    case "aPa":
      output = inputInKilogramSquareMeter / 1.019716212e-19;
      break;
    case "cPa":
      output = inputInKilogramSquareMeter / 0.00102;
      break;
    case "dPa":
      output = inputInKilogramSquareMeter / 0.0102;
      break;
    case "daPa":
      output = inputInKilogramSquareMeter / 1.01972;
      break;
    case "dyn/cm²":
      output = inputInKilogramSquareMeter / 0.0102;
      break;
    case "EPa":
      output = inputInKilogramSquareMeter / 101971621299999980;
      break;
    case "fPa":
      output = inputInKilogramSquareMeter / 1.019716212e-16;
      break;
    case "GPa":
      output = inputInKilogramSquareMeter / 10.19716;
      break;
    case "hPa":
      output = inputInKilogramSquareMeter / 1000000;
      break;
    case "kg/m²":
      output = inputInKilogramSquareMeter;
      break;
    case "kg/mm²":
      output = inputInKilogramSquareMeter / 1000000;
      break;
    case "kip/in²":
      output = inputInKilogramSquareMeter / 703069.57966;
      break;
    case "µBar":
      output = inputInKilogramSquareMeter / 0.0102;
      break;
    case "µPa":
      output = inputInKilogramSquareMeter / 1.019716212e-7;
      break;
    case "mBar":
      output = inputInKilogramSquareMeter / 10.19716;
      break;
    case "mPa":
      output = inputInKilogramSquareMeter / 0.0001;
      break;
    case "nPa":
      output = inputInKilogramSquareMeter / 1.019716212e-10;
      break;
    case "N/cm²":
      output = inputInKilogramSquareMeter / 1019.71621;
      break;
    case "N/m²":
      output = inputInKilogramSquareMeter / 0.10197;
      break;
    case "N/mm²":
      output = inputInKilogramSquareMeter / 101971.6213;
      break;
    case "PPa":
      output = inputInKilogramSquareMeter / 101971621299999.98;
      break;
    case "pPa":
      output = inputInKilogramSquareMeter / 1.019716212e-13;
      break;
    case "lb/ft²":
      output = inputInKilogramSquareMeter / 4.88243;
      break;
    case "TPa":
      output = inputInKilogramSquareMeter / 101971621300;
      break;
    case "t/ft²":
      output = inputInKilogramSquareMeter / 9764.85527;
      break;
    case "t/in²":
      output = inputInKilogramSquareMeter / 1406139.15931;
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

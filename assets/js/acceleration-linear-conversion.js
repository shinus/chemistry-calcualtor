let area = [
  { value: "ft/s²", name: "Foot/Square Second (ft/s²)" },
  { value: "m/s²", name: "Meter/Square Second (m/s²)" },
  { value: "m/s²", name: "g" },
  { value: "Gal", name: "Gal" },
  { value: "am/s²", name: "Attometer/Square Second (am/s²)" },
  { value: "cm/s²", name: "Centimeter/Square Second (cm/s²)" },
  { value: "dm/s²", name: "Decimeter/Square Second (dm/s²)" },
  { value: "dam/s²", name: "Dekameter/Square Second (dam/s²)" },
  { value: "fm/s²", name: "Femtometer/Square Second (fm/s²)" },
  { value: "hm/s²", name: "Hectometer/Square Second (hm/s²)" },
  { value: "in/s²", name: "Inch/Square Second (in/s²)" },
  { value: "km/s²", name: "Kilometer/Square Second (km/s²)" },
  { value: "µm/s²", name: "Micrometer/Square Second (µm/s²)" },
  { value: "mi/s²", name: "Mile/Square Second (mi/s²)" },
  { value: "mm/s²", name: "Millimeter/Square Second (mm/s²)" },
  { value: "nm/s²", name: "Nanometer/Square Second (nm/s²)" },
  { value: "pm/s²", name: "Picometer/Square Second (pm/s²)" },
  { value: "yd/s²", name: "Yard/Square Second (yd/s²)" },
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
  selectFrom.value = "ft/s²";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "m/s²";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInMeterPerSquareSecond = 0;
  let output = 0;

  switch (from) {
    case "ft/s²":
      inputInMeterPerSquareSecond = input * 0.3048;
      break;
    case "m/s²":
      inputInMeterPerSquareSecond = input;
      break;
    case "g":
      inputInMeterPerSquareSecond = input * 0.01;
      break;
    case "Gal":
      inputInMeterPerSquareSecond = input * 0.01;
      break;
    case "am/s²":
      inputInMeterPerSquareSecond = input * 1e-18;
      break;
    case "cm/s²":
      inputInMeterPerSquareSecond = input * 0.01;
      break;
    case "dm/s²":
      inputInMeterPerSquareSecond = input * 0.1;
      break;
    case "dam/s²":
      inputInMeterPerSquareSecond = input * 10;
      break;
    case "fm/s²":
      inputInMeterPerSquareSecond = input * 1e-15;
      break;
    case "hm/s²":
      inputInMeterPerSquareSecond = input * 100;
      break;
    case "in/s²":
      inputInMeterPerSquareSecond = input * 0.0254;
      break;
    case "km/s²":
      inputInMeterPerSquareSecond = input * 1000;
      break;
    case "µm/s²":
      inputInMeterPerSquareSecond = input * 1e-6;
      break;
    case "mi/s²":
      inputInMeterPerSquareSecond = input * 1609.344;
      break;
    case "mm/s²":
      inputInMeterPerSquareSecond = input * 0.001;
      break;
    case "nm/s²":
      inputInMeterPerSquareSecond = input * 1e-9;
      break;
    case "pm/s²":
      inputInMeterPerSquareSecond = input * 1e-12;
      break;
    case "yd/s²":
      inputInMeterPerSquareSecond = input * 0.9144;
      break;
    default:
      inputInMeterPerSquareSecond = NaN; // handle invalid input
  }

  switch (to) {
    case "ft/s²":
      output = inputInMeterPerSquareSecond / 0.3048;
      break;
    case "m/s²":
      output = inputInMeterPerSquareSecond;
      break;
    case "g":
      output = inputInMeterPerSquareSecond / 0.01;
      break;
    case "Gal":
      output = inputInMeterPerSquareSecond / 0.01;
      break;
    case "am/s²":
      output = inputInMeterPerSquareSecond / 1e-18;
      break;
    case "cm/s²":
      output = inputInMeterPerSquareSecond / 0.01;
      break;
    case "dm/s²":
      output = inputInMeterPerSquareSecond / 0.1;
      break;
    case "dam/s²":
      output = inputInMeterPerSquareSecond / 10;
      break;
    case "fm/s²":
      output = inputInMeterPerSquareSecond / 1e-15;
      break;
    case "hm/s²":
      output = inputInMeterPerSquareSecond / 100;
      break;
    case "in/s²":
      output = inputInMeterPerSquareSecond / 0.0254;
      break;
    case "km/s²":
      output = inputInMeterPerSquareSecond / 1000;
      break;
    case "µm/s²":
      output = inputInMeterPerSquareSecond / 1e-6;
      break;
    case "mi/s²":
      output = inputInMeterPerSquareSecond / 1609.344;
      break;
    case "mm/s²":
      output = inputInMeterPerSquareSecond / 0.001;
      break;
    case "nm/s²":
      output = inputInMeterPerSquareSecond / 1e-9;
      break;
    case "pm/s²":
      output = inputInMeterPerSquareSecond / 1e-12;
      break;
    case "yd/s²":
      output = inputInMeterPerSquareSecond / 0.9144;
      break;
    default:
      output = NaN; // handle invalid input
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

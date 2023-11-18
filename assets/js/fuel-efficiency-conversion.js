let area = [
  { value: "gal/100mi (us)", name: "Gallons (US)/100mi (gal/100mi)" },
  { value: "km/L", name: "Kilometer/Liter (km/L)" },
  { value: "L/100km", name: "Liter/100 Km (L/100km)" },
  { value: "mil/L", name: "Mile (US)/Liter (mil/L)" },
  { value: "mil/gal", name: "Mile/Gallon (US) (mil/gal)" },
  { value: "gal/100mi uk", name: "Gallons (UK)/100mi (gal/100mi)" },
  { value: "gal/mil uk", name: "Gallons (UK)/Mile (gal/mil)" },
  { value: "gal/mil us", name: "Gallons (US)/Mile (gal/mil)" },
  { value: "Gm/L", name: "Gigameter/Liter (Gm/L)" },
  { value: "dam/L", name: "Dekameter/Liter (dam/L)" },
  { value: "cm/L", name: "Centimeter/Liter(cm/L)" },
  { value: "Em/L", name: "Exameter/Liter(Em/L)" },
  { value: "hm/L", name: "Hectometer/Liter (hm/L)" },
  { value: "km/gal", name: "Kilometer/Gallon (US) (km/gal)" },
  { value: "L/m", name: "Liter/Meter (L/m)" },
  { value: "Mm/L", name: "Megameter/Liter (Mm/L)" },
  { value: "m/cup", name: "Meter/Cup (m/cup)" },
  { value: "m/cup uk", name: "Meter/Cup (UK) (m/cup)" },
  { value: "m/fl.oz", name: "Meter/Fluid Ounce (m/fl.oz)" },
  { value: "m/fl.oz uk", name: "Meter/Fluid Ounce (UK) (m/fl.oz)" },
  { value: "m/gal", name: "Meter/Gallon (m/gal)" },
  { value: "m/gal uk", name: "Meter/Gallon (UK) (m/gal)" },
  { value: "m/gal us", name: "Meter/Gallon (US) (m/gal)" },
  { value: "m/L", name: "Meter/Liter (m/L)" },
  { value: "m/pint", name: "Meter/Pint (m/pint)" },
  { value: "m/pint uk", name: "Meter/Pint (UK) (m/pint)" },
  { value: "m/quart", name: "Meter/Quart (m/quart)" },
  { value: "m/quart uk", name: "Meter/Quart (UK) (m/quart)" },
  { value: "m/cm²", name: "Meter/Square Centimeter (m/cm²)" },
  { value: "m/ft²", name: "Meter/Square Feet (m/ft²)" },
  { value: "m/in²", name: "Meter/Square Inch (m/in²)" },
  { value: "m/m²", name: "Meter/Square Meter (m/m²)" },
  { value: "m/yd²", name: "Meter/Square Yard (m/yd²)" },
  { value: "mil/gal", name: "Mile/Gallon (UK) (mil/gal)" },
  { value: "n.mile/gal", name: "Nautical Mile/Gallon (US) (n.mile/gal)" },
  { value: "n.mile/L", name: "Nautical Mile/Liter (n.mile/L)" },
  { value: "Pm/L", name: "Petameter/Liter (Pm/L)" },
  { value: "Tm/L", name: "Terameter/Liter (Tm/L)" },
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
  selectFrom.value = "km/L";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "L/m";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInLiterMeter = 0;
  let output = 0;

  // switch (from) {
  //   case "L/m":
  //     inputInLiterMeter = input;
  //     break;
  //   case "L/100km":
  //     inputInLiterMeter = input * 0.00001;
  //     break;
  //   case "km/L":
  //     inputInLiterMeter = 0.001 / input;
  //     break;
  // }
  // switch (to) {
  //   case "L/m":
  //     output = inputInLiterMeter;
  //     break;
  //   case "L/100km":
  //     output = inputInLiterMeter / 0.00001;
  //     break;
  //   case "km/L":
  //     output = 0.001 / inputInLiterMeter;
  //     break;
  // }
  switch (from) {
    case "L/m":
      inputInLiterMeter = input;
      break;
    case "L/100km":
      inputInLiterMeter = input * 0.00001;
      break;
    case "km/L":
      inputInLiterMeter = 0.001 / input;
      break;
    case "gal/100mi (us)":
      inputInLiterMeter = input * 0.0028248094;
      break;
    case "mil/L":
      inputInLiterMeter = 0.00062 / input;
      break;
    case "cm/L":
      inputInLiterMeter = 100 / input;
      break;
    case "dam/L":
      inputInLiterMeter = 0.1 / input;
      break;
    case "Em/L":
      inputInLiterMeter = 1e-18 / input;
      break;
    case "gal/100mi uk":
      inputInLiterMeter = input * 0.00003;
      break;
    case "gal/mil uk":
      inputInLiterMeter = input * 0.00282;
      break;
    case "gal/mil us":
      inputInLiterMeter = input * 0.00235;
      break;
    case "Gm/L":
      inputInLiterMeter = 0.0000425144 / input;
      break;
    case "hm/L":
      inputInLiterMeter = 0.01 / input;
      break;
    case "km/gal":
      inputInLiterMeter = 0.00379 / input;
      break;
    case "Mm/L":
      inputInLiterMeter = 1.0e-6 / input;
      break;
    case "m/cup":
      inputInLiterMeter = 0.23659 / input;
      break;
    case "m/cup uk":
      inputInLiterMeter = 0.28413 / input;
      break;
    case "m/fl.oz":
      inputInLiterMeter = 0.02957 / input;
      break;
    case "m/fl.oz uk":
      inputInLiterMeter = 0.02841 / input;
      break;
    case "m/gal":
      inputInLiterMeter = 3.78541 / input;
      break;
    case "m/gal uk":
      inputInLiterMeter = 4.5461 / input;
      break;
    case "m/gal us":
      inputInLiterMeter = 3.78541 / input;
      break;
    case "m/L":
      inputInLiterMeter = 1 / input;
      break;
    case "m/pint":
      inputInLiterMeter = 0.47318 / input;
      break;
    case "m/pint uk":
      inputInLiterMeter = 0.56826 / input;
      break;
    case "m/quart":
      inputInLiterMeter = 0.94635 / input;
      break;
    case "m/quart uk":
      inputInLiterMeter = 1.13652 / input;
      break;
    case "m/cm²":
      inputInLiterMeter = input * 10000;
      break;
    case "m/cm²":
      inputInLiterMeter = 0.001 / input;
      break;
    case "m/ft²":
      inputInLiterMeter = 28.31685 / input;
      break;
    case "m/in²":
      inputInLiterMeter = 0.01639 / input;
      break;
    case "m/m²":
      inputInLiterMeter = 1000 / input;
      break;
    case "m/yd²":
      inputInLiterMeter = 764.55486 / input;
      break;
    case "mil/gal":
      inputInLiterMeter = 0.00282 / input;
      break;
    case "n.mile/gal":
      inputInLiterMeter = 0.00204 / input;
      break;
    case "n.mile/L":
      inputInLiterMeter = 0.00054 / input;
      break;
    case "Pm/L":
      inputInLiterMeter = 1e-15 / input;
      break;
    case "Tm/L":
      inputInLiterMeter = 1e-12 / input;
      break;
    default:
      console.log("Invalid unit");
  }
  switch (to) {
    case "L/m":
      output = inputInLiterMeter;
      break;
    case "L/100km":
      output = inputInLiterMeter / 0.00001;
      break;
    case "km/L":
      output = 0.001 / inputInLiterMeter;
      break;
    case "gal/100mi (us)":
      output = input * 42514.37075;
      break;
    case "mil/L":
      output = 0.00062 / input;
      break;
    case "mil/gal":
      output = 0.00235 / input;
      break;
    case "cm/L":
      output = 100 / input;
      break;
    case "dam/L":
      output = 0.1 / input;
      break;
    case "Em/L":
      output = 1e-18 / input;
      break;
    case "gal/100mi uk":
      output = input * 35400.619;
      break;
    case "gal/mil uk":
      output = input * 354.00619;
      break;
    case "gal/mil us":
      output = input * 425.14371;
      break;
    case "Gm/L":
      inputInLiterMeter = 1e-9 / input;
      break;
    case "hm/L":
      inputInLiterMeter = 0.01 / input;
      break;
    case "km/gal":
      inputInLiterMeter = 0.00379 / input;
      break;
    case "Mm/L":
      inputInLiterMeter = 1.0e-6 / input;
      break;
    case "m/cup":
      inputInLiterMeter = 0.23659 / input;
      break;
    case "m/cup uk":
      inputInLiterMeter = 0.28413 / input;
      break;
    case "m/fl.oz":
      inputInLiterMeter = 0.02957 / input;
      break;
    case "m/fl.oz uk":
      inputInLiterMeter = 0.02841 / input;
      break;
    case "m/gal":
      inputInLiterMeter = 3.78541 / input;
      break;
    case "m/gal uk":
      inputInLiterMeter = 4.5461 / input;
      break;
    case "m/gal us":
      inputInLiterMeter = 3.78541 / input;
      break;
    case "m/L":
      output = 1 / input;
      break;
    case "m/pint":
      inputInLiterMeter = 0.47318 / input;
      break;
    case "m/pint uk":
      inputInLiterMeter = 0.56826 / input;
      break;
    case "m/quart":
      inputInLiterMeter = 0.94635 / input;
      break;
    case "m/quart uk":
      inputInLiterMeter = 1.13652 / input;
      break;
    case "m/cm²":
      inputInLiterMeter = 0.001 / input;
      break;
    case "m/ft²":
      inputInLiterMeter = 28.31685 / input;
      break;
    case "m/in²":
      inputInLiterMeter = 0.01639 / input;
      break;
    case "m/m²":
      inputInLiterMeter = 1000 / input;
      break;
    case "m/yd²":
      inputInLiterMeter = 764.55486 / input;
      break;
    case "mil/gal":
      inputInLiterMeter = 0.00282 / input;
      break;
    case "n.mile/gal":
      inputInLiterMeter = 0.00204 / input;
      break;
    case "n.mile/L":
      inputInLiterMeter = 0.00054 / input;
      break;
    case "Pm/L":
      inputInLiterMeter = 1e-15 / input;
      break;
    case "Tm/L":
      inputInLiterMeter = 1e-12 / input;
      break;
    default:
      console.log("Invalid unit");
  }
  // result.innerHTML = `${input} ${from} = ${output.toFixed(2)} ${to}`;

  result.innerHTML = `${input} ${from} = ${output} ${to}`;
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

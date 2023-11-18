let area = [
  { value: "BTU", name: "BTU (international)" },
  { value: "cal(in)", name: "Calorie (international) (cal)" },
  { value: "El V", name: "Electron Volt (El V)" },
  { value: "erg", name: "Erg" },
  { value: "ft∙lb", name: "Foot-Pound (ft∙lb)" },
  { value: "hp∙h", name: "Horsepower-Hour (hp∙h)" },
  { value: "in∙lb", name: "Inch-Pound (in∙lb)" },
  { value: "J", name: "Joule (J)" },
  { value: "kcal", name: "Kilocalorie (international) (kcal)" },
  { value: "kW∙h", name: "Kilowatt-Hour (kW∙h)" },
  { value: "MBTU", name: "MBTU" },
  { value: "N∙m", name: "Newton-Meter (N∙m)" },
  { value: "thm", name: "Therm (thm)" },
  { value: "aJ", name: "Attojoule (aJ)" },
  { value: "BTU (thermochemical)", name: "BTU (thermochemical) (BTU)" },
  { value: "Calorie (nutritional) (cal)", name: "Calorie (nutritional) (cal)" },
  {
    value: "Calorie (thermochemical) (cal",
    name: "Calorie (thermochemical) (cal)",
  },
  { value: "dyn∙cm", name: "Dyne-Centimeter (dyn∙cm)" },
  { value: "GJ", name: "Gigajoule (GJ)" },
  { value: "Gt", name: "Gigaton (Gt)" },
  { value: "GW∙h", name: "Gigawatt-Hour (GW∙h)" },
  { value: "gf∙cm", name: "Gram Force-Centimeter (gf∙cm)" },
  { value: "gf∙m", name: "Gram Force-Meter (gf∙m)" },
  { value: "in∙oz", name: "Inch-Ounce (in∙oz)" },
  { value: "kcal", name: "Kilocalorie (thermochemical) (kcal)" },
  { value: "kel V", name: "Kiloelectron Volt (kel V)" },
  { value: "kgf∙cm", name: "Kilogram Force-Centimeter (kgf∙cm)" },
  { value: "kgf∙m", name: "Kilogram Force-Meter (kgf∙m)" },
  { value: "kJ", name: "Kilojoule (kJ)" },
  { value: "kt", name: "Kiloton (kt)" },
  { value: "kW∙s", name: "Kilowatt-Second (kW∙s)" },
  { value: "Mel V", name: "Megaelectron Volt (Mel V)" },
  { value: "MJ", name: "Megajoule (MJ)" },
  { value: "Mt", name: "Megaton (Mt)" },
  { value: "MW∙h", name: "Megawatt-Hour (MW∙h)" },
  { value: "m∙kp", name: "Meter-Kilopond (m∙kp)" },
  { value: "µJ", name: "Microjoule (µJ)" },
  { value: "mJ", name: "Millijoule (mJ)" },
  { value: "nJ", name: "Nanojoule (nJ)" },
  { value: "ozf∙in", name: "Ounce Force-Inch (ozf∙in)" },
  { value: "lbf∙ft", name: "Pound Force-Foot (lbf∙ft)" },
  { value: "lbf∙in", name: "Pound Force-Inch (lbf∙in)" },
  { value: "pdl∙ft", name: "Poundal-Foot (pdl∙ft)" },
  { value: "thm (EC)", name: "Therm (EC) (thm)" },
  { value: "thm (US)", name: "Therm (US) (thm)" },
  { value: "Ton", name: "Ton (explosives) (Ton)" },
  { value: "Ton∙h", name: "Ton-Hour (refrigeration) (Ton∙h)" },
  { value: "W∙h", name: "Watt-Hour (W∙h)" },
  { value: "W∙s", name: "Watt-Second (W∙s)" },
];
let selectFrom = document.getElementById("from");
let selectTo = document.getElementById("to");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");
let defaultval = document.getElementById("from1");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;
defaultval.value = 100;

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectFrom.add(option);
  selectFrom.value = "kW∙h";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "kW∙s";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInKilowattSecond = 0;
  let output = 0;

  switch (from) {
    case "kW∙s":
      inputInKilowattSecond = input;
      break;
    case "kW∙h":
      inputInKilowattSecond = input * 3600;
      break;
    case "J":
      inputInKilowattSecond = input * 0.001;
      break;
    case "MJ":
      inputInKilowattSecond = input * 3600;
      break;
    case "W∙h":
      inputInKilowattSecond = input * 3600;
      break;
    case "MW∙h":
      inputInKilowattSecond = input * 3600000;
      break;
    case "BTU":
      inputInKilowattSecond = input * 0.000293071;
      break;
    case "MBTU":
      inputInKilowattSecond = input * 1055.05585;
      break;
    case "cal(in)":
      inputInKilowattSecond = input * 0.00419;
      break;
    case "El V":
      inputInKilowattSecond = input * 1.602176633e-22;
      break;
    case "erg":
      inputInKilowattSecond = input * 1.0e-10;
      break;
    case "ft∙lb":
      inputInKilowattSecond = input * 0.00136;
      break;
    case "hp∙h":
      inputInKilowattSecond = input * 2684.51954;
      break;
    case "in∙lb":
      inputInKilowattSecond = input * 0.00011;
      break;
    case "kcal":
      inputInKilowattSecond = input * 4.184;
      break;
    case "N∙m":
      inputInKilowattSecond = input / 1000;
      break;
    case "thm":
      inputInKilowattSecond = input * 105505585.257;
      break;
    case "aJ":
      inputInKilowattSecond = input * 1.0e-21;
      break;
    case "BTU (thermochemical)":
      inputInKilowattSecond = input * 1.05435;
      break;
    case "Calorie (nutritional) (cal)":
      inputInKilowattSecond = input * 4.1868;
      break;
    case "Calorie (thermochemical) (cal)":
      inputInKilowattSecond = input * 0.00418;
      break;
    case "dyn∙cm":
      inputInKilowattSecond = input * 1.0e-10;
      break;
    case "GJ":
      inputInKilowattSecond = input * 1000000;
      break;
    case "Gt":
      inputInKilowattSecond = input * 4.184e15;
      break;
    case "GW∙h":
      inputInKilowattSecond = input * 3600000000;
      break;
    case "gf∙cm":
      inputInKilowattSecond = input * 9.8066499996977e-8;
      break;
    case "gf∙m":
      inputInKilowattSecond = input * 0.00001;
      break;
    case "in∙oz":
      inputInKilowattSecond = input * 0.00001;
      break;
    case "Kilocalorie (thermochemical) (kcal)":
      inputInKilowattSecond = input * 4.184;
      break;
    case "kel V":
      inputInKilowattSecond = input * 1.602176633e-22;
      break;
    case "kgf∙cm":
      inputInKilowattSecond = input / 0.0001;
      break;
    case "kgf∙m":
      inputInKilowattSecond = input * 0.00981;
      break;
    case "kJ":
      inputInKilowattSecond = input * 1;
      break;
    case "kt":
      inputInKilowattSecond = input * 4183999999.99995;
      break;
    case "Mel V":
      inputInKilowattSecond = input * 1.602176633e-16;
      break;
    case "MJ":
      inputInKilowattSecond = input * 1000;
      break;
    case "Mt":
      inputInKilowattSecond = input * 4183999999999.953;
      break;
    case "MW∙h":
      inputInKilowattSecond = input * 3600000;
      break;
    case "m∙kp":
      inputInKilowattSecond = input / 0.00981;
      break;
    case "µJ":
      inputInKilowattSecond = input * 1.0e-9;
      break;
    case "mJ":
      inputInKilowattSecond = input * 0.000001;
      break;
    case "nJ":
      inputInKilowattSecond = input * 1e-12;
      break;
    case "ozf∙in":
      inputInKilowattSecond = input * 0.00001;
      break;
    case "lbf∙ft":
      inputInKilowattSecond = input * 0.00136;
      break;
    case "lbf∙in":
      inputInKilowattSecond = input * 0.00011;
      break;
    case "pdl∙ft":
      inputInKilowattSecond = input * 0.00004;
      break;
    case "thm (EC)":
      inputInKilowattSecond = input * 105505.6;
      break;
    case "thm (US)":
      inputInKilowattSecond = input * 105480.4;
      break;
    case "Ton":
      inputInKilowattSecond = input * 4184000;
      break;
    case "Ton∙h":
      inputInKilowattSecond = input * 12660.67023;
      break;
    case "W∙h":
      inputInKilowattSecond = input * 3.6;
      break;
    case "W∙s":
      inputInKilowattSecond = input * 0.001;
      break;
    default:
      inputInKilowattSecond = NaN;
  }
  // Conversion to the desired output unit
  switch (to) {
    case "kW∙s":
      output = inputInKilowattSecond;
      break;
    case "kW∙h":
      output = inputInKilowattSecond / 3600;
      break;
    case "J":
      output = inputInKilowattSecond / 0.001;
      break;
    case "MJ":
      output = inputInKilowattSecond / 3600;
      break;
    case "W∙h":
      output = inputInKilowattSecond / 3600;
      break;
    case "MW∙h":
      output = inputInKilowattSecond / 3600000;
      break;
    case "BTU":
      output = inputInKilowattSecond / 0.000293071;
      break;
    case "MBTU":
      output = inputInKilowattSecond / 1055.05585;
      break;
    case "cal(in)":
      output = inputInKilowattSecond * 0.00419;
      break;
    case "El V":
      output = inputInKilowattSecond / 1.602176633e-22;
      break;
    case "erg":
      output = inputInKilowattSecond / 1.0e-10;
      break;
    case "ft∙lb":
      output = inputInKilowattSecond / 0.00136;
      break;
    case "hp∙h":
      output = inputInKilowattSecond / 2684.51954;
      break;
    case "in∙lb":
      output = inputInKilowattSecond / 0.00011;
      break;
    case "kcal":
      output = inputInKilowattSecond / 4.184;
      break;
    case "N∙m":
      output = inputInKilowattSecond * 1000;
      break;
    case "thm":
      output = inputInKilowattSecond / 105505585.257;
      break;
    case "aJ":
      output = inputInKilowattSecond / 1.0e-21;
      break;
    case "BTU (thermochemical)":
      output = inputInKilowattSecond / 1.05435;
      break;
    case "Calorie (nutritional) (cal)":
      output = inputInKilowattSecond / 4.1868;
      break;
    case "Calorie (thermochemical) (cal)":
      output = inputInKilowattSecond / 0.00418;
      break;
    case "dyn∙cm":
      output = inputInKilowattSecond / 1.0e-10;
      break;
    case "GJ":
      output = inputInKilowattSecond / 1000000;
      break;
    case "Gt":
      output = inputInKilowattSecond / 4.184e15;
      break;
    case "GW∙h":
      output = inputInKilowattSecond / 3600000000;
      break;
    case "gf∙cm":
      output = inputInKilowattSecond / 9.8066499996977e-8;
      break;
    case "gf∙m":
      output = inputInKilowattSecond / 0.00001;
      break;
    case "in∙oz":
      output = inputInKilowattSecond / 0.00001;
      break;
    case "Kilocalorie (thermochemical) (kcal)":
      output = inputInKilowattSecond / 4.184;
      break;
    case "kel V":
      output = inputInKilowattSecond / 1.602176633e-22;
      break;
    case "kgf∙cm":
      output = inputInKilowattSecond / 0.0001;
      break;
    case "kgf∙m":
      output = inputInKilowattSecond / 0.00981;
      break;
    case "kJ":
      output = inputInKilowattSecond / 1;
      break;
    case "kt":
      output = inputInKilowattSecond / 4183999999.99995;
      break;
    case "Mel V":
      output = inputInKilowattSecond / 1.602176633e-16;
      break;
    case "MJ":
      output = inputInKilowattSecond / 1000;
      break;
    case "Mt":
      output = inputInKilowattSecond / 4183999999999.953;
      break;
    case "MW∙h":
      output = inputInKilowattSecond / 3600000;
      break;
    case "m∙kp":
      output = inputInKilowattSecond / 0.00981;
      break;
    case "µJ":
      output = inputInKilowattSecond / 1.0e-9;
      break;
    case "mJ":
      output = inputInKilowattSecond / 0.000001;
      break;
    case "nJ":
      output = inputInKilowattSecond / 1e-12;
      break;
    case "ozf∙in":
      output = inputInKilowattSecond / 0.00001;
      break;
    case "lbf∙ft":
      output = inputInKilowattSecond / 0.00136;
      break;
    case "lbf∙in":
      output = inputInKilowattSecond / 0.00011;
      break;
    case "pdl∙ft":
      output = inputInKilowattSecond * 0.00004;
      break;
    case "thm (EC)":
      output = inputInKilowattSecond / 105505.6;
      break;
    case "thm (US)":
      output = inputInKilowattSecond / 105480.4;
      break;
    case "Ton":
      output = inputInKilowattSecond / 4184000;
      break;
    case "Ton∙h":
      output = inputInKilowattSecond / 12660.67023;
      break;
    case "W∙h":
      output = inputInKilowattSecond / 3.6;
      break;
    case "W∙s":
      output = inputInKilowattSecond / 0.001;
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

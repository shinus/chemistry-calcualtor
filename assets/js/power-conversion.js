let area = [
  { value: "BTU/h", name: "BTU/Hour (international) (BTU/h)" },
  { value: "GW", name: "Gigawatt (GW)" },
  { value: "hp", name: "Horsepower (metric) (hp)" },
  { value: "J/s", name: "Joule/Second (J/s)" },
  { value: "kW", name: "Kilowatt (kW)" },
  { value: "W", name: "Watt (W)" },
  { value: "lb∙ft/h", name: "Pound-Foot/Hour (lb∙ft/h)" },
  { value: "aJ/s", name: "Attojoule/Second (aJ/s)" },
  { value: "aW", name: "Attowatt (aW)" },
  { value: "BTU/h(T)", name: "BTU/Hour (thermochemical) (BTU/h)" },
  { value: "BTU/min", name: "BTU/Minute (international) (BTU/min)" },
  { value: "BTU/min(T)", name: "BTU/Minute (thermochemical) (BTU/min)" },
  { value: "BTU/s", name: "BTU/Second (international) (BTU/s)" },
  { value: "BTU/s(T)", name: "BTU/Second (thermochemical) (BTU/s)" },
  { value: "cal/h", name: "Calorie/Hour (international) (cal/h)" },
  { value: "cal/h(T)", name: "Calorie/Hour (thermochemical) (cal/h)" },
  { value: "cal/min", name: "Calorie/Minute (international) (cal/min)" },
  { value: "cal/min(T)", name: "Calorie/Minute (thermochemical) (cal/min)" },
  { value: "cal/s", name: "Calorie/Second (international) (cal/s)" },
  { value: "cal/s(T)", name: "Calorie/Second (thermochemical) (cal/s)" },
  { value: "cJ/s", name: "Centijoule/Second (cJ/s)" },
  { value: "cW", name: "Centiwatt (cW)" },
  { value: "dJ/s", name: "Decijoule/Second (dJ/s)" },
  { value: "dW", name: "Deciwatt (dW)" },
  { value: "daJ/s", name: "Dekajoule/Second (daJ/s)" },
  { value: "daW", name: "Dekawatt (daW)" },
  { value: "erg/s", name: "Erg/Second (erg/s)" },
  { value: "EJ/s", name: "Exajoule/Second (EJ/s)" },
  { value: "EW", name: "Exawatt (EW)" },
  { value: "fJ/s", name: "Femtojoule/Second (fJ/s)" },
  { value: "fW", name: "Femtowatt (fW)" },
  { value: "GJ/s", name: "Gigajoule/Second (GJ/s)" },
  { value: "hJ/s", name: "Hectojoule/Second (hJ/s)" },
  { value: "hW", name: "Hectowatt (hW)" },
  { value: "hp", name: "Horsepower (hp)" },
  { value: "hp(boiler)", name: "Horsepower (boiler) (hp)" },
  { value: "hp(electric)", name: "Horsepower (electric) (hp)" },
  { value: "hp(uk)", name: "Horsepower (UK) (hp)" },
  { value: "hp(water)", name: "Horsepower (water) (hp)" },
  { value: "J/h", name: "Joule/Hour (J/h)" },
  { value: "J/min", name: "Joule/Minute (J/min)" },
  { value: "kcal/h(T)", name: "Kilocalorie/Hour (thermochemical) (kcal/h)" },
  { value: "kcal/h", name: "Kilocalorie/Hour (international) (kcal/h)" },
  { value: "kcal/min", name: "Kilocalorie/Minute (international) (kcal/min)" },
  {
    value: "kcal/min(T)",
    name: "Kilocalorie/Minute (thermochemical) (kcal/min)",
  },
  { value: "kcal/s(T)", name: "Kilocalorie/Second (thermochemical) (kcal/s)" },
  { value: "kcal/s", name: "Kilocalorie/Second (international) (kcal/s)" },
  { value: "kJ/h", name: "Kilojoule/Hour (kJ/h)" },
  { value: "kJ/min", name: "Kilojoule/Minute (kJ/min)" },
  { value: "kJ/s", name: "Kilojoule/Second (kJ/s)" },
  { value: "MBH", name: "MBH" },
  { value: "MBTU/h", name: "MBTU/Hour (MBTU/h)" },
  { value: "MJ/s", name: "Megajoule/Second (MJ/s)" },
  { value: "MW", name: "Megawatt (MW)" },
  { value: "µJ/s", name: "Microjoule/Second (µJ/s)" },
  { value: "µW", name: "Microwatt (µW)" },
  { value: "mJ/s", name: "Millijoule/Second (mJ/s)" },
  { value: "mW", name: "Milliwatt (mW)" },
  { value: "nJ/s", name: "Nanojoule/Second (nJ/s)" },
  { value: "nW", name: "Nanowatt (nW)" },
  { value: "PJ/s", name: "Petajoule/Second (PJ/s)" },
  { value: "PW", name: "Petawatt (PW)" },
  { value: "ps", name: "Pferdest (ps)" },
  { value: "pJ/s", name: "Picojoule/Second (pJ/s)" },
  { value: "pW", name: "Picowatt (pW)" },
  { value: "lb∙ft/min", name: "Pound-Foot/Minute (lb∙ft/min)" },
  { value: "lb∙ft/s", name: "Pound-Foot/Second (lb∙ft/s)" },
  { value: "TJ/s", name: "Terajoule/Second (TJ/s)" },
  { value: "TW", name: "Terawatt (TW)" },
  { value: "t", name: "Ton (refrigeration) (t)" },
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
  selectFrom.value = "GW";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "kW";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInKilowatt = 0;
  let output = 0;

  switch (from) {
    case "kW":
      inputInKilowatt = input;
      break;
    case "GW":
      inputInKilowatt = input * 1000000;
      break;
    case "hp":
      inputInKilowatt = input * 0.7355;
      break;
    case "J/s":
      inputInKilowatt = input * 0.001;
      break;
    case "J/h":
      inputInKilowatt = input * 2.777777777e-7;
      break;
    case "J/min":
      inputInKilowatt = input * 0.0000166667;
      break;
    case "W":
      inputInKilowatt = input * 0.001;
      break;
    case "lb∙ft/h":
      inputInKilowatt = input * 3.766160967e-7;
      break;
    case "aJ/s":
      inputInKilowatt = input * 1e-21;
      break;
    case "aW":
      inputInKilowatt = input * 1e-21;
      break;
    case "BTU/h":
      inputInKilowatt = input * 0.00029;
      break;
    case "BTU/h(T)":
      inputInKilowatt = input * 0.00029;
      break;
    case "BTU/min":
      inputInKilowatt = input * 0.01758;
      break;
    case "BTU/min(T)":
      inputInKilowatt = input * 0.01757;
      break;
    case "BTU/s":
      inputInKilowatt = input * 1.05506;
      break;
    case "BTU/s(T)":
      inputInKilowatt = input * 1.05435;
      break;
    case "cal/h":
      inputInKilowatt = input * 0.000001163;
      break;
    case "cal/h(T)":
      inputInKilowatt = input * 0.0000011622;
      break;
    case "cal/min":
      inputInKilowatt = input * 0.00007;
      break;
    case "cal/min(T)":
      inputInKilowatt = input * 0.00006978;
      break;
    case "cal/s":
      inputInKilowatt = input * 0.0041868;
      break;
    case "cal/s(T)":
      inputInKilowatt = input * 0.00418;
      break;
    case "cJ/s":
      inputInKilowatt = input * 0.00001;
      break;
    case "cW":
      inputInKilowatt = input * 0.00001;
      break;
    case "dJ/s":
      inputInKilowatt = input * 0.0001;
      break;
    case "dW":
      inputInKilowatt = input * 0.0001;
      break;
    case "daJ/s":
      inputInKilowatt = input * 0.01;
      break;
    case "daW":
      inputInKilowatt = input * 0.01;
      break;
    case "erg/s":
      inputInKilowatt = input * 9.999999999e-11;
      break;
    case "EJ/s":
      inputInKilowatt = input * 1000000000000000;
      break;
    case "EW":
      inputInKilowatt = input * 1000000000000000;
      break;
    case "fJ/s":
      inputInKilowatt = input * 1e-18;
      break;
    case "fW":
      inputInKilowatt = input * 1e-18;
      break;
    case "GJ/s":
      inputInKilowatt = input * 1000000;
      break;
    case "hJ/s":
      inputInKilowatt = input * 0.1;
      break;
    case "hW":
      inputInKilowatt = input * 0.1;
      break;
    case "MBH":
      inputInKilowatt = input * 0.29307;
      break;
    case "MBTU/h":
      inputInKilowatt = input * 0.29307;
      break;
    case "MJ/s":
      inputInKilowatt = input * 1000;
      break;
    case "MW":
      inputInKilowatt = input * 1000;
      break;
    case "hp":
      inputInKilowatt = input * 0.7457;
      break;
    case "hp(boiler)":
      inputInKilowatt = input * 9.80971;
      break;
    case "hp(electric)":
      inputInKilowatt = input * 0.746;
      break;
    case "hp(uk)":
      inputInKilowatt = input * 0.7457;
      break;
    case "hp(water)":
      inputInKilowatt = input * 0.74604;
      break;
    case "µJ/s":
      inputInKilowatt = input * 1e-9;
      break;
    case "µW":
      inputInKilowatt = input * 1e-9;
      break;
    case "mJ/s":
      inputInKilowatt = input * 0.000001;
      break;
    case "mW":
      inputInKilowatt = input * 0.000001;
      break;
    case "nJ/s":
      inputInKilowatt = input * 1e-12;
      break;
    case "nW":
      inputInKilowatt = input * 1e-12;
      break;
    case "PJ/s":
      inputInKilowatt = input * 1000000000000;
      break;
    case "PW":
      inputInKilowatt = input * 1000000000000;
      break;
    case "ps":
      inputInKilowatt = input * 0.7355;
      break;
    case "pJ/s":
      inputInKilowatt = input * 1e-15;
      break;
    case "pW":
      inputInKilowatt = input * 1e-15;
      break;
    case "lb∙ft/min":
      inputInKilowatt = input * 0.00002;
      break;
    case "lb∙ft/s":
      inputInKilowatt = input * 0.00136;
      break;
    case "TW":
      inputInKilowatt = input * 1e9;
      break;
    case "W":
      inputInKilowatt = input * 1000;
      break;
    case "kcal/h":
      inputInKilowatt = input * 0.00116;
      break;
    case "kcal/h(T)":
      inputInKilowatt = input * 0.00116;
      break;
    case "kcal/min":
      inputInKilowatt = input * 0.06978;
      break;
    case "kcal/min(T)":
      inputInKilowatt = input * 0.06973;
      break;
    case "kcal/s(T)":
      inputInKilowatt = input * 4.184;
      break;
    case "kcal/s":
      inputInKilowatt = input * 4.1868;
      break;
    case "kJ/h":
      inputInKilowatt = input * 0.00028;
      break;
    case "kJ/min":
      inputInKilowatt = input * 0.01667;
      break;
    case "kJ/s":
      inputInKilowatt = input * 1;
      break;
    case "TJ/s":
      inputInKilowatt = input * 1000000000;
      break;
    case "t":
      inputInKilowatt = input * 3.51685;
      break;
    default:
      inputInKilowatt = input;
      break;
  }
  switch (to) {
    case "kW":
      output = inputInKilowatt;
      break;
    case "GW":
      output = inputInKilowatt / 1000000;
      break;
    case "hp":
      output = inputInKilowatt / 0.7355;
      break;
    case "J/s":
      output = inputInKilowatt / 0.001;
      break;
    case "J/min":
      output = inputInKilowatt / 0.0000166667;
      break;
    case "J/h":
      output = inputInKilowatt / 2.777777777e-7;
      break;
    case "W":
      output = inputInKilowatt / 0.001;
      break;
    case "lb∙ft/h":
      output = inputInKilowatt / 3.766160967e-7;
      break;
    case "aJ/s":
      output = inputInKilowatt / 1e-21;
      break;
    case "aW":
      output = inputInKilowatt / 1e-21;
      break;
    case "BTU/h":
      output = inputInKilowatt / 0.00029;
      break;
    case "BTU/h(T)":
      output = inputInKilowatt / 0.00029;
      break;
    case "BTU/min":
      output = inputInKilowatt / 0.01758;
      break;
    case "BTU/min(T)":
      output = inputInKilowatt / 0.01757;
      break;
    case "BTU/s":
      output = inputInKilowatt / 1.05506;
      break;
    case "BTU/s(T)":
      output = inputInKilowatt / 1.05435;
      break;
    case "cal/h":
      output = inputInKilowatt / 0.000001163;
      break;
    case "cal/h(T)":
      output = inputInKilowatt / 0.0000011622;
      break;
    case "cal/min":
      output = inputInKilowatt / 0.00006978;
      break;
    case "cal/min(T)":
      output = inputInKilowatt / 0.00007;
      break;
    case "cal/s":
      output = inputInKilowatt / 0.0041868;
      break;
    case "cal/s(T)":
      output = inputInKilowatt / 0.0042;
      break;
    case "cJ/s":
      output = inputInKilowatt / 0.00001;
      break;
    case "cW":
      output = inputInKilowatt / 0.00001;
      break;
    case "dJ/s":
      output = inputInKilowatt / 0.0001;
      break;
    case "dW":
      output = inputInKilowatt / 0.0001;
      break;
    case "daJ/s":
      output = inputInKilowatt / 0.01;
      break;
    case "daW":
      output = inputInKilowatt / 0.01;
      break;
    case "erg/s":
      output = inputInKilowatt / 9.999999999e-11;
      break;
    case "EJ/s":
      output = inputInKilowatt / 1000000000000000;
      break;
    case "EW":
      output = inputInKilowatt / 1000000000000000;
      break;
    case "fJ/s":
      output = inputInKilowatt / 1e-18;
      break;
    case "fW":
      output = inputInKilowatt / 1e-18;
      break;
    case "GJ/s":
      output = inputInKilowatt / 1000000;
      break;
    case "hJ/s":
      output = inputInKilowatt / 0.1;
      break;
    case "hW":
      output = inputInKilowatt / 0.1;
      break;
    case "MBH":
      output = inputInKilowatt / 0.29307;
      break;
    case "MBTU/h":
      output = inputInKilowatt / 0.29307;
      break;
    case "MJ/s":
      output = inputInKilowatt / 1000;
      break;
    case "MW":
      output = inputInKilowatt / 1000;
      break;
    case "hp":
      output = inputInKilowatt / 0.7457;
      break;
    case "hp(boiler)":
      output = inputInKilowatt / 9.80971;
      break;
    case "hp(electric)":
      output = inputInKilowatt / 0.746;
      break;
    case "hp(uk)":
      output = inputInKilowatt / 0.7457;
      break;
    case "hp(water)":
      output = inputInKilowatt / 0.74604;
      break;
    case "µJ/s":
      output = inputInKilowatt / 1e-9;
      break;
    case "µW":
      output = inputInKilowatt / 1e-9;
      break;
    case "mJ/s":
      output = inputInKilowatt / 0.000001;
      break;
    case "mW":
      output = inputInKilowatt / 0.000001;
      break;
    case "nJ/s":
      output = inputInKilowatt / 1e-12;
      break;
    case "nW":
      output = inputInKilowatt / 1e-12;
      break;
    case "PJ/s":
      output = inputInKilowatt / 1000000000000;
      break;
    case "PW":
      output = inputInKilowatt / 1e-15;
      break;
    case "ps":
      output = inputInKilowatt / 0.7355;
      break;
    case "pJ/s":
      output = inputInKilowatt / 1e-15;
      break;
    case "pW":
      output = inputInKilowatt / 1e12;
      break;
    case "lb∙ft/min":
      output = inputInKilowatt / 0.00002;
      break;
    case "lb∙ft/s":
      output = inputInKilowatt / 0.00136;
      break;
    case "TW":
      output = inputInKilowatt / 1000000000;
      break;
    case "W":
      output = inputInKilowatt / 1000000000;
      break;
    case "kcal/h":
      output = inputInKilowatt / 0.00116;
      break;
    case "kcal/h(T)":
      output = inputInKilowatt / 0.00116;
      break;
    case "kcal/min":
      output = inputInKilowatt / 0.06978;
      break;
    case "kcal/min(T)":
      output = inputInKilowatt / 0.06973;
      break;
    case "kcal/s":
      output = inputInKilowatt / 4.1868;
      break;
    case "kcal/s(T)":
      output = inputInKilowatt / 4.1868;
      break;
    case "kJ/h":
      output = inputInKilowatt / 0.00028;
      break;
    case "kJ/min":
      output = inputInKilowatt / 0.01667;
      break;
    case "kJ/s":
      output = inputInKilowatt / 1;
      break;
    case "TJ/s":
      output = inputInKilowatt / 1000000000;
      break;

    case "t":
      output = inputInKilowatt / 3.51685;
      break;
    default:
      output = inputInKilowatt;
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

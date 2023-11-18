let area = [
  { value: "J/cm", name: "Joule/Centimeter (J/cm)" },
  { value: "kgf", name: "Kilogram Force (kgf)" },
  { value: "N", name: "Newton (N)" },
  { value: "lbf", name: "Pound Force (lbf)" },
  { value: "aN", name: "Attonewton (aN)" },
  { value: "cN", name: "Centinewton (cN)" },
  { value: "dN", name: "Decinewton (dN)" },
  { value: "daN", name: "Dekanewton (daN)" },
  { value: "dyn", name: "Dyne (dyn)" },
  { value: "EN", name: "Exanewton (EN)" },
  { value: "fN", name: "Femtonewton (fN)" },
  { value: "GN", name: "Giganewton (GN)" },
  { value: "gf", name: "Gram Force (gf)" },
  { value: "HN", name: "Hectonewton (HN)" },
  { value: "J/m", name: "Joule/Meter (J/m)" },
  { value: "kN", name: "Kilonewton (kN)" },
  { value: "(kipf)", name: "Kip Force(kipf)" },
  { value: "MN", name: "Meganewton (MN)" },
  { value: "µN", name: "Micronewton (µN)" },
  { value: "mN", name: "Millinewton (mN)" },
  { value: "nN", name: "Nanonewton (nN)" },
  { value: "ozf", name: "Ounce Force (ozf)" },
  { value: "PN", name: "Petanewton (PN)" },
  { value: "pn", name: "Piconewton (pN)" },
  { value: "pdl", name: "Poundal (pdl)" },
  { value: "TN", name: "Teranewton (TN)" },
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
  selectFrom.value = "aN";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "kgf";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInKilogramForce = 0;
  let output = 0;

  switch (from) {
    case "J/cm":
      inputInKilogramForce = input * 0.00102;
      break;
    case "kgf":
      inputInKilogramForce = input;
      break;
    case "N":
      inputInKilogramForce = input * 0.10197;
      break;
    case "lbf":
      inputInKilogramForce = input * 0.45359;
      break;
    case "aN":
      inputInKilogramForce = input * 1.019716212e-19;
      break;
    case "cN":
      inputInKilogramForce = input * 0.00102;
      break;
    case "dN":
      inputInKilogramForce = input * 0.0102;
      break;
    case "daN":
      inputInKilogramForce = input * 1.01972;
      break;
    case "dyn":
      inputInKilogramForce = input * 1.02e-6;
      break;
    case "EN":
      inputInKilogramForce = input * 101971621297790000;
      break;
    case "fN":
      inputInKilogramForce = input * 1.019716212e-16;
      break;
    case "GN":
      inputInKilogramForce = input * 101971621.29792;
      break;
    case "gf":
      inputInKilogramForce = input * 0.001;
      break;
    case "HN":
      inputInKilogramForce = input * 10.19716;
      break;
    case "J/m":
      inputInKilogramForce = input * 0.10197;
      break;
    case "kN":
      inputInKilogramForce = input * 101.97;
      break;
    case "(kipf)":
      inputInKilogramForce = input * 453.59;
      break;
    case "MN":
      inputInKilogramForce = input * 101971.6213;
      break;
    case "µN":
      inputInKilogramForce = input * 1.019716212e-7;
      break;
    case "mN":
      inputInKilogramForce = input * 0.0001;
      break;
    case "nN":
      inputInKilogramForce = input * 1.019716212e-10;
      break;
    case "ozf":
      inputInKilogramForce = input * 0.02835;
      break;
    case "PN":
      inputInKilogramForce = input * 101971621297923.5;
      break;
    case "pn":
      inputInKilogramForce = input * 1.019716212e-13;
      break;
    case "pdl":
      inputInKilogramForce = input * 0.0141;
      break;
    case "TN":
      inputInKilogramForce = input * 101971621297.9235;
      break;
    default:
      console.log("Invalid input unit");
  }

  // use a switch statement to convert the value in Kilogram Force to the desired output unit
  switch (to) {
    case "kgf":
      output = inputInKilogramForce;
      break;
    case "J/cm":
      output = inputInKilogramForce / 0.00102;
      break;
    case "N":
      output = inputInKilogramForce / 0.10197;
      break;
    case "lbf":
      output = inputInKilogramForce / 0.45359;
      break;
    case "aN":
      output = inputInKilogramForce / 1.019716212e-19;
      break;
    case "cN":
      output = inputInKilogramForce / 0.00102;
      break;
    case "dN":
      output = inputInKilogramForce / 0.0102;
      break;
    case "daN":
      output = inputInKilogramForce / 1.01972;
      break;
    case "dyn":
      output = inputInKilogramForce / 1.02e-6;
      break;
    case "EN":
      output = inputInKilogramForce / 101971621297790000;
      break;
    case "fN":
      output = inputInKilogramForce / 1.019716212e-16;
      break;
    case "GN":
      output = inputInKilogramForce / 101971621.29792;
      break;
    case "gf":
      output = inputInKilogramForce / 0.001;
      break;
    case "HN":
      output = inputInKilogramForce / 10.19716;
      break;
    case "J/m":
      output = inputInKilogramForce / 0.10197;
      break;
    case "kN":
      output = inputInKilogramForce / 101.97;
      break;
    case "(kipf)":
      output = inputInKilogramForce / 453.59;
      break;
    case "MN":
      output = inputInKilogramForce / 101971.6213;
      break;
    case "µN":
      output = inputInKilogramForce / 1.019716212e-7;
      break;
    case "mN":
      output = inputInKilogramForce / 0.0001;
      break;
    case "nN":
      output = inputInKilogramForce / 1.019716212e-10;
      break;
    case "ozf":
      output = inputInKilogramForce / 0.02835;
      break;
    case "PN":
      output = inputInKilogramForce / 101971621297923.5;
      break;
    case "pN":
      output = inputInKilogramForce / 1.019716212e-13;
      break;
    case "pdl":
      output = inputInKilogramForce / 0.0141;
      break;
    case "TN":
      output = inputInKilogramForce / 101971621297.9235;
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

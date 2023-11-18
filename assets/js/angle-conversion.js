let area = [
  { value: "°", name: "Degree" },
  { value: "gon", name: "Grad" },
  { value: "rad", name: "Radian" },
  { value: "circle", name: "Circle" },
  { value: "mil", name: "Mil" },
  { value: "min", name: "Minute" },
  { value: "octant", name: "Octant" },
  { value: "quadrant", name: "Quadrant" },
  { value: "rev", name: "Revolution" },
  { value: "right-angle", name: "Right Angle" },
  { value: "s", name: "Second" },
  { value: "sextant", name: "Sextant" },
  { value: "sign", name: "Sign" },
  { value: "turn", name: "Turn" },
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
  selectFrom.value = "gon";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "rad";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInDegree = 0;
  let output = 0;

  // creating all the inputs units to one unit first

  // Convert from base unit to output unit

  // Display the result in the result section
  switch (from) {
    case "°":
      inputInDegree = input;
      break;
    case "gon":
      inputInDegree = input * 0.9;
      break;
    case "rad":
      inputInDegree = input * (180 / Math.PI);
      break;
    case "circle":
      inputInDegree = input * 360;
      break;
    case "mil":
      inputInDegree = input * 0.05625;
      break;
    case "min":
      inputInDegree = input / 60;
      break;
    case "octant":
      inputInDegree = input * 45;
      break;
    case "quadrant":
      inputInDegree = input * 90;
      break;
    case "rev":
      inputInDegree = input * 360;
      break;
    case "right-angle":
      inputInDegree = 90;
      break;
    case "s":
      inputInDegree = input / 3600;
      break;
    case "sextant":
      inputInDegree = input * 60;
      break;
    case "sign":
      inputInDegree = input * 30;
      break;
    case "turn":
      inputInDegree = input * 360;
      break;
    default:
      console.log("Invalid input unit.");
      break;
  }

  // Convert from square meters to output unit
  switch (to) {
    case "°":
      output = inputInDegree;
      break;
    case "gon":
      output = inputInDegree / 0.9;
      break;
    case "rad":
      output = inputInDegree * (Math.PI / 180);
      break;
    case "circle":
      output = inputInDegree / 360;
      break;
    case "mil":
      output = inputInDegree / 0.05625;
      break;
    case "min":
      output = inputInDegree * 60;
      break;
    case "octant":
      output = inputInDegree / 45;
      break;
    case "quadrant":
      output = inputInDegree / 90;
      break;
    case "rev":
      output = inputInDegree / 360;
      break;
    case "right-angle":
      output = 1;
      break;
    case "s":
      output = inputInDegree * 3600;
      break;
    case "sextant":
      output = inputInDegree / 60;
      break;
    case "sign":
      output = inputInDegree / 30;
      break;
    case "turn":
      output = inputInDegree / 360;
      break;
    default:
      console.log("Invalid output unit.");
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

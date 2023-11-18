let area = [
  { value: "ft/min", name: "Foot/Minute" },
  { value: "ft/s", name: "Foot/second" },
  { value: "km/h", name: "Kilometer/hour" },
  { value: "km/s", name: "Kilometer/second" },
  { value: "knot", name: "Knot" },
  { value: "m/s", name: "Meter/second" },
  { value: "mph", name: "Mile/hour" },
  { value: "cm/h", name: "Centimeter/hour" },
  { value: "cm/min", name: "Centimeter/minute" },
  { value: "cm/s", name: "Centimeter/second" },
  { value: "ft/h", name: "Foot/hour" },
  { value: "km/min", name: "Kilometer/minute" },
  { value: "c", name: "Speed of light" },
  { value: "mach", name: "Mach (at sea level)" },
  { value: "m/h", name: "Meter/hour" },
  { value: "m/min", name: "Meter/minute" },
  { value: "mi/min", name: "Mile/minute" },
  { value: "mi/s", name: "Mile/second" },
  { value: "yd/h", name: "Yard/hour" },
  { value: "yd/min", name: "Yard/minute" },
  { value: "yd/s", name: "Yard/second" },
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
  selectFrom.value = "ft/min";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "km/s";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInMetersPerSecond = 0;
  let output = 0;

  // Convert input to Meter per second
  switch (from) {
    case "ft/min":
      inputInMetersPerSecond = input / 196.85;
      break;
    case "ft/s":
      inputInMetersPerSecond = input / 3.2808;
      break;
    case "km/h":
      inputInMetersPerSecond = input / 3.6;
      break;
    case "km/s":
      inputInMetersPerSecond = input * 1000;
      break;
    case "knot":
      inputInMetersPerSecond = input / 1.9438;
      break;
    case "m/s":
      inputInMetersPerSecond = input;
      break;
    case "mph":
      inputInMetersPerSecond = input / 2.2369;
      break;
    case "cm/h":
      inputInMetersPerSecond = input / 36000;
      break;
    case "cm/min":
      inputInMetersPerSecond = input / 600;
      break;
    case "cm/s":
      inputInMetersPerSecond = input / 100;
      break;
    case "ft/h":
      inputInMetersPerSecond = input / 11811;
      break;
    case "km/min":
      inputInMetersPerSecond = input / 60;
      break;
    case "c":
      inputInMetersPerSecond = 299792458;
      break;
    case "mach":
      inputInMetersPerSecond = input * 340.29;
      break;
    case "m/h":
      inputInMetersPerSecond = input / 3600;
      break;
    case "m/min":
      inputInMetersPerSecond = input / 60;
      break;
    case "mi/min":
      inputInMetersPerSecond = input / 26.8224;
      break;
    case "mi/s":
      inputInMetersPerSecond = input / 1.4667;
      break;
    case "yd/h":
      inputInMetersPerSecond = input / 3937;
      break;
    case "yd/min":
      inputInMetersPerSecond = input / 65.6168;
      break;
    case "yd/s":
      inputInMetersPerSecond = input / 1.0936;
      break;
  }

  switch (to) {
    case "ft/min":
      output = inputInMetersPerSecond * 196.85;
      break;
    case "ft/s":
      output = inputInMetersPerSecond * 3.2808;
      break;
    case "km/h":
      output = inputInMetersPerSecond * 3.6;
      break;
    case "km/s":
      output = inputInMetersPerSecond / 1000;
      break;
    case "knot":
      output = inputInMetersPerSecond * 1.9438;
      break;
    case "m/s":
      output = inputInMetersPerSecond;
      break;
    case "mph":
      output = inputInMetersPerSecond * 2.2369;
      break;
    case "cm/h":
      output = inputInMetersPerSecond * 36000;
      break;
    case "cm/min":
      output = inputInMetersPerSecond * 600;
      break;
    case "cm/s":
      output = inputInMetersPerSecond * 100;
      break;
    case "ft/h":
      output = inputInMetersPerSecond * 11811;
      break;
    case "km/min":
      output = inputInMetersPerSecond * 60;
      break;
    case "c":
      output = 299792458;
      break;
    case "mach":
      output = inputInMetersPerSecond / 340.29;
      break;
    case "machsi":
      output = inputInMetersPerSecond / 295.05;
      break;
    case "m/h":
      output = inputInMetersPerSecond * 3600;
      break;
    case "m/min":
      output = inputInMetersPerSecond * 60;
      break;
    case "mi/min":
      output = inputInMetersPerSecond * 26.8224;
      break;
    case "mi/s":
      output = inputInMetersPerSecond * 1.4667;
      break;
    case "yd/h":
      output = inputInMetersPerSecond * 3937;
      break;
    case "yd/min":
      output = inputInMetersPerSecond * 65.6168;
      break;
    case "yd/s":
      output = inputInMetersPerSecond * 1.0936;
      break;
  }

  result.innerHTML = `${input} ${from} = ${output.toFixed(6)} ${to}`;
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

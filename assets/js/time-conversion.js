let area = [
  { value: "d", name: "Day" },
  { value: "h", name: "Hour" },
  { value: "µs", name: "Microsecond (µs)" },
  { value: "ms", name: "Millisecond (ms)" },
  { value: "min", name: "Minute (min)" },
  { value: "m", name: "Month" },
  { value: "s", name: "Second (s)" },
  { value: "w", name: "Week" },
  { value: "y", name: "Year" },
  { value: "as", name: "Attosecond (as)" },
  { value: "century", name: "Century" },
  { value: "decade", name: "Decade" },
  { value: "fs", name: "Femtosecond (fs)" },
  { value: "fortnight", name: "Fortnight" },
  { value: "leap-year", name: "Leap Year" },
  { value: "mean-year", name: "Mean Year" },
  { value: "millennium", name: "Millennium" },
  { value: "ns", name: "Nanosecond" },
  { value: "novennial", name: "Novennial" },
  { value: "octennial", name: "Octennial" },
  { value: "ps", name: "Picosecond (ps)" },
  { value: "quindecennial", name: "Quindecennial" },
  { value: "quinquennial", name: "Quinquennial" },
  { value: "septennial", name: "Septennial" },
  { value: "shake", name: "Shake" },
  { value: "sidereal-day", name: "Sidereal Day" },
  { value: "sidereal-hour", name: "Sidereal Hour" },
  { value: "sidereal-year", name: "Sidereal Year" },
  { value: "synodic-month", name: "Synodic Month" },
  { value: "tropical-year", name: "Tropical Year" },
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
  selectFrom.value = "d";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "min";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInMinute = 0;
  let output = 0;

  switch (from) {
    case "min":
      inputInMinute = input;
      break;
    case "d":
      inputInMinute = input * 1440;
      break;
    case "h":
      inputInMinute = input * 60;
      break;
    case "µs":
      inputInMinute = input * 1.666666666e-8;
      break;
    case "ms":
      inputInMinute = input * 0.00002;
      break;
    case "m":
      inputInMinute = input * 43200;
      break;
    case "s":
      inputInMinute = input * 0.01667;
      break;
    case "w":
      inputInMinute = input * 10080;
      break;
    case "y":
      inputInMinute = input * 525600.00001;
      break;
    case "as":
      inputInMinute = input * 1.666666666e-20;
      break;
    case "century":
      inputInMinute = input * 52560000.00071;
      break;
    case "decade":
      inputInMinute = input * 5256000.00007;
      break;
    case "fs":
      inputInMinute = input * 1.666666666e-17;
      break;
    case "fortnight":
      inputInMinute = input * 20160;
      break;
    case "leap-year":
      inputInMinute = input * 527040;
      break;
    case "mean-year":
      inputInMinute = input * 525960;
      break;
    case "millennium":
      inputInMinute = input * 527040;
      break;
    case "ns":
      inputInMinute = input * 1.666666666e-11;
      break;
    case "novennial":
      inputInMinute = input * 4730400;
      break;
    case "octennial":
      inputInMinute = input * 4204800;
      break;
    case "ps":
      inputInMinute = input * 1.666666666e-14;
      break;
    case "quindecennial":
      inputInMinute = input * 7884000;
      break;
    case "quinquennial":
      inputInMinute = input * 2628000.00004;
      break;
    case "septennial":
      inputInMinute = input * 3679200.00005;
      break;
    case "shake":
      inputInMinute = input * 1.666666666e-10;
      break;
    case "sidereal-day":
      inputInMinute = input * 1436.06818;
      break;
    case "sidereal-hour":
      inputInMinute = input * 59.83617;
      break;
    case "sidereal-year":
      inputInMinute = input * 525969.1584;
      break;
    case "synodic-month":
      inputInMinute = input * 42524.064;
      break;
    case "tropical-year":
      inputInMinute = input * 525948.768;
      break;
    default:
      inputInMinute = "Invalid time unit";
  }

  switch (to) {
    case "min":
      output = inputInMinute;
      break;
    case "d":
      output = inputInMinute / 1440;
      break;
    case "h":
      output = inputInMinute / 60;
      break;
    case "µs":
      output = inputInMinute / 1.666666666e-8;
      break;
    case "ms":
      output = inputInMinute / 0.00002;
      break;
    case "m":
      output = inputInMinute / 43200;
      break;
    case "s":
      output = inputInMinute / 0.01667;
      break;
    case "w":
      output = inputInMinute / 10080;
      break;
    case "y":
      output = inputInMinute / 525600.00001;
      break;
    case "as":
      output = inputInMinute / 1.666666666e-20;
      break;
    case "century":
      output = inputInMinute / 52560000.00071;
      break;
    case "decade":
      output = inputInMinute / 5256000.00007;
      break;
    case "fs":
      output = inputInMinute / 1.666666666e-17;
      break;
    case "fortnight":
      output = inputInMinute / 20160;
      break;
    case "leap-year":
      output = inputInMinute / 527040;
      break;
    case "mean-year":
      output = inputInMinute / 525960;
      break;
    case "millennium":
      output = inputInMinute / 527040;
      break;
    case "ns":
      output = inputInMinute / 1.666666666e-11;
      break;
    case "novennial":
      output = inputInMinute / 4730400;
      break;
    case "octennial":
      output = inputInMinute / 4204800;
      break;
    case "ps":
      output = inputInMinute / 1.666666666e-14;
      break;
    case "quindecennial":
      output = inputInMinute / 7884000;
      break;
    case "quinquennial":
      output = inputInMinute / 2628000.00004;
      break;
    case "septennial":
      output = inputInMinute / 3679200.00005;
      break;
    case "shake":
      output = inputInMinute / 1.666666666e-10;
      break;
    case "sidereal-day":
      output = inputInMinute / 1436.06818;
      break;
    case "sidereal-hour":
      output = inputInMinute / 59.83617;
      break;
    case "sidereal-year":
      output = inputInMinute / 525969.1584;
      break;
    case "synodic-month":
      output = inputInMinute / 42524.064;
      break;
    case "tropical-year":
      output = inputInMinute / 525948.768;
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

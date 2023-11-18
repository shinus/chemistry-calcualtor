let area = [
  { value: "b", name: "Bit" },
  { value: "B", name: "Byte" },
  { value: "kbit", name: "Kilobit" },
  { value: "kB", name: "Kilobyte" },
  { value: "Mbit", name: "Megabit" },
  { value: "MB", name: "Megabyte" },
  { value: "Gbit", name: "Gigabit" },
  { value: "GB", name: "Gigabyte" },
  { value: "Tbit", name: "Terabit" },
  { value: "TB", name: "Terabyte" },
  { value: "Pbit", name: "Petabit" },
  { value: "PB", name: "Petabyte" },
  { value: "Ebit", name: "Exabit" },
  { value: "EB", name: "Exabyte" },
  { value: "block", name: "Block" },
  { value: "CD 74 min", name: "CD (74 Minute)" },
  { value: "CD 80 min", name: "CD (80 Minute)" },
  { value: "DW", name: "Double-Word" },
  { value: "DVD 1l/1s", name: "DVD (1 Layer, 1 Side)" },
  { value: "DVD 1l/2s", name: "DVD (1 Layer, 2 Sides)" },
  { value: "DVD 2l/1s", name: "DVD (2 Layers, 1 Side)" },
  { value: "DVD 2l/2s", name: "DVD (2 Layers, 2 Sides)" },
  { value: "EB (10^18 Bytes)", name: "Exabyte (10^18 Bytes)" },
  { value: "FDD 3.5 DD", name: 'Floppy Disk (3.5", DD)' },
  { value: "FDD 3.5 Hd", name: 'Floppy Disk (3.5", HD)' },
  { value: "FDD 3.5 ED", name: 'Floppy Disk (3.5", ED)' },
  { value: "FDD 5.25 DD", name: 'Floppy Disk (5.25", DD)' },
  { value: "FDD 5.25 Hd", name: 'Floppy Disk (5.25", HD)' },
  { value: "gB", name: "Gigabyte (10^9 Bytes)" },
  { value: "jaz 1gb", name: "Jaz 1GB" },
  { value: "jaz 2gb", name: "Jaz 2GB" },
  { value: "kB", name: "Kilobyte (10^3 Bytes)" },
  { value: "MB", name: "Megabyte (10^6 Bytes)" },
  { value: "nibble", name: "Nibble" },
  { value: "PB(10^15)", name: "Petabyte (10^15 Bytes)" },
  { value: "QW", name: "Quadruple-Word" },
  { value: "TB", name: "Terabyte (10^12 Bytes)" },
  { value: "W", name: "Word" },
  { value: "zip 100", name: "Zip 100" },
  { value: "zip 250", name: "Zip 250" },
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
  selectFrom.value = "GB";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "MB";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInKilobyte = 0;
  let output = 0;

  // creating all the inputs units to one unit first
  switch (from) {
    case "b":
      inputInKilobyte = input * 0.00012;
      break;
    case "B":
      inputInKilobyte = input * 0.00098;
      break;
    case "kbit":
      inputInKilobyte = input / 8;
      break;
    case "kB":
      inputInKilobyte = input;
      break;
    case "Mbit":
      inputInKilobyte = input * 125;
      break;
    case "MB":
      inputInKilobyte = input * 1024;
      break;
    case "Gbit":
      inputInKilobyte = input * 131072;
      break;
    case "GB":
      inputInKilobyte = input * 1048576;
      break;
    case "Tbit":
      inputInKilobyte = input * 134217728;
      break;
    case "TB":
      inputInKilobyte = input * 1073741824;
      break;
    case "Pbit":
      inputInKilobyte = input * 137438953472;
      break;
    case "PB":
      inputInKilobyte = input * 1099511627776;
      break;
    case "Ebit":
      inputInKilobyte = input * 140737488355328.53;
      break;
    case "EB":
      inputInKilobyte = input * 1125899906842622.2;
      break;
    case "block":
      inputInKilobyte = input * 0.5;
      break;
    case "CD 74 min":
      inputInKilobyte = input * 665096;
      break;
    case "CD 80 min":
      inputInKilobyte = input * 719022.70215;
      break;
    case "DW":
      inputInKilobyte = input * 0.00391;
      break;
    case "DVD 1l/1s":
      inputInKilobyte = input * 4928307.2;
      break;
    case "DVD 1l/2s":
      inputInKilobyte = input * 9856614.40032;
      break;
    case "DVD 2l/1s":
      inputInKilobyte = input * 8912896.00027;
      break;
    case "DVD 2l/2s":
      inputInKilobyte = input * 17825792;
      break;
    case "EB (10^18 Bytes)":
      inputInKilobyte = input * 976562499999999.9;
      break;
    case "FDD 3.5 Hd":
      inputInKilobyte = input * 1423.5;
      break;
    case "FDD 5.25 Hd":
      inputInKilobyte = input * 1185.5;
      break;
    case "FDD 5.25 DD":
      inputInKilobyte = input * 355.875;
      break;
    case "FDD 3.5 ED":
      inputInKilobyte = input * 2847;
      break;
    case "FDD 3.5 Hd":
      inputInKilobyte = input * 1423.5;
      break;
    case "FDD 3.5 DD":
      inputInKilobyte = input * 711.75;
      break;
    case "gB":
      inputInKilobyte = input * 976562.5;
      break;
    case "jaz 1gb":
      inputInKilobyte = input * 1048576;
      break;
    case "jaz 2gb":
      inputInKilobyte = input * 2097152;
      break;
    case "nibble":
      inputInKilobyte = input / 2000;
      break;
    case "PB(10^15)":
      inputInKilobyte = input * 976562500000;
      break;
    case "QW":
      inputInKilobyte = input / 125;
      break;
    case "TB":
      inputInKilobyte = input * 1000000000;
      break;
    case "W":
      inputInKilobyte = input * 0.001953125;
      break;
    case "zip 100":
      inputInKilobyte = input * 98078;
      break;
    case "zip 250":
      inputInKilobyte = input * 245195;
      break;
    default:
      alert("Invalid output unit");
      return;
  }
  // Convert from base unit to output unit
  switch (to) {
    case "b":
      output = inputInKilobyte / 0.00012;
      break;
    case "B":
      output = inputInKilobyte / 0.00098;
      break;
    case "kbit":
      output = inputInKilobyte * 8;
      break;
    case "kB":
      output = inputInKilobyte;
      break;
    case "Mbit":
      output = inputInKilobyte / 125;
      break;
    case "MB":
      output = inputInKilobyte / 1024;
      break;
    case "Gbit":
      output = inputInKilobyte / 131072;
      break;
    case "GB":
      output = inputInKilobyte / 1048576;
      break;
    case "Tbit":
      output = inputInKilobyte / 134217728;
      break;
    case "TB":
      output = inputInKilobyte / 1073741824;
      break;
    case "Pbit":
      output = inputInKilobyte / 137438953472;
      break;
    case "PB":
      output = inputInKilobyte / 1099511627776;
      break;
    case "Ebit":
      output = inputInKilobyte / 140737488355328.53;
      break;
    case "EB":
      output = inputInKilobyte / 1125899906842622.2;
      break;
    case "block":
      output = inputInKilobyte / 0.5;
      break;
    case "CD 74 min":
      output = inputInKilobyte / 665096;
      break;
    case "CD 80 min":
      output = inputInKilobyte / 719022.70215;
      break;
    case "DW":
      output = inputInKilobyte / 0.00391;
      break;
    case "DVD 1l/1s":
      output = inputInKilobyte / 4928307.2;
      break;
    case "DVD 1l/2s":
      output = inputInKilobyte / 9856614.40032;
      break;
    case "DVD 2l/1s":
      output = inputInKilobyte / 8912896.00027;
      break;
    case "DVD 2l/2s":
      output = inputInKilobyte / 17825792;
      break;
    case "EB (10^18 Bytes)":
      output = inputInKilobyte / 976562499999999.9;
      break;
    case "FDD 3.5 Hd":
      output = inputInKilobyte / 1423.5;
      break;
    case "FDD 5.25 Hd":
      output = inputInKilobyte / 1185.5;
      break;
    case "FDD 5.25 DD":
      output = inputInKilobyte * 0.0028099754;
      break;
    case "FDD 3.5 ED":
      output = inputInKilobyte / 2847;
      break;
    case "FDD 3.5 Hd":
      output = inputInKilobyte / 1423.5;
      break;
    case "FDD 3.5 DD":
      output = inputInKilobyte / 711.75;
      break;
    case "gB":
      output = inputInKilobyte / 976562.5;
      break;
    case "jaz 1gb":
      output = inputInKilobyte / 1048576;
      break;
    case "jaz 2gb":
      output = inputInKilobyte / 2097152;
      break;
    case "nibble":
      output = inputInKilobyte * 2000;
      break;
    case "PB(10^15)":
      output = inputInKilobyte / 976562500000;
      break;
    case "QW":
      output = inputInKilobyte * 125;
      break;
    case "TB":
      output = inputInKilobyte / 1000000000;
      break;
    case "W":
      output = inputInKilobyte / 0.001953125;
      break;
    case "zip 100":
      output = inputInKilobyte / 98078;
      break;
    case "zip 250":
      output = inputInKilobyte / 245195;
      break;
    default:
      alert("Invalid output unit");
      return;
  }
  // Display the result in the result section

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

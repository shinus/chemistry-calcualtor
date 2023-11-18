let area = [
  { value: "GHz", name: "Gigahertz (GHz)" },
  { value: "Hz", name: "Hertz (Hz)" },
  { value: "kHz", name: "Kilohertz (kHz)" },
  { value: "MHz", name: "Megahertz (MHz)" },
  { value: "mHz", name: "Millihertz (mHz)" },
  { value: "PHz", name: "Petahertz (PHz)" },
  { value: "THz", name: "Terahertz (THz)" },
  { value: "w.l. m", name: "Wavelength In Metres (w.l. m)" },
  { value: "aHz", name: "Attohertz (aHz)" },
  { value: "cHz", name: "Centihertz (cHz)" },
  { value: "cyc./s", name: "Cycle/Second (cyc./s)" },
  { value: "dHz", name: "Decihertz (dHz)" },
  { value: "daHz", name: "Dekahertz (daHz)" },
  { value: "EHz", name: "Exahertz (EHz)" },
  { value: "fHz", name: "Femtohertz (fHz)" },
  { value: "hHz", name: "Hectohertz (hHz)" },
  { value: "µHz", name: "Microhertz (µHz)" },
  { value: "nHz", name: "Nanohertz (nHz)" },
  { value: "pHz", name: "Picohertz (pHz)" },
  { value: "w.l. cm", name: "Wavelength In Centimetres (w.l. cm)" },
  { value: "w.l. dam", name: "Wavelength In Decametres (w.l. dam)" },
  { value: "w.l. dm", name: "Wavelength In Decimetres (w.l. dm)" },
  { value: "w.l. Em", name: "Wavelength In Exametres (w.l. Em)" },
  { value: "w.l. Gm", name: "Wavelength In Gigametres (w.l. Gm)" },
  { value: "w.l. Hm", name: "Wavelength In Hectometres (w.l. Hm)" },
  { value: "w.l. Km", name: "Wavelength In Kilometres (w.l. Km)" },
  { value: "w.l. Mm", name: "Wavelength In Megametres (w.l. Mm)" },
  { value: "w.l. µm", name: "Wavelength In Micrometres (w.l. µm)" },
  { value: "w.l. mm", name: "Wavelength In Millimetres (w.l. mm)" },
  { value: "w.l. Pm", name: "Wavelength In Petametres (w.l. Pm)" },
  { value: "w.l. Tm", name: "Wavelength In Terametres (w.l. Tm)" },
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
  selectFrom.value = "kHz";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "MHz";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInMegahertz = 0;
  let output = 0;
  switch (from) {
    case "GHz":
      inputInMegahertz = input * 1000;
      break;
    case "Hz":
      inputInMegahertz = input * 0.000001;
      break;
    case "kHz":
      inputInMegahertz = input * 0.001;
      break;
    case "MHz":
      inputInMegahertz = input;
      break;
    case "mHz":
      inputInMegahertz = input * 1e-9;
      break;
    case "PHz":
      inputInMegahertz = input * 1000000000;
      break;
    case "THz":
      inputInMegahertz = input * 1000000;
      break;
    case "w.l. m":
      inputInMegahertz = 299.79246 / input;
      break;
    case "aHz":
      inputInMegahertz = input * 1e-24;
      break;
    case "cHz":
      inputInMegahertz = input * 1e-8;
      break;
    case "cyc./s":
      inputInMegahertz = input * 0.000001;
      break;
    case "dHz":
      inputInMegahertz = input * 1e-7;
      break;
    case "daHz":
      inputInMegahertz = input * 0.00001;
      break;
    case "EHz":
      inputInMegahertz = input * 1000000000000;
      break;
    case "fHz":
      inputInMegahertz = input * 1e-21;
      break;
    case "hHz":
      inputInMegahertz = input * 0.0001;
      break;
    case "µHz":
      inputInMegahertz = input * 1e-12;
      break;
    case "nHz":
      inputInMegahertz = input * 1e-15;
      break;
    case "pHz":
      inputInMegahertz = input * 1e-18;
      break;
    case "w.l. cm":
      inputInMegahertz = 29979.2458 / input;
      break;
    case "w.l. dam":
      inputInMegahertz = 29.97925 / input;
      break;
    case "w.l. dm":
      inputInMegahertz = 2997.92458 / input;
      break;
    case "w.l. Em":
      inputInMegahertz = 2.99792458e-16 / input;
      break;
    case "w.l. Gm":
      inputInMegahertz = 2.99792458e-7 / input;
      break;
    case "w.l. Hm":
      inputInMegahertz = 2.99792 / input;
      break;
    case "w.l. Km":
      inputInMegahertz = 0.29979 / input;
      break;
    case "w.l. Mm":
      inputInMegahertz = 0.0003 / input;
      break;
    case "w.l. µm":
      inputInMegahertz = 299792458 / input;
      break;
    case "w.l. mm":
      inputInMegahertz = 299792.458 / input;
      break;
    case "w.l. Pm":
      inputInMegahertz = 2.99792458e-13 / input;
      break;
    case "w.l. Tm":
      inputInMegahertz = 2.997924579e-10 / input;
      break;
  }
  switch (to) {
    case "GHz":
      output = inputInMegahertz / 1000;
      break;
    case "Hz":
      output = inputInMegahertz / 0.000001;
      break;
    case "MHz":
      output = inputInMegahertz;
      break;
    case "kHz":
      output = input / 0.001;
      break;
    case "mHz":
      output = inputInMegahertz / 1e-9;
      break;
    case "PHz":
      output = inputInMegahertz / 1000000000;
      break;
    case "THz":
      output = inputInMegahertz / 1000000;
      break;
    case "w.l. m":
      inputInMegahertz = 299.79246 / input;
      break;
    case "aHz":
      output = inputInMegahertz / 1e-24;
      break;
    case "cHz":
      output = inputInMegahertz / 1e-8;
      break;
    case "cyc./s":
      output = inputInMegahertz / 0.000001;
      break;
    case "dHz":
      output = inputInMegahertz / 1e-7;
      break;
    case "daHz":
      output = inputInMegahertz / 0.00001;
      break;
    case "EHz":
      output = inputInMegahertz / 1000000000000;
      break;
    case "fHz":
      output = inputInMegahertz / 1e-21;
      break;
    case "hHz":
      output = inputInMegahertz / 0.0001;
      break;
    case "µHz":
      output = inputInMegahertz / 1e-12;
      break;
    case "nHz":
      output = inputInMegahertz / 1e-15;
      break;
    case "pHz":
      output = inputInMegahertz / 1e-18;
      break;
    case "w.l. cm":
      inputInMegahertz = 29979.2458 / input;
      break;
    case "w.l. dam":
      inputInMegahertz = 29.97925 / input;
      break;
    case "w.l. dm":
      inputInMegahertz = 2997.92458 / input;
      break;
    case "w.l. Em":
      inputInMegahertz = 2.99792458e-16 / input;
      break;
    case "w.l. Gm":
      inputInMegahertz = 2.99792458e-7 / input;
      break;
    case "w.l. Hm":
      inputInMegahertz = 2.99792 / input;
      break;
    case "w.l. Km":
      inputInMegahertz = 0.29979 / input;
      break;
    case "w.l. Mm":
      inputInMegahertz = 0.0003 / input;
      break;
    case "w.l. µm":
      inputInMegahertz = 299792458 / input;
      break;
    case "w.l. mm":
      inputInMegahertz = 299792.458 / input;
      break;
    case "w.l. Pm":
      inputInMegahertz = 2.99792458e-13 / input;
      break;
    case "w.l. Tm":
      inputInMegahertz = 2.997924579e-10 / input;
      break;
  }
  //   result.innerHTML = `${input} ${from} = ${output.toFixed(2)} ${to}`;
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

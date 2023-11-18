let area = [
  { value: "mm", name: "Millimeter" },
  { value: "cm", name: "Centimeter" },
  { value: "m", name: "Meter" },
  { value: "km", name: "Kilometer" },
  { value: "yd", name: "Yard" },
  { value: "ft", name: "Foot" },
  { value: "mi", name: "Mile" },
  { value: "nmi", name: "Nautical mile" },
  { value: "aln", name: "Aln" },
  { value: "A", name: "Angstrom" },
  { value: "arp", name: "Arpent" },
  { value: "AU", name: "Astronomical unit" },
  { value: "am", name: "Attometer" },
  { value: "barleycorn", name: "Barleycorn" },
  { value: "cal", name: "Caliber" },
  { value: "ch", name: "Chain" },
  { value: "cn", name: "Cloth nail" },
  { value: "cs", name: "Cloth span" },
  { value: "cbt", name: "Cubit" },
  { value: "dm", name: "Decimeter" },
  { value: "dam", name: "Decameter" },
  { value: "in", name: "Inch" },
  { value: "Em", name: "Exametre" },
  { value: "famn", name: "Famn" },
  { value: "fath", name: "Fathom" },
  { value: "fm", name: "Femtometer" },
  { value: "fermi", name: "Fermi" },
  { value: "finger", name: "Fingerbreadth" },
  { value: "fur", name: "Furlong" },
  { value: "Gm", name: "Gigameter" },
  { value: "hd", name: "Hand" },
  { value: "hdb", name: "Handbreadth" },
  { value: "hm", name: "Hectometer" },
  { value: "ken", name: "Ken" },
  { value: "kpc", name: "Kiloparsec" },
  { value: "lea", name: "League" },
  { value: "ly", name: "Light year" },
  { value: "li", name: "Link" },
  { value: "lc", name: "Long cubit" },
  { value: "lr", name: "Long reed" },
  { value: "Mm", name: "Megameter" },
  { value: "Mpc", name: "Megaparsec" },
  { value: "µm", name: "Micrometer" },
  { value: "mil", name: "Mil" },
  { value: "nm", name: "Nanometer" },
  { value: "pc", name: "Parsec" },
  { value: "per", name: "Perch" },
  { value: "Pm", name: "Petameter" },
  { value: "P", name: "Pica" },
  { value: "pm", name: "Picometer" },
  { value: "Pl", name: "Planck" },
  { value: "pt", name: "Point" },
  { value: "pol", name: "Pole" },
  { value: "rd", name: "Rod" },
  { value: "actus", name: "Roman actus" },
  { value: "archin", name: "Russian archin" },
  { value: "spnbl", name: "Span bilical" },
  { value: "Tm", name: "Terameter" },
  { value: "twip", name: "Twip" },
  { value: "vcc", name: "Vara castellana" },
  { value: "vnc", name: "Vara conuquera" },
  { value: "vt", name: "Vara de tarea" },
  { value: "yd", name: "Yard" },
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
  selectFrom.value = "km";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "m";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInMeters = 0;
  let output = 0;

  // Convert input to meters
  switch (from) {
    case "mm":
      inputInMeters = input / 1000;
      break;
    case "cm":
      inputInMeters = input / 100;
      break;
    case "m":
      inputInMeters = input;
      break;
    case "km":
      inputInMeters = input * 1000;
      break;
    case "in":
      inputInMeters = input / 39.37;
      break;
    case "ft":
      inputInMeters = input / 3.281;
      break;
    case "yd":
      inputInMeters = input / 1.094;
      break;
    case "mi":
      inputInMeters = input * 1609.344;
      break;
    case "nmi":
      inputInMeters = input * 1852;
      break;
    case "aln":
      inputInMeters = input * 0.593;
      break;
    case "A":
      inputInMeters = input * 1e-10;
      break;
    case "arp":
      inputInMeters = input * 58.4713;
      break;
    case "AU":
      inputInMeters = input * 149597870700;
      break;
    case "am":
      inputInMeters = input * 1e-18;
      break;
    case "barleycorn":
      inputInMeters = input * 0.00847;
      break;
    case "cal":
      inputInMeters = input * 0.0254;
      break;
    case "ch":
      inputInMeters = input * 20.1168;
      break;
    case "cn":
      inputInMeters = input * 0.0014224;
      break;
    case "cs":
      inputInMeters = input * 0.2286;
      break;
    case "cbt":
      inputInMeters = input * 0.4572;
      break;
    case "dm":
      inputInMeters = input / 10;
      break;
    case "dam":
      inputInMeters = input * 10;
      break;
    case "Em":
      inputInMeters = input * 1e18;
      break;
    case "famn":
      inputInMeters = input * 1.8288;
      break;
    case "fath":
      inputInMeters = input * 1.8288;
      break;
    case "fm":
      inputInMeters = input * 1e-15;
      break;
    case "fermi":
      inputInMeters = input * 1e-15;
      break;
    case "finger":
      inputInMeters = input * 0.022225;
      break;
    case "fur":
      inputInMeters = input * 201.168;
      break;
    case "Gm":
      inputInMeters = input * 1e9;
      break;
    case "hd":
      inputInMeters = input * 0.1016;
      break;
    case "hdb":
      inputInMeters = input * 0.022225;
      break;
    case "hm":
      inputInMeters = input * 100;
      break;
    case "ken":
      inputInMeters = input * 20.1168;
      break;
    case "kpc":
      inputInMeters = input * 30856775814671900;
      break;
    case "lea":
      inputInMeters = input * 4828.032;
      break;
    case "ly":
      inputInMeters = input * 9.461e15;
      break;
    case "li":
      inputInMeters = input * 0.201168;
      break;
    case "lc":
      inputInMeters = input * 0.5234;
      break;
    case "lr":
      inputInMeters = input * 3.927;
      break;
    case "Mm":
      inputInMeters = input * 1e6;
      break;
    case "Mpc":
      inputInMeters = input * 3.0856775814672e22;
      break;
    case "µm":
      inputInMeters = input / 1e6;
      break;
    case "mil":
      inputInMeters = input * 0.0000254;
      break;
    case "nm":
      inputInMeters = input / 1e9;
      break;
    case "pc":
      inputInMeters = input * 30856775814671900;
      break;
    case "per":
      inputInMeters = input * 5.0292;
      break;
    case "Pm":
      inputInMeters = input * 1e15;
      break;
    case "P":
      inputInMeters = input * 0.0042175;
      break;
    case "pm":
      inputInMeters = input / 1e12;
      break;
    case "Pl":
      inputInMeters = input * 1.6162e-35;
      break;
    case "pt":
      inputInMeters = input * 0.00035278;
      break;
    case "pol":
      inputInMeters = input * 5.0292;
      break;
    case "rd":
      inputInMeters = input * 5.0292;
      break;
    case "actus":
      inputInMeters = input * 1.4848;
      break;
    case "archin":
      inputInMeters = input * 0.7112;
      break;
    case "spnbl":
      inputInMeters = input * 2.1336;
      break;
    case "Tm":
      inputInMeters = input * 1e12;
      break;
    case "twip":
      inputInMeters = input * 0.00004445;
      break;
    case "vcc":
      inputInMeters = input * 0.835905;
      break;
    case "vnc":
      inputInMeters = input * 0.7073170731;
      break;
    case "vt":
      inputInMeters = input * 0.833333;
      break;
    default:
      inputInMeters = input;
      break;
  }

  switch (to) {
    case "mm":
      output = inputInMeters * 1000;
      break;
    case "cm":
      output = inputInMeters * 100;
      break;
    case "m":
      output = inputInMeters;
      break;
    case "km":
      output = inputInMeters / 1000;
      break;
    case "in":
      output = inputInMeters * 39.37;
      break;
    case "ft":
      output = inputInMeters * 3.281;
      break;
    case "yd":
      output = inputInMeters * 1.094;
      break;
    case "mi":
      output = inputInMeters / 1609.344;
      break;
    case "nmi":
      output = inputInMeters / 1852;
      break;
    case "aln":
      output = inputInMeters / 0.593;
      break;
    case "A":
      output = inputInMeters / 1e-10;
      break;
    case "arp":
      output = inputInMeters / 58.4713;
      break;
    case "AU":
      output = inputInMeters / 149597870700;
      break;
    case "am":
      output = inputInMeters / 1e-18;
      break;
    case "barleycorn":
      output = inputInMeters / 0.00847;
      break;
    case "cal":
      output = inputInMeters / 0.0254;
      break;
    case "ch":
      output = inputInMeters / 20.1168;
      break;
    case "cn":
      output = inputInMeters / 0.0014224;
      break;
    case "cs":
      output = inputInMeters / 0.2286;
      break;
    case "cbt":
      output = inputInMeters / 0.4572;
      break;
    case "dm":
      output = inputInMeters * 10;
      break;
    case "dam":
      output = inputInMeters / 10;
      break;
    case "Em":
      output = inputInMeters / 1e18;
      break;
    case "famn":
      output = inputInMeters / 1.8288;
      break;
    case "fath":
      output = inputInMeters / 1.8288;
      break;
    case "fm":
      output = inputInMeters / 1e-15;
      break;
    case "fermi":
      output = inputInMeters / 1e-15;
      break;
    case "finger":
      output = inputInMeters / 0.022225;
      break;
    case "fur":
      output = inputInMeters / 201.168;
      break;
    case "Gm":
      output = inputInMeters / 1e9;
      break;
    case "hd":
      output = inputInMeters / 0.1016;
      break;
    case "hdb":
      output = inputInMeters / 0.022225;
      break;
    case "hm":
      output = inputInMeters / 100;
      break;
    case "ken":
      output = inputInMeters / 20.1168;
      break;
    case "kpc":
      output = inputInMeters / 30856775814671900;
      break;
    case "lea":
      output = inputInMeters / 4828.032;
      break;
    case "ly":
      output = inputInMeters / 9.461e15;
      break;
    case "li":
      output = inputInMeters / 0.201168;
      break;
    case "lc":
      output = inputInMeters / 0.5234;
      break;
    case "lr":
      output = inputInMeters / 3.927;
      break;
    case "Mm":
      output = inputInMeters / 1e6;
      break;
    case "Mpc":
      output = inputInMeters / 3.0856775814672e22;
      break;
    case "µm":
      output = inputInMeters * 1e6;
      break;
    case "mil":
      output = inputInMeters / 0.0000254;
      break;
    case "nm":
      output = inputInMeters * 1e9;
      break;
    case "pc":
      output = inputInMeters / 30856775814671900;
      break;
    case "per":
      output = inputInMeters / 5.0292;
      break;
    case "Pm":
      output = inputInMeters / 1e15;
      break;
    case "P":
      output = inputInMeters / 0.0042175;
      break;
    case "pm":
      output = inputInMeters * 1e12;
      break;
    case "Pl":
      output = inputInMeters / 1.6162e-35;
      break;
    case "pt":
      output = inputInMeters / 0.00035278;
      break;
    case "pol":
      output = inputInMeters / 5.0292;
      break;
    case "rd":
      output = inputInMeters / 5.0292;
      break;
    case "actus":
      output = inputInMeters / 1.4848;
      break;
    case "archin":
      output = inputInMeters / 0.7112;
      break;
    case "spnbl":
      output = inputInMeters / 2.1336;
      break;
    case "Tm":
      output = inputInMeters / 1e12;
      break;
    case "twip":
      output = inputInMeters / 0.00004445;
      break;
    case "vcc":
      output = inputInMeters / 0.835905;
      break;
    case "vnc":
      output = inputInMeters / 0.7073170731;
      break;
    case "vt":
      output = inputInMeters / 0.833333;
      break;
    default:
      output = inputInMeters;
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

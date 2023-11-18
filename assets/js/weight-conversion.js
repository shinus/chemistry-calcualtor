let area = [
  { value: "ct", name: "Carat" },
  { value: "g", name: "Gram" },
  { value: "kg", name: "Kilogram" },
  { value: "mg", name: "Milligram" },
  { value: "oz", name: "Ounce" },
  { value: "lb", name: "Pound" },
  { value: "ton", name: "Ton (metric)" },
  { value: "assarion", name: "Assarion (Biblical Roman)" },
  { value: "amu", name: "Atomic Mass Unit" },
  { value: "ag", name: "Attogram" },
  { value: "bekah", name: "Bekah (Biblical Hebrew)" },
  { value: "cg", name: "Centigram" },
  { value: "Da", name: "Dalton" },
  { value: "dg", name: "Decigram" },
  { value: "dag", name: "Dekagram" },
  { value: "denarius", name: "Denarius (Biblical Roman)" },
  { value: "didrachma", name: "Didrachma (Biblical Greek)" },
  { value: "drachma", name: "Drachma (Biblical Greek)" },
  { value: "dyn", name: "Dyne" },
  { value: "Eg", name: "Exagram" },
  { value: "fg", name: "Femtogram" },
  { value: "gerah", name: "Gerah (Biblical Hebrew)" },
  { value: "Gg", name: "Gigagram" },
  { value: "gr", name: "Grain" },
  { value: "hg", name: "Hectogram" },
  { value: "cwt", name: "Hundredweight" },
  { value: "cwt_uk", name: "Hundredweight (UK)" },
  { value: "kip", name: "Kip" },
  { value: "lepton", name: "Lepton (Biblical Roman)" },
  { value: "Mg", name: "Megagram" },
  { value: "ug", name: "Microgram" },
  { value: "mina_gr", name: "Mina (Biblical Greek)" },
  { value: "mina_heb", name: "Mina (Biblical Hebrew)" },
  { value: "ng", name: "Nanogram" },
  { value: "pwt", name: "Pennyweight" },
  { value: "Pg", name: "Petagram" },
  { value: "pg", name: "Picogram" },
  { value: "pdl", name: "Poundal" },
  { value: "quadrans", name: "Quadrans (Biblical Roman)" },
  { value: "quarter", name: "Quarter" },
  { value: "quarter_uk", name: "Quarter (UK)" },
  { value: "quintal", name: "Quintal" },
  { value: "scruple", name: "Scruple" },
  { value: "shekel", name: "Shekel (Biblical Hebrew)" },
  { value: "slug", name: "Slug" },
  { value: "st", name: "Stone" },
  { value: "st_uk", name: "Stone (UK)" },
  { value: "talent_gr", name: "Talent (Biblical Greek)" },
  { value: "talent_heb", name: "Talent (Biblical Hebrew)" },
  { value: "Tg", name: "Teragram" },
  { value: "tetradrachma", name: "Tetradrachma (Biblical Greek)" },
  { value: "ton_uk", name: "Ton (long)" },
  { value: "oz_t", name: "Troy ounce" },
  { value: "lb_t", name: "Troy pound" },
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
  selectFrom.value = "ct";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "g";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputing = 0;
  let output = 0;

  // creating all the inputs units to one unit first

  switch (from) {
    case "ct":
      inputing = input * 0.2;
      break;
    case "g":
      inputing = input;
      break;
    case "kg":
      inputing = input * 1000;
      break;
    case "mg":
      inputing = input * 0.001;
      break;
    case "oz":
      inputing = input * 28.3495;
      break;
    case "lb":
      inputing = input * 453.592;
      break;
    case "ton":
      inputing = input * 1000000;
      break;
    case "assarion":
      inputing = input * 0.0000125;
      break;
    case "amu":
      inputing = input * 1.66054e-24;
      break;
    case "ag":
      inputing = input * 1e-18;
      break;
    case "bekah":
      inputing = input * 0.0125;
      break;
    case "cg":
      inputing = input * 0.01;
      break;
    case "Da":
      inputing = input * 1.66054e-24;
      break;
    case "dg":
      inputing = input * 0.1;
      break;
    case "dag":
      inputing = input * 10;
      break;
    case "denarius":
      inputing = input * 0.000125;
      break;
    case "didrachma":
      inputing = input * 3.3932;
      break;
    case "drachma":
      inputing = input * 4.374;
      break;
    case "dyn":
      inputing = input * 1e-5;
      break;
    case "Eg":
      inputing = input * 1e18;
      break;
    case "fg":
      inputing = input * 1e-15;
      break;
    case "gerah":
      inputing = input * 0.00002;
      break;
    case "Gg":
      inputing = input * 1e9;
      break;
    case "gr":
      inputing = input * 0.06479891;
      break;
    case "hg":
      inputing = input * 100;
      break;
    case "cwt":
      inputing = input * 45359.2;
      break;
    case "cwt_uk":
      inputing = input * 50802.34544;
      break;
    case "kip":
      inputing = input * 453592.37;
      break;
    case "lepton":
      inputing = input * 0.00000625;
      break;
    case "Mg":
      inputing = input * 1000000;
      break;
    case "ug":
      inputing = input * 1e-9;
      break;
    case "mina_gr":
      inputing = input * 436.561;
      break;
    case "mina_heb":
      inputing = input * 500;
      break;
    case "ng":
      inputing = input * 1e-12;
      break;
    case "pwt":
      inputing = input * 0.05;
      break;
    case "Pg":
      inputing = input * 1e15;
      break;
    case "pg":
      inputing = input * 1e-12;
      break;
    case "pdl":
      inputing = input * 0.138255;
      break;
    case "quadrans":
      inputing = input * 0.0000625;
      break;
    case "quarter":
      inputing = input * 11340;
      break;
    case "quarter_uk":
      inputing = input * 12700.58636;
      break;
    case "quintal":
      inputing = input * 100000;
      break;
    case "scruple":
      inputing = input * 0.772;
      break;
    case "shekel":
      inputing = input * 14;
      break;
    case "slug":
      inputing = input * 14593.9029;
      break;
    case "st":
      inputing = input * 6350.29;
      break;
    case "st_uk":
      inputing = input * 6350.29318;
      break;
    case "talent_gr":
      inputing = input * 262500;
      break;
    case "talent_heb":
      inputing = input * 3000000;
      break;
    case "Tg":
      inputing = input * 1e12;
      break;
    case "tetradrachma":
      inputing = input * 13.572;
      break;
    case "ton_uk":
      inputing = input * 1016046.9088;
      break;
    case "oz_t":
      inputing = input * 31.1034768;
      break;
    case "lb_t":
      inputing = input * 373.2417216;
      break;
  }

  // Convert from base unit to output unit
  switch (to) {
    case "ct":
      output = inputing / 0.2;
      break;
    case "g":
      output = inputing;
      break;
    case "kg":
      output = inputing / 1000;
      break;
    case "mg":
      output = inputing / 0.001;
      break;
    case "oz":
      output = inputing / 28.3495;
      break;
    case "lb":
      output = inputing / 453.592;
      break;
    case "ton":
      output = inputing / 1000000;
      break;
    case "assarion":
      output = inputing / 0.0000125;
      break;
    case "amu":
      output = inputing / 1.66054e-24;
      break;
    case "ag":
      output = inputing / 1e-18;
      break;
    case "bekah":
      output = inputing / 0.0125;
      break;
    case "cg":
      output = inputing / 0.01;
      break;
    case "Da":
      output = inputing / 1.66054e-24;
      break;
    case "dg":
      output = inputing / 0.1;
      break;
    case "dag":
      output = inputing / 10;
      break;
    case "denarius":
      output = inputing / 0.000125;
      break;
    case "didrachma":
      output = inputing / 3.3932;
      break;
    case "drachma":
      output = inputing / 4.374;
      break;
    case "dyn":
      output = inputing / 1e-5;
      break;
    case "Eg":
      output = inputing / 1e18;
      break;
    case "fg":
      output = inputing / 1e-15;
      break;
    case "gerah":
      output = inputing / 0.00002;
      break;
    case "Gg":
      output = inputing / 1e9;
      break;
    case "gr":
      output = inputing / 0.06479891;
      break;
    case "hg":
      output = inputing / 100;
      break;
    case "cwt":
      output = inputing / 45359.2;
      break;
    case "cwt_uk":
      output = inputing / 50802.34544;
      break;
    case "kip":
      output = inputing / 453592.37;
      break;
    case "lepton":
      output = inputing / 0.00000625;
      break;
    case "Mg":
      output = inputing / 1000000;
      break;
    case "ug":
      output = inputing / 1e-9;
      break;
    case "mina_gr":
      output = inputing / 436.561;
      break;
    case "mina_heb":
      output = inputing / 500;
      break;
    case "ng":
      output = inputing / 1e-12;
      break;
    case "pwt":
      output = inputing / 0.05;
      break;
    case "Pg":
      output = inputing / 1e15;
      break;
    case "pg":
      output = inputing / 1e-12;
      break;
    case "pdl":
      output = inputing / 0.138255;
      break;
    case "quadrans":
      output = inputing / 0.0000625;
      break;
    case "quarter":
      output = inputing / 11340;
      break;
    case "quarter_uk":
      output = inputing / 12700.58636;
      break;
    case "quintal":
      output = inputing / 100000;
      break;
    case "scruple":
      output = inputing / 0.772;
      break;
    case "shekel":
      output = inputing / 14;
      break;
    case "slug":
      output;
      break;
    case "st":
      output = inputing * 0.000157473;
      break;
    case "st_uk":
      output = inputing * 0.000157473;
      break;
    case "talent_gr":
      output = inputing * 1.66667e-7;
      break;
    case "talent_heb":
      output = inputing * 0.000333333;
      break;
    case "Tg":
      output = inputing * 1e-12;
      break;
    case "tetradrachma":
      output = inputing * 0.0736842105;
      break;
    case "ton_uk":
      output = inputing * 9.84206528e-7;
      break;
    case "oz_t":
      output = inputing * 32.1507466;
      break;
    case "lb_t":
      output = inputing * 0.822857143;
      break;
    case "st":
      output = inputing * 0.000157473;
      break;
    case "st_uk":
      output = inputing * 0.000157473;
      break;
    case "talent_gr":
      output = inputing * 1.66667e-7;
      break;
    case "talent_heb":
      output = inputing * 0.000333333;
      break;
    case "Tg":
      output = inputing * 1e-12;
      break;
    case "tetradrachma":
      output = inputing * 0.0736842105;
      break;
    case "ton_uk":
      output = inputing * 9.84206528e-7;
      break;
    case "oz_t":
      output = inputing * 32.1507466;
      break;
    case "lb_t":
      output = inputing * 0.822857143;
      break;
    default:
      console.log("Invalid 'to' unit.");
      break;
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

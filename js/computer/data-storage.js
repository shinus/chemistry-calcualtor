var valuess = document.getElementById("value_input_id");
var fromss = document.getElementById("from_dd_id");
var toss = document.getElementById("to_dd_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "value", values: valuess },
  { name: "from", values: fromss },
  { name: "to", values: toss },
];

var ftUnit = [
  {
    name: "bit (b)",
    value: 0,
  },
  {
    name: "byte (B)",
    value: 1,
  },
  {
    name: "kilobit (kb)",
    value: 2,
  },
  {
    name: "kilobyte (kB)",
    value: 3,
  },
  {
    name: "megabit (Mb)",
    value: 4,
  },
  {
    name: "megabyte (MB)",
    value: 5,
  },
  {
    name: "gigabit (Gb)",
    value: 6,
  },
  {
    name: "gigabyte (GB)",
    value: 7,
  },
];

var toUnit = [
  {
    name: "terabit (Tb)",
    value: 8,
  },
  {
    name: "terabyte (TB)",
    value: 9,
  },
  {
    name: "petabit (Pb)",
    value: 10,
  },
  {
    name: "petabyte (PB)",
    value: 11,
  },
  {
    name: "exabit (Eb)",
    value: 12,
  },
  {
    name: "exabyte (EB)",
    value: 13,
  },
];

function createDropDown(arr, element) {
  element.innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    var option = document.createElement("option");
    option.text = arr[i].name;
    option.value = arr[i].value;
    element.appendChild(option);
  }
}

function setParamValues(queryParams) {
  const params = new URLSearchParams(window.location.search);
  for (queryP of queryParams) {
    var parameter_value = params.get(queryP.name);
    if (queryP.values.tagName == "INPUT") {
      queryP.values.value = parameter_value;
    } else if (queryP.values.tagName == "SELECT") {
      queryP.values.selectedIndex = parameter_value;
    }
  }
}

function init() {
  valuess.value = 100;
  createDropDown(ftUnit, fromss);
  createDropDown(toUnit, toss);
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}

init();

function getSelectedValue(element) {
  var value = element.options[element.selectedIndex].value;
  return value;
}

function getExact() {
  var valu = Number(valuess.value);
  var fr = Number(getSelectedValue(fromss));
  var tt = Number(getSelectedValue(toss));
  var result = 0;

  if (fr == 0 && tt == 8) {
    result = valu * (1 / Math.pow(10, 12));
  } else if (fr == 0 && tt == 9) {
    result = valu * (1 / (8 * Math.pow(1024, 4)));
  } else if ((fr == 0 && tt == 10) || (fr == 2 && tt == 8)) {
    result = valu * (1 / Math.pow(10, 15));
  } else if (fr == 0 && tt == 11) {
    result = valu * (1 / (8 * Math.pow(1024, 5)));
  } else if ((fr == 0 && tt == 12) || (fr == 2 && tt == 10)) {
    result = valu * (1 / Math.pow(10, 18));
  } else if (fr == 0 && tt == 13) {
    result = valu * (1 / (8 * Math.pow(1024, 6)));
  } else if (fr == 1 && tt == 8) {
    result = valu * (1 / (8 * Math.pow(10, 12)));
  } else if ((fr == 1 && tt == 9) || (fr == 2 && tt == 11)) {
    result = valu * (1 / Math.pow(1024, 4));
  } else if (fr == 1 && tt == 10) {
    result = valu * (1 / (8 * Math.pow(10, 15)));
  } else if ((fr == 1 && tt == 11) || (fr == 2 && tt == 13)) {
    result = valu * (1 / Math.pow(1024, 5));
  } else if (fr == 1 && tt == 12) {
    result = valu * (1 / (8 * Math.pow(10, 18)));
  } else if (fr == 1 && tt == 13) {
    result = valu * (1 / Math.pow(1024, 6));
  } else if (fr == 2 && tt == 9) {
    result = valu * (1 / (64 * Math.pow(10, 21)));
  } else if (fr == 2 && tt == 11) {
    result = valu * (1 / (64 * Math.pow(10, 24)));
  } else if (fr == 2 && tt == 12) {
    result = valu * (1 / Math.pow(10, 21));
  } else if (fr == 2 && tt == 13) {
    result = valu * (1 / (64 * Math.pow(10, 27)));
  } else if (fr == 3 && tt == 8) {
    result =
      valu * (8 * Math.pow(10, -9) * Math.pow(10, -3) * Math.pow(10, -3));
  } else if (fr == 3 && tt == 9) {
    result = valu * (1 / Math.pow(1024, 3));
  } else if (fr == 3 && tt == 10) {
    result =
      valu *
      (8 *
        Math.pow(10, -3) *
        Math.pow(10, -3) *
        Math.pow(10, -3) *
        Math.pow(10, -3) *
        Math.pow(10, -3));
  } else if (fr == 3 && tt == 12) {
    result =
      valu *
      (8 *
        Math.pow(10, -3) *
        Math.pow(10, -3) *
        Math.pow(10, -3) *
        Math.pow(10, -3) *
        Math.pow(10, -3) *
        Math.pow(10, -3));
  } else if (fr == 4 && tt == 8) {
    result = valu * (Math.pow(10, -3) * Math.pow(10, -3));
  } else if (fr == 4 && tt == 9) {
    result = valu * (1 / (8 * Math.pow(10, 6) * Math.pow(1024, 2)));
  } else if (fr == 4 && tt == 10) {
    result = valu * (Math.pow(10, 6) * Math.pow(10, 3) * Math.pow(10, -15));
  } else if (fr == 4 && tt == 11) {
    result = valu * (1 / (8 * Math.pow(10, 6) * Math.pow(1024, 3)));
  } else if (fr == 4 && tt == 12) {
    result = valu * (Math.pow(10, 6) * Math.pow(10, 3) * Math.pow(10, -18));
  } else if (fr == 4 && tt == 13) {
    result = valu * (1 / (8 * Math.pow(10, 6) * Math.pow(1024, 4)));
  } else if (fr == 5 && tt == 8) {
    result = valu * (8 * Math.pow(10, -3) * Math.pow(10, -3));
  } else if (fr == 5 && tt == 9) {
    result = valu * (1 / Math.pow(1024, 2));
  } else if (fr == 5 && tt == 10) {
    result = valu * (8 * Math.pow(10, 3) * Math.pow(10, 3) * Math.pow(10, -15));
  } else if (fr == 5 && tt == 11) {
    result = valu * (1 / Math.pow(1024, 3));
  } else if (fr == 5 && tt == 12) {
    result = valu * (8 * Math.pow(10, 3) * Math.pow(10, 3) * Math.pow(10, -18));
  } else if (fr == 5 && tt == 13) {
    result = valu * (1 / Math.pow(1024, 4));
  } else if (fr == 6 && tt == 8) {
    result = valu * Math.pow(10, -3);
  } else if (fr == 6 && tt == 9) {
    result = valu * (1 / (8 * Math.pow(10, 6) * 1024));
  } else if (fr == 6 && tt == 10) {
    result =
      valu *
      (Math.pow(10, 3) * Math.pow(10, 3) * Math.pow(10, 3) * Math.pow(10, -15));
  } else if (fr == 6 && tt == 11) {
    result = valu * (1 / (8 * Math.pow(10, 6) * Math.pow(1024, 3)));
  } else if (fr == 6 && tt == 12) {
    result =
      valu *
      (Math.pow(10, 3) * Math.pow(10, 3) * Math.pow(10, 3) * Math.pow(10, -18));
  } else if (fr == 6 && tt == 13) {
    result = valu * (1 / (8 * Math.pow(10, 6) * Math.pow(1024, 4)));
  } else if (fr == 7 && tt == 8) {
    result = valu * (8 * Math.pow(10, 9) * Math.pow(10, -12));
  } else if (fr == 7 && tt == 9) {
    result = valu * (1 / 1024);
  } else if (fr == 7 && tt == 10) {
    result = valu * (8 * Math.pow(10, 9) * Math.pow(10, -15));
  } else if (fr == 7 && tt == 11) {
    result = valu * (1 / Math.pow(1024, 3));
  } else if (fr == 7 && tt == 12) {
    result = valu * (8 * Math.pow(10, 9) * Math.pow(10, -18));
  } else if (fr == 7 && tt == 13) {
    result = valu * (1 / Math.pow(1024, 4));
  }

  return result;
}

function showResult() {
  if (event && event.type == "click") {
    reloadPage(queryParams);
    return;
  }
  var result = getExact();

  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");

  output.innerHTML = "";

  div1.innerHTML = "<b>Converted data :   " + result + " </b>";

  output.append(div1);
  output.append(div2);
  output.append(div3);
}

calcBtn.addEventListener("click", showResult);

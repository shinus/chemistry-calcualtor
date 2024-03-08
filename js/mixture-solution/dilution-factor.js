let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "initial", values: input1 },
  { name: "dilutant", values: input2 },
];

function setParamValues(queryParams) {
  const params = new URLSearchParams(window.location.search);
  for (const queryP of queryParams) {
    var parameter_value = params.get(queryP.name);
    if (queryP.values.tagName === "INPUT") {
      queryP.values.value = parameter_value;
    } else if (queryP.values.tagName === "SELECT") {
      queryP.values.value = parameter_value; // Change selectedIndex to value
    }
  }
}

function getSelectedValue(element) {
  var value = element.options[element.selectedIndex].value;
  return value;
}

function createDropDown(arr, element) {
  element.innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    var option = document.createElement("option");
    option.text = arr[i].name;
    option.value = arr[i].value;
    element.appendChild(option);
  }
}

function init() {
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}

init();


function calculateDilutionFactor() {

  // Convert the input values to standard cubic meters
  const initialVolumeInM3 = (parseFloat(input1.value));
  const dilutantVolumeInM3 = (parseFloat(input2.value));

  // Calculate the final volume in cubic meters
  const finalVolumeInM3 = initialVolumeInM3 + dilutantVolumeInM3;

  // Convert the final volume back to the desired unit
  const finalVolumeInDesiredUnit = (finalVolumeInM3);

  const totalToStock = `1:${(finalVolumeInM3 / initialVolumeInM3).toFixed(4)}`;
  const dilutantToStock = `1:${(dilutantVolumeInM3 / initialVolumeInM3).toFixed(4)}`;

  // Display the results
  result = `Final Volume : ${finalVolumeInDesiredUnit.toFixed(2)}; Total to Stock: ${totalToStock}; Dilutant to Stock: ${dilutantToStock}`;
  return result
}

function showResult() {
  if (event && event.type == "click") {
    reloadPage(queryParams);
    return;
  }
  var result = calculateDilutionFactor();
  var div1 = document.createElement("div");
  var div2 = document.createElement("div");

  output.innerHTML = "";

  div1.innerHTML = "<b>  " + result + "   </b>";

  output.append(div1);
  output.append(div2);
}

calcBtn.addEventListener("click", showResult);


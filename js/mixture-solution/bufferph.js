const buffertype = [
    { value: "Acid", name: "Acid" },
    { value: "Base", name: "Base" },
  ];
  
  let inputdrop = document.getElementById("inputdrop1");
  let input1 = document.getElementById("input2");
  let input2 = document.getElementById("input4");
  let input3 = document.getElementById("input5");
  var output = document.getElementById("result-section");
  var calcBtn = document.getElementById("calculate_btn");
  
  const getScript = document.currentScript;
  const permaLink = getScript.dataset.permalink;
  
  var queryParams = [
    { name: "type", values: inputdrop },
    { name: "Ka", values: input1 },
    { name: "acid", values: input2 },
    { name: "salt", values: input3 },
  ];
  
  var tyUnit = [
    {
      name: "acid",
      value: 0,
    },
    {
      name: "base",
      value: 1,
    },
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
    createDropDown(tyUnit, inputdrop);
    var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
  }
  
  init();
  
  function calculatebuffer() {
    const ty = Number(getSelectedValue(inputdrop));
    const in1 = Number(input1.value);
    const in2 = Number(input2.value);
    const in3 = Number(input3.value);
    var result, result2;
  
    if (ty == 0) {
        result = -Math.log10(in1); // For acid
      } else {
        const Kb = 1e-14 / in1; // Base dissociation constant (Kb)
        result = -Math.log10(Kb); // For base
      }
    result2 = result + Math.log(in3 / in2);
    if (ty === 0) {
        // For acid: pH = pKa + log([A^-]/[HA])
        result2 = result + Math.log10(in3 / in2);
      } else {
        // For base: pOH = pKb + log([HA]/[A^-]), result2 = 14 - pOH
     const poH = result + Math.log10(in3 / in2);
        result2 = 14 - poH;
      }
  
    return [result, result2];
  }
  
  function showResult() {
    if (event && event.type == "click") {
      reloadPage(queryParams);
      return;
    }
    var [result, result2] = calculatebuffer();
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
  
    output.innerHTML = "";
  
    div1.innerHTML = "<b>pKa  " + result.toFixed(2) + "   </b>";
    div2.innerHTML = "<b>pH  " + result2.toFixed(2) + "   </b>";
  
    output.append(div1);
    output.append(div2);
  }
  
  calcBtn.addEventListener("click", showResult);
  
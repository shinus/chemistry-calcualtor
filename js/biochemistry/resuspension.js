// let dropMolar = [
//     { value: "M", name: "molars" },
//     { value: "mM", name: "millimolars" },
//     { value: "µM", name: "micromolars" },
//     { value: "nM", name: "nanomolars" },
//     { value: "pM", name: "picomolars" },
//     { value: "fM", name: "femtomolars" },
//     { value: "aM", name: "attomolars" },
//     { value: "zM", name: "zeptomolars" },
//     { value: "yM", name: "joktomolars" },
//   ];
  
  // let dropMoles = [
  //   { value: 'mol', name: 'moles' },
  //   { value: 'mmol', name: 'millimoles' },
  //   { value: 'nmol', name: 'nanomoles' },
  //   { value: 'pmol', name: 'picomoles' }
  // ];
  
  const input1 = document.getElementById("input1");
  // const inputdrop1 = document.getElementById("inputdrop1");
  const input2 = document.getElementById("input2");
  // const inputdrop2 = document.getElementById("inputdrop2");
  
  var output = document.getElementById("result-section");
  var calcBtn = document.getElementById("calculate_btn");

    
  const getScript = document.currentScript;
  const permaLink = getScript.dataset.permalink;

  var queryParams = [
    { name: "amount", values: input1 },
    { name: "concentration", values: input2 },
];

function init() {
  var url = window.location.href;
  if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
  }
}

init()
  
  // calcBtn.style.background = "black";
  calcBtn.addEventListener("click", showResult);
  
  // dropMoles.forEach((option) => {
  //   let opt = document.createElement("option");
  //   opt.value = option.value;
  //   opt.text = option.name;
  //   inputdrop1.add(opt);
  //   inputdrop1.value = "mol";
  // });
  
  // dropMolar.forEach((option) => {
  //   let opt = document.createElement("option");
  //   opt.value = option.value;
  //   opt.text = option.name;
  //   inputdrop2.add(opt);
  //   inputdrop2.value = "M";
  // });
  
  function getExact() {
    const oligoAmount = parseFloat(input1.value);
    const desiredConcentration = parseFloat(input2.value);
  
    // if (isNaN(oligoAmount) || isNaN(desiredConcentration)) {
    //   alert("Please enter valid numeric values.");
    //   return;
    // }
  
    const diluentVolume = ((oligoAmount) / (desiredConcentration)) * 1000; // Convert to mL
  
    result = diluentVolume
    return result
  }
  

  function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var result = getExact();
  
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
  
    output.innerHTML = "";
  
    div1.innerHTML = "<b>Diluent volume required  " + result.toFixed(2)  +  " militers </b>";
  
    output.append(div1);
    output.append(div2);
  }
  // function convertToStandardUnit(value, unit) {
  //   const unitConversions = {
  //     "M": 1,
  //     "mM": 1e-3,
  //     "µM": 1e-6,
  //     "nM": 1e-9,
  //     "pM": 1e-12,
  //     "fM": 1e-15,
  //     "aM": 1e-18,
  //     "zM": 1e-21,
  //     "yM": 1e-24,
  //     "mol": 1,
  //     "mmol": 1e-3,
  //     "nmol": 1e-9,
  //     "pmol": 1e-12
  //   };
  //   return value * (unitConversions[unit] || 1);
  // }
  
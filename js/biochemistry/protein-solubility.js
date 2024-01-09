// let dropdowngrams = [
//     { value: "wg", name: "micrograms (wg)" },
//     { value: "mg", name: "milligrams (mg)" },
//     { value: "g", name: "grams (g)" },
//     { value: "dag", name: "decagrams (dag)" },
//     { value: "kg", name: "kilograms (kg)" },
//     { value: "t", name: "metric tons (t)" },
//     { value: "gr", name: "grains (gr)" },
//     { value: "dr", name: "drachms (dr)" },
//     { value: "oz", name: "ounces (oz)" },
//     { value: "lb", name: "pounds (lb)" },
//     { value: "stone", name: "stones (stone)" },
//     { value: "US ton", name: "US short tons (US ton)" },
//     { value: "Long ton", name: "imperial tons (Long ton)" },
//     { value: "oz t", name: "troy ounce (oz t)" },
//   ];
  
//   let dropdownperliter = [
//     { value: "g/mL", name: "grams per milliliter (g/mL)" },
//     { value: "g/L", name: "grams per liter (g/L)" },
//     { value: "mg/L", name: "milligrams/liter (mg/L)" },
//     { value: "mg/mL", name: "grams per milliliter (mg/mL)" },
//   ];
  
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const input3 = document.getElementById("input3");
  const input4 = document.getElementById("input4");
  // const inputdrop3 = document.getElementById("inputdrop3");
  // const inputdrop4 = document.getElementById("inputdrop4");
  var output = document.getElementById("result-section");
  var calcBtn = document.getElementById("calculate_btn");
  
  const getScript = document.currentScript;
  const permaLink = getScript.dataset.permalink;
  
  var queryParams = [
      { name: "blank", values: input1 },
      { name: "titer", values: input2 },
      { name: "normality", values: input3 },
      { name: "weight", values: input4 },
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
  
  // dropdowngrams.forEach((option) => {
  //   let opt = document.createElement("option");
  //   opt.value = option.value;
  //   opt.text = option.name;
  //   inputdrop4.add(opt);
  //   inputdrop4.value = "g";
  // });
  
  // dropdownperliter.forEach((option) => {
  //   let opt = document.createElement("option");
  //   opt.value = option.value;
  //   opt.text = option.name;
  //   inputdrop3.add(opt);
  //   inputdrop3.value = "g/L";
  // });
  
  function getExact() {
    const blankTiter = parseFloat(input1.value);
    const titer = parseFloat(input2.value);
    const normality = parseFloat(input3.value);
    const effectiveWeight = parseFloat(input4.value);
  
    // if (
    //   isNaN(blankTiter) ||
    //   isNaN(titer) ||
    //   isNaN(normality) ||
    //   isNaN(effectiveWeight)
    // ) {
    //   alert("Please enter valid numeric values for all fields.");
    //   return;
    // }
  
    const standardBlankTiter = blankTiter
    const standardTiter = titer
    // const standardNormality = convertToStandardGramsPerLiter(
    //   normality,
    //   inputdrop3.value
    // );
    // const standardEffectiveWeight = convertToStandardGrams(
    //   effectiveWeight,
    //   inputdrop4.value
    // );
  
    const proteinSolubility =
      1.401 * 6.25 * 5 * (standardBlankTiter - standardTiter) * normality / effectiveWeight;
  
    result = proteinSolubility;
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
  
    div1.innerHTML = "<b>Protein solubility percentage (P)  " + result.toFixed(2)  +  " % </b>";
  
    output.append(div1);
    output.append(div2);
  }
  
  
  // function convertToStandardGrams(value, unit) {
  //   switch (unit) {
  //     case "g":
  //       return value;
  //     case "dag":
  //       return value * 10;
  //     case "kg":
  //       return value * 1e3;
  //     case "t":
  //       return value * 1e6;
  //     case "gr":
  //       return value * 0.0647989;
  //     case "dr":
  //       return value * 1.77185;
  //     case "oz":
  //       return value * 28.3495;
  //     case "lb":
  //       return value * 453.592;
  //     case "stone":
  //       return value * 6350.29;
  //     case "US ton":
  //       return value * 907184.74;
  //     case "Long ton":
  //       return value * 1016046.91;
  //     case "oz t":
  //       return value * 31.1035;
  //       case "wg":
  //       return value * 1e-6;
  //     case "mg":
  //       return value * 1e-3;
  //     default:
  //       return value;
  //   }
  // }
  
  
  // function convertToStandardGramsPerLiter(value, unit) {
  //   switch (unit) {
  //     case "g/mL":
  //       return value * 1000;
  //     case "g/L":
  //       return value;
  //     case "mg/L":
  //       return value / 1000;
  //     case "mg/mL":
  //       return value;
  //     default:
  //       return value;
  //   }
  // }
  

  console.log('code final')
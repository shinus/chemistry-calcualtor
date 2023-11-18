let dropMolar = [
    { value: "M", name: "molars" },
    { value: "mM", name: "millimolars" },
    { value: "µM", name: "micromolars" },
    { value: "nM", name: "nanomolars" },
    { value: "pM", name: "picomolars" },
    { value: "fM", name: "femtomolars" },
    { value: "aM", name: "attomolars" },
    { value: "zM", name: "zeptomolars" },
    { value: "yM", name: "joktomolars" },
  ];
  
  let dropMoles = [
    { value: 'mol', name: 'moles' },
    { value: 'mmol', name: 'millimoles' },
    { value: 'nmol', name: 'nanomoles' },
    { value: 'pmol', name: 'picomoles' }
  ];
  
  const input1 = document.getElementById("input1");
  const inputdrop1 = document.getElementById("inputdrop1");
  const input2 = document.getElementById("input2");
  const inputdrop2 = document.getElementById("inputdrop2");
  
  let calcBtn = document.getElementById("calcBtn");
  let result = document.getElementById("result-section");
  
  calcBtn.style.background = "black";
  calcBtn.addEventListener("click", calculate);
  
  dropMoles.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop1.add(opt);
    inputdrop1.value = "mol";
  });
  
  dropMolar.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop2.add(opt);
    inputdrop2.value = "M";
  });
  
  function calculate() {
    const oligoAmount = parseFloat(input1.value);
    const desiredConcentration = parseFloat(input2.value);
  
    if (isNaN(oligoAmount) || isNaN(desiredConcentration)) {
      alert("Please enter valid numeric values.");
      return;
    }
  
    const unit1 = inputdrop1.value;
    const unit2 = inputdrop2.value;
  
    const diluentVolume = (convertToStandardUnit(oligoAmount,unit1) / convertToStandardUnit(desiredConcentration, unit2)) * 1000; // Convert to mL
  
    result.textContent =
      `${diluentVolume.toFixed(2)}ml`
  }
  
  function convertToStandardUnit(value, unit) {
    const unitConversions = {
      "M": 1,
      "mM": 1e-3,
      "µM": 1e-6,
      "nM": 1e-9,
      "pM": 1e-12,
      "fM": 1e-15,
      "aM": 1e-18,
      "zM": 1e-21,
      "yM": 1e-24,
      "mol": 1,
      "mmol": 1e-3,
      "nmol": 1e-9,
      "pmol": 1e-12
    };
    return value * (unitConversions[unit] || 1);
  }
  
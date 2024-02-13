const shapes = [
    { name: "Sphere", value: "sphere" },
    { name: "Disk (face on)", value: "diskFace" },
    { name: "Disk (edge on)", value: "diskEdge" },
    { name: "Disk (random motion)", value: "diskRandom" },
    { name: "Ellipsoid (lengthways)", value: "ellipsoidLength" },
    { name: "Ellipsoid (sideways)", value: "ellipsoidSide" },
    { name: "Ellipsoid (random motion)", value: "ellipsoidRandom" }
  ];
  
  

let inputdrop1 = document.getElementById("inputdrop1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "shape", values: inputdrop1 },
  { name: "temperature", values: input2 },
  { name: "radius", values: input3 },
  { name: "solvent", values: input4 },
];

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
    var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
  }
  
  init();

shapes.forEach((listitem) => {
  let option = document.createElement("option");
  option.value = listitem.value;
  option.text = listitem.name;
  inputdrop1.add(option);
  inputdrop1.value = "sphere";
});

input2.placeholder = 'k'
input3.placeholder = 'm'
input4.placeholder = 'pa.s'

function calculateDiffusion() {
    
    const kb = 1.380649e-23;
  
    const shape = inputdrop1.value;  
    const temp = Number(input2.value);
    const radius = Number(input3.value); 
    const viscosity = Number(input4.value);
  
    let friction;
  
    switch(shape) {
      case "sphere":
        friction = 6 * Math.PI * viscosity * radius;
        break;
      case "diskFace":
        friction = 16 * Math.PI * viscosity * radius;
        break;
      case "diskEdge":
        friction = (32/3) * Math.PI * viscosity * radius;
        break;
      case "diskRandom":
        friction = 12 * Math.PI * viscosity * radius;
        break;
      case "ellipsoidLength":
        const b = 0.5 * radius; 
        friction = (4 * Math.PI * viscosity * radius) / (Math.log(2*radius/b) + 0.5);
        break;
      case "ellipsoidSide":
        const a = 2 * radius;
        friction = (8 * Math.PI * viscosity * radius) / (Math.log(2*a/radius) + 0.5);  
        break;
      default: 
        let am = 2 * radius;
        let bo = 0.5 * radius;
        friction = (6 * Math.PI * viscosity * radius) / Math.log(2*am/bo);
    }
  
    const diffusionCoefficient = kb * temp / friction;
  
   return result = diffusionCoefficient;
  
  }
  
  function showResult() {
    if (event && event.type == "click") {
      reloadPage(queryParams);
      return;
    }
    var result = calculateDiffusion();
  
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
  
    output.innerHTML = "";
  
    div1.innerHTML = "<b> The diffusion coefficient is: " + result.toExponential(4) + " m^2/s </b>";
  
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
  }
  
  calcBtn.addEventListener("click", showResult);

let calculator__result = document.createElement("div");
calculator__result.setAttribute("class","row");
let divresult1 = document.createElement("div")
let divresult2 = document.createElement("div")
divresult2.setAttribute("class","col-md-12");
divresult1.setAttribute("class","col-md-12");
let h41 = document.createElement('h4');
let rb1 = document.createElement('b');
let rb2 = document.createElement('b');
rb1.setAttribute("id","resultLow")
rb2.setAttribute("id","resultHigh")
h41.innerHTML="Recommended Bitrate";
let h42 = document.createElement('h4');
let rdiv2 = document.createElement('b');
rdiv2.setAttribute("id","calculator__result__output");
h42.innerHTML="Streams Max Bitrate";
divresult1.appendChild(h41)
divresult1.appendChild(rb1)
divresult1.appendChild(rb2)
divresult2.appendChild(h42)
divresult2.appendChild(rdiv2)
calculator__result.appendChild(divresult1);
calculator__result.appendChild(divresult2);
document.getElementById("result-section").appendChild(calculator__result)
let h4 = document.createElement("h4").innerHTML = "Recommended Bitrate"
document.getElementById("userUpload").value=8;
document.getElementById("userStream").value=60;
document.getElementById("userResolutionW").value=1280;
document.getElementById("userResolutionH").value=720;
document.getElementById("userFPS").value=60;
document.getElementById("calculate_btn").addEventListener("click",function() {
     document.getElementById("result-section").style.display="block"
     let userUpload = document.getElementById("userUpload").value,
    userStream = document.getElementById("userStream").value,
    userResolutionW = document.getElementById("userResolutionW").value,
    userResolutionH = document.getElementById("userResolutionH").value,
    userFPS = document.getElementById("userFPS").value,
    resultLow = document.getElementById("resultLow"),
    resultHigh = document.getElementById("resultHigh"),
    calculator__result__output = document.getElementById(
      "calculator__result__output"
    );
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const bitrateCalcLow = (userFPS, userResolutionW, userResolutionH) => {
    let PPS = userResolutionW * userResolutionH * userFPS;
    let fractionLow = Math.round((0.079 * PPS) / 1000);

    return numberWithCommas(fractionLow);
  };

  const bitrateCalcHigh = (userFPS, userResolutionW, userResolutionH) => {
    let PPS = userResolutionW * userResolutionH * userFPS;
    let fractionHigh = Math.round((0.15 * PPS) / 1000);

    return numberWithCommas(fractionHigh);
  };
  const bitrateAcceptance = (userUpload, userStream) => {
    let recommendBitrate = userUpload * 1000 * (userStream * 0.01);

    return numberWithCommas(recommendBitrate);
  };
  let result = bitrateCalcLow(userFPS, userResolutionW, userResolutionH),
    result2 = bitrateAcceptance(userUpload, userStream),
    result3 = bitrateCalcHigh(userFPS, userResolutionW, userResolutionH);
  resultLow.innerHTML = 'Low '+ result;
  resultHigh.innerHTML = "high " + result3;
  calculator__result__output.innerHTML = result2;
});

var D1  = parseInt(document.getElementById('today_Day_ID').value);
var M1  = parseInt(document.getElementById('today_Month_ID').value);
var Y1  = parseInt(document.getElementById('today_Year_ID').value);
var D2  = parseInt(document.getElementById('lastdate_Day_ID').value);
var M2  = parseInt(document.getElementById('lastdate_Month_ID').value);
var Y2  = parseInt(document.getElementById('lastdate_Year_ID').value);
document.getElementById("result-section").style.display = "none";
document.getElementById("calculate_btn").addEventListener("click", () => {
  document.getElementById("result-section").style.display = "block";
  var oneday = 1000 * 60 * 60 * 24;
  var oneweek = oneday * 7;

  var D1 = document.getElementById("today_Day_ID").value;
  var M1 = document.getElementById("today_Month_ID").value;
  var Y1 = getFieldFloatValue("today_Year_ID");

  var D2 = document.getElementById("lastdate_Day_ID").value;
  var M2 = document.getElementById("lastdate_Month_ID").value;
  var Y2 = getFieldFloatValue("lastdate_Year_ID");

  var Y = document.getElementById("Y");
  var M = document.getElementById("M");
  var D = document.getElementById("D");
  var SS = document.getElementById("SS");
  var DD = document.getElementById("DD");
  var MIN = document.getElementById("MIN");
  var HH = document.getElementById("HH");
  var DD = document.getElementById("DD");
  var WW = document.getElementById("WW");
  var DD = document.getElementById("DD");
  var YY = document.getElementById("YY");

  var X1 = new Date(Y1, M1 - 1, D1);
  var X2 = new Date(Y2, M2 - 1, D2);

  if (getFieldFloatValue("today_Year_ID") < 100) YY1 = X1.getFullYear() - 1900;
  else YY1 = X1.getFullYear();
  if (getFieldFloatValue("lastdate_Year_ID") < 100) YY2 = X2.getFullYear() - 1900;
  else YY2 = X2.getFullYear();

  var A = YY2 - YY1;
  var B = new Date(Y1 + A, M1 - 1, D1);
  var C = new Date(Y2, X2.getMonth(), 0);
  var F = new Date(Y2, M2 - 1, 0);

  if (C.getDate() - X1.getDate() < 0) Z = 0;
  else Z = C.getDate() - X1.getDate();

  if (X2.getTime() < X1.getTime()) {
    Y.value = "-";
    M.value = "-";
    D.value = "-";
    SS.value = "-";
    MIN.value = "-";
    HH.value = "-";
    DD.value = "-";
    WW.value = "-";
    MM.value = "-";
    YY.value = "-";
  } else {
    if (X2.getTime() < B.getTime()) Y.value = A - 1;
    else Y.value = A;

    var Mx = X2.getMonth() - X1.getMonth() + 12 * A;

    if (X2.getDate() < X1.getDate()) {
      Mx--;
    }

    if (X2.getMonth() - X1.getMonth() + 12 * A > 11)
      M.value = Mx - Y.value * 12;
    else M.value = Mx;

    if (X2.getDate() >= X1.getDate()) D.value = X2.getDate() - X1.getDate();
    else D.value = (X2.getTime() - F.getTime()) / oneday + Z;

    SS.value = (X2.getTime() - X1.getTime()) / 1000;
    MIN.value = (X2.getTime() - X1.getTime()) / (1000 * 60);
    HH.value = (X2.getTime() - X1.getTime()) / (1000 * 60 * 60);
    DD.value = round((X2.getTime() - X1.getTime()) / oneday, 0);
    WW.value = round((X2.getTime() - X1.getTime()) / oneweek, 2);
    MM.value = X2.getMonth() - X1.getMonth() + 12 * A;
    if (X2.getDate() < X1.getDate()) {
      MM.value--;
    }
    if (X2.getTime() < B.getTime()) YY.value = A - 1;
    else YY.value = A;
  }
});
function getFieldFloatValue(fieldId) {
  return parseFloat(document.getElementById(fieldId).value.replace(",", "."));
}
function round(n, dig) {
  X = n * Math.pow(10, dig);
  X = Math.round(X);
  return X / Math.pow(10, dig);
}
function resetValues(form) {
  for (var i = 0; i < form.elements.length; i++) {
    if (form.elements[i].type == "text") {
      form.elements[i].value = "";
    }
  }
}

document.querySelector("#result-section").style.fontSize ="20px"
document.getElementById("calculate_btn").addEventListener("click",function(e) {
  e.preventDefault() 
  var d1 = parseInt(document.getElementById('today_Day_ID').value);
  var d2 = parseInt(document.getElementById('lastdate_Day_ID').value);
  var m1 = parseInt(document.getElementById('today_Month_ID').value);
  var m2 = parseInt(document.getElementById('lastdate_Month_ID').value);
  var y1 = parseInt(document.getElementById('today_Year_ID').value);
  var y2 = parseInt(document.getElementById('lastdate_Year_ID').value);
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;
  var date1 = new Date(document.getElementsByName('today')[0].value);
  var date2 = new Date(document.getElementsByName('lastdate')[0].value);
    
  var Difference_In_Time = date2.getTime() - date1.getTime();
    
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    
  console.log(Difference_In_Days)
  let nom = '';
  if(y*12==0){
    nom = m
  }else{
    nom = y*12
  }
  let rr = (Difference_In_Days/7).toString().split('.');
  document.getElementById("rsl3").innerHTML = "<span>or <b>" + rr[0] + "</b> weeks <b>" + (Difference_In_Days%7) + "</b> days</span>";
  document.getElementById("rsl4").innerHTML = "<span>or <b>" + Difference_In_Days + "</b> days</span>";
  document.getElementById("rsl5").innerHTML = "<span>or <b>" + Difference_In_Days*24 + "</b> hours</span>";
  document.getElementById("rsl6").innerHTML = "<span>or <b>" + Difference_In_Days*24*60 + "</b> minutes</span>";
  document.getElementById("rsl7").innerHTML = "<span>or <b>" + Difference_In_Days*24*60*60 + "</b> seconds</span>";
  document.getElementById("rsl1").innerHTML = "<span>Your Age is <b>" + y + "</b> Years <b>" + m + "</b> Months <b>" + d + "</b> Days</span>";
  document.getElementById("rsl2").innerHTML = "<span>or <b>" + nom + "</b> months <b>" + d + "</b> days</span>";
  document.querySelector('.head_result').style.display = "block";
}
)

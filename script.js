function myTime() {
  var d = new Date();
  var hour,
    min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes(),
    sec = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds(),
    M = d.getHours() >= 12 ? "PM" : "AM";

  if (d.getHours() == 0) {
    hour = 12;
  } else if (d.getHours() > 12) {
    hour = d.getHours() - 12;
  } else {
    hour = d.getHours();
  }
  var currentTime = hour + ":" + min + ":" + sec;
  document.getElementsByClassName("hour")[0].innerHTML = currentTime;
  document.getElementsByClassName("minute")[0].innerHTML = M;

  var myDate = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
  myMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"],
  day = d.getDate();
  var currentDate = myDate[d.getDay()] + "," + myMonth[d.getMonth()] + "-" +day;
  document.getElementsByClassName("date")[0].innerHTML = currentDate;
}

myTime()

setInterval(function(){
  myTime();
},1000);

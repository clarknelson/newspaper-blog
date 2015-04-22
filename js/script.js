$(document).ready(function(){

  // call date and time functions
  // document.getElementById("local-date").innerHtml = getLocalDate();
  $("#local-date").html(getLocalDate());
  $("#local-time").html(getLocalTime());

  // DOM methods
  // setDivider();
});

function setDivider(){
  var sidebar = document.getElementById('sidebar');
  var content = document.getElementById('content');
  var sidebarHeight = sidebar.clientHeight;
  var contentHeight = content.clientHeight;
  //console.log(sidebarHeight + " " + contentHeight);
  if (sidebarHeight > contentHeight){
    console.log("The sidebar is taller");
    sidebar.style.borderRight = "1px solid #222";
  } else {
    console.log("The content is taller");
    content.style.borderLeft = "1px solid #222";
  }
}


function getLocalTime(){
  var theDate = new Date();
  var theDateHours = theDate.getHours();
  var theDateMin = theDate.getMinutes();
  var theDateSec = theDate.getSeconds();
  var theDateAmPm = "am";

  // Convert to standard time
  if (theDateHours > 12){
    theDateHours = theDateHours-12;
    theDateAmPm = "pm";
  } else if (theDateHours == 0){
    theDateHours = 12;
  }
  // Make sure seconds and minutes both have two digits
  if (theDateSec < 10){
    theDateSec = "0" + theDateSec;
  }
  if (theDateMin < 10){
    theDateMin = "0" + theDateMin;
  }

  var myDate = theDateHours + ":" + theDateMin + ":" + theDateSec + " " + theDateAmPm;
  return myDate;
  
}


function getLocalDate(){
  var theDate = new Date();
  var theDateDay = theDate.getDay();
  var theDateMonth = theDate.getMonth();
  var theDateDate = theDate.getDate();
  var theDateYear = theDate.getFullYear();
  
  switch(theDateDay) {
      case 0:
        theDateDay="Sunday";
        break;
      case 1:
        theDateDay="Monday";
        break;
      case 2:
        theDateDay="Tuesday";
        break;
      case 3:
        theDateDay="Wednesday";
        break;
      case 4:
        theDateDay="Thursday";
        break;
      case 5:
        theDateDay="Friday";
        break;
      case 6:
        theDateDay="Saturday";
        break;
      default:
        theDateDay="Error finding the day of the week";
  }
  switch(theDateMonth) {
      case 0:
        theDateMonth="January";
        break;
      case 1:
        theDateMonth="February";
        break;
      case 2:
        theDateMonth="March";
        break;
      case 3:
        theDateMonth="April";
        break;
      case 4:
        theDateMonth="May";
        break;
      case 5:
        theDateMonth="June";
        break;
      case 6:
        theDateMonth="July";
        break;
      case 7:
        theDateMonth="August";
        break;
      case 8:
        theDateMonth="September";
        break;
      case 9:
        theDateMonth="October";
        break;
      case 10:
        theDateMonth="November";
        break;
      case 11:
        theDateMonth="December";
        break;
      default:
        theDateMonth="Error finding the month";
  }
  var myDate = theDateDay + ", " + theDateMonth + " " + theDateDate + ", " + theDateYear;
  return myDate;
}


// find user's location with IP address
// $.get("http://ipinfo.io", function(response) {
//   $("#local-location").append('<p>' + response.city + '</p>');
// }, "jsonp");

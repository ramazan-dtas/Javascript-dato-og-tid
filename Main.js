/* START KLOKKEN */
var clock = document.getElementById('clock');
/*var hexColor = document.getElementById('hex-color');*/

function hexClock() {
  var time = new Date();
  var hours = (time.getHours()).toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  var clockStr = hours + ' : ' + minutes + ' : ' + seconds;

  clock.textContent = clockStr;
}
/* SLUT KLOKKEN */
/* START DATE */
var date = document.getElementById('date');
function renderTime(){
    var mydate = new Date();
    var year = mydate.getYear();
    
    if(year < 1000){
        year +=1900
    }
    
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym =mydate.getDate();
    var dayarray = new Array("Søndag","Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag");
    var montharray = new Array("Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober",
    "November", "December");

    var dateStr = dayarray[day] + ' d. ' + daym + ' / ' + montharray[month] +' / '+ year;
    date.textContent = dateStr;
}
/* SLUT DATE */
renderTime();
hexClock();
setInterval(hexClock, 1000);
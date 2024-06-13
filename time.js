var time = document.getElementById('time');

window.onload = displayClock();
function displayClock(){
  var display = new Date().toLocaleTimeString();
  document.body.innerHTML = display;
  setTimeout(displayClock, 1000); 
}
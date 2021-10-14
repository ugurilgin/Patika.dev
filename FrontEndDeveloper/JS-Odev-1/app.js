let userName = prompt("İsim giriniz");
let greeting = document.querySelector("#greeting") 
greeting.innerHTML=`Hoşgeldin ${userName.toUpperCase()}!`

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = date.getDay();
    
    if (session == 1) {
        session = "Pazartesi";
      } else if (session == 2) {
        session = "Salı";
      } else if (session == 3) {
        session = "Çarşamba";
      } else if (session == 4) {
        session = "Perşembe";
      } else if (session == 5) {
        session = "Cuma";
      } else if (session == 6) {
        session = "Cumartesi";
      } else if (session == 7) {
        session = "Pazar";
      }
    
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " +session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
    
setInterval(displayTime,10);
function displayTime(){
   let dateTime=new Date();
   let hrs=dateTime.getHours();
   let min=dateTime.getMinutes();
   let sec=dateTime.getSeconds();
    let ses=document.getElementById("Session1");
   if(hrs>=12){
    ses.innerText="PM";
   }
   else{
    ses.innerText="AM"
   }

   if (hrs === 0) {
     hrs = 12;
   }
   if (hrs > 12) {
     hrs = hrs - 12;
   }
   if (hrs < 10) {
     hrs = "0" + hrs;
   }
   if (min < 10) {
     min = "0" + min;
   }
   if (sec < 10) {
     sec = "0" + sec;
   }
   document.getElementById("hh").innerText = hrs;
   document.getElementById("mm").innerText = min;
   document.getElementById("ss").innerText = sec;
   if (hrs >= 1 && hrs <= 4 && Session === "PM") {
    let a = document.getElementById("wakeup");

    a.innerText = "LET'S HAVE SOME LUNCH !!";


  } else if (hrs > 4 && hrs <= 8 && Session === "PM") {
    let a = document.getElementById("wakeup");

    a.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";


  } else if (hrs > 8 && hrs <= 12 && Session === "PM") {
    let a = document.getElementById("wakeup");

    a.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";

  } else if (hrs > 8 && hrs <= 12 && Session === "AM") {
    let a = document.getElementById("wakeup");

    a.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";

     }
}

function valueTime() {
  var content = document.getElementById("wake");
  var value = content.options[content.selectedIndex].text;
  document.getElementById("wakeupTime").innerHTML = value;

  var content = document.getElementById("lunch");
  var value = content.options[content.selectedIndex].text;
  document.getElementById("lunchTime").innerHTML = value;

  var content = document.getElementById("nap");
  var value = content.options[content.selectedIndex].text;
  document.getElementById("napTime").innerHTML = value;

  var content = document.getElementById("night");
  var value = content.options[content.selectedIndex].text;
  document.getElementById("nightTime").innerHTML = value;
}

function setAlaram() {

  let x = document.getElementById("wake").value;
  let y = document.getElementById("lunch").value;
  let p = document.getElementById("nap").value;
  let q = document.getElementById("night").value;

  let hour= new Date().getHours();
  if (x == hour) {
    document.getElementById("getup").innerText = "GOOD MORNING!! WAKE UP!!";
   
    document.getElementById("image1").style.backgroundImage =
      "url('Image/morning.jpg')";
  }
  if (y == hour) {
    document.getElementById("getup").innerText =
      "GOOD AFTERNOON !! TAKE SOME SLEEP!!";
    
    document.getElementById("image1").style.backgroundImage =
      "url('Image/afternoon.png')";
  }

  if (p == hour) {
    document.getElementById("getup").innerText = "GOOD EVENING!!";
   
    document.getElementById("image1").style.backgroundImage =
      "url('Image/evening.jpg')";
  }

  if (q == hour) {
    document.getElementById("getup").innerText = "GOOD NIGHT!!";
   
    document.getElementById("image1").style.backgroundImage =
      "url('Image/night.png')";
  }
 valueTime();
}

let btn_alrm = document.getElementById("setAlaram");
btn_alrm.addEventListener("click", setAlaram);


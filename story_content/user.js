function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5cPhVy6oQBC":
        Script1();
        break;
      case "5a35d75LpoE":
        Script2();
        break;
      case "6cywl9GyE8r":
        Script3();
        break;
      case "6BaOClFAlMw":
        Script4();
        break;
      case "62RIy2sFueM":
        Script5();
        break;
      case "6kxz3rqRq8Y":
        Script6();
        break;
      case "6QbO3Hm1PT6":
        Script7();
        break;
      case "66rc6woOyND":
        Script8();
        break;
      case "6UycZZCnh19":
        Script9();
        break;
      case "6VPJjfn7rc3":
        Script10();
        break;
      case "6QtFCIK6288":
        Script11();
        break;
      case "6qhXpZ1lEUV":
        Script12();
        break;
      case "5YmGiJ4db0h":
        Script13();
        break;
      case "652h2hme5CU":
        Script14();
        break;
      case "6Ruc2QUomg4":
        Script15();
        break;
      case "6QU9lMHoILi":
        Script16();
        break;
      case "64fX7RE7q1M":
        Script17();
        break;
      case "5hruJXVxEw6":
        Script18();
        break;
      case "6BbQziH2wl5":
        Script19();
        break;
      case "5gZ0zhNCL3X":
        Script20();
        break;
      case "6fQm8gZqAy3":
        Script21();
        break;
      case "6HcCGqMwBOv":
        Script22();
        break;
      case "6aLGCdWKxp3":
        Script23();
        break;
  }
}

function Script1()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
  
    setTimer=setInterval(function () {
      
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins",minutes)
       GetPlayer().SetVar("sec",seconds)

        if (--timer < 0) {
            timer = 00;
        }
      
        
   
    }, 1000);
      
}



 startTimer(60*3.5);
}

function Script2()
{
  console.log(localStorage.getItem("status"))
if(localStorage.getItem("status") =="accepted"){
GetPlayer().SetVar('result',"Accepted")
GetPlayer().SetVar('coins',GetPlayer().GetVar('coins')+5)
GetPlayer().SetVar("correctNum",GetPlayer().GetVar('correctNum')+1)
}
else if(localStorage.getItem("status") =="wrong answer"){
	GetPlayer().SetVar('result',"Wrong Answer")
}

else {
GetPlayer().SetVar('result',"Not Answer")
}
localStorage.removeItem('status')
}

function Script3()
{
  clearInterval(setTime);
}

function Script4()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script5()
{
  if(GetPlayer().GetVar("coins") >= 3){
GetPlayer().SetVar("coins",GetPlayer().GetVar("coins")-3)
}
}

function Script6()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins",minutes)
       GetPlayer().SetVar("sec",seconds)

        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}



 startTimer(60*3.5);
}

function Script7()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins_1",minutes)
       GetPlayer().SetVar("sec_1",seconds)

        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}



 startTimer(60*3.5);
}

function Script8()
{
  console.log(localStorage.getItem("status"))
if(localStorage.getItem("status") =="accepted"){
GetPlayer().SetVar('result_1',"Accepted")
}
else if(localStorage.getItem("status") =="wrong answer"){
	GetPlayer().SetVar('result_1',"Wrong Answer")
}

else {
GetPlayer().SetVar('result_1',"Not Answer")
}
if(localStorage.getItem("status")=="accepted" && GetPlayer().GetVar('problemShowed')==false && GetPlayer().GetVar("sec_1") != 0){
GetPlayer().SetVar('coins',GetPlayer().GetVar('coins')+5)
GetPlayer().SetVar("correctNum",GetPlayer().GetVar('correctNum')+1)
localStorage.removeItem('status')
}
}

function Script9()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script10()
{
  if(GetPlayer().GetVar("coins") >= 3){
GetPlayer().SetVar("coins",GetPlayer().GetVar("coins")-3)
}
}

function Script11()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins",minutes)
       GetPlayer().SetVar("sec",seconds)

        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}



 startTimer(60*3.5);
}

function Script12()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins_2",minutes)
       GetPlayer().SetVar("sec_2",seconds)

        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}



 startTimer(60*3.5);
}

function Script13()
{
  console.log(localStorage.getItem("status"))
if(localStorage.getItem("status") =="accepted"){
GetPlayer().SetVar('result_2',"Accepted")
GetPlayer().SetVar('coins',GetPlayer().GetVar('coins')+5)
GetPlayer().SetVar("correctNum",GetPlayer().GetVar('correctNum')+1)

}
else if(localStorage.getItem("status") =="wrong answer"){

GetPlayer().SetVar('result_2',"Wrong Answer")
}

else {
GetPlayer().SetVar('result_2',"Not Answer")
}

localStorage.removeItem('status')
}

function Script14()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script15()
{
  if(GetPlayer().GetVar("coins") >= 3){
GetPlayer().SetVar("coins",GetPlayer().GetVar("coins")-3)
}
}

function Script16()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins_3",minutes)
       GetPlayer().SetVar("sec_3",seconds)

        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}



 startTimer(60*3.5);
}

function Script17()
{
  console.log(localStorage.getItem("status"))
if(localStorage.getItem("status") =="accepted"){
GetPlayer().SetVar('result_3',localStorage.getItem("status"))
GetPlayer().SetVar('coins',GetPlayer().GetVar('coins')+5)
GetPlayer().SetVar("correctNum",GetPlayer().GetVar('correctNum')+1)
}
else if(localStorage.getItem("status") =="wrong answer"){

GetPlayer().SetVar('result_3',"Wrong Answer")
}

else {
GetPlayer().SetVar('result_3',"Not Answer")
}

localStorage.removeItem('status')
}

function Script18()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script19()
{
  if(GetPlayer().GetVar("coins") >= 3){
GetPlayer().SetVar("coins",GetPlayer().GetVar("coins")-3)
}
}

function Script20()
{
  console.log("hello")
function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       GetPlayer().SetVar("mins_4",minutes)
       GetPlayer().SetVar("sec_4",seconds)

        if (--timer < 0) {
            timer = 00;
        }
    }, 1000);
}



 startTimer(60*3.5);
}

function Script21()
{
  console.log(localStorage.getItem("status"))
if(localStorage.getItem("status") =="accepted"){
GetPlayer().SetVar('result_4',"Accepted")
GetPlayer().SetVar('coins',GetPlayer().GetVar('coins')+5)
GetPlayer().SetVar("correctNum",GetPlayer().GetVar('correctNum')+1)
}else if(localStorage.getItem("status") =="wrong answer"){
GetPlayer().SetVar('result_4',"Wrong Answer")

}



else {
GetPlayer().SetVar('result_4',"Not Answer")
}



localStorage.removeItem('status')
}

function Script22()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script23()
{
  if(GetPlayer().GetVar("coins") >= 3){
GetPlayer().SetVar("coins",GetPlayer().GetVar("coins")-3)
}
}


var messageTimer = document.getElementById("message-timer-one");
/* to construct a simple timer, we use setTimeout */
// setTimeout is a function with 2 arguments: a function and a duration
setTimeout(()=>{ // anonymous arrow function
    messageTimer.innerHTML = "Il vient de s'écouler 2 secondes.";
}, 2000) 

// Exercise
/*  after 5s, the cadetblue square will change to a circle, and the transition
    will take 3s to complete */
var msgTimerOne = document.getElementById("sq-timer");
var paraTimer = document.getElementById("para-timer")
// to start with, we don't declare a variable for the function setTimeout, only for the second part of the exercise
var timer = setTimeout(()=> {
    msgTimerOne.classList.add("circ-timer");
    paraTimer.innerHTML = "The square takes 3s to turn into a circle, after 5s of the page loading."
}, 5000) 

console.log(timer); // should say 2 here, because it's the second timer on the page

// Exercise : clear time out when clicking a button stop
var stop = document.getElementById("stop");
stop.addEventListener("click", function(){
    clearTimeout(timer);
})

var interval = setInterval(function(){
    console.log("OK");
}, 2000)
// clearInterval(interval); --> to clear interval

/* creating a timer on the page */
var timer = document.getElementById("timer");
let min = 0;
let sec = 0;
function handler() {    
    sec++;
    if (sec == 60) {// it's better to put sec >= 60
        min++;
        sec = 0;
    }
    timer.innerHTML = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
}
setInterval(handler, 1000);
/* NB: we don't use the brackets for the fonction as argument in the method setInterval() */
//handler() /* does not seem to be necessary */

/*
The setInterval() method calls a function at specified intervals (in milliseconds).
The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
1 second = 1000 milliseconds.
*/

/* the code below displays the minutes & seconds of the current time */
/*
var handler = function() {
var date = new Date();
var sec = date.getSeconds();
var min = date.getMinutes();
document.getElementById("timer").textContent = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
};
setInterval(handler, 1000);
handler();
*/
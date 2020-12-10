// The date we are counting to
let countDownDate = new Date("Jan 7, 2021 15:00:25").getTime()

//Change every one second

let change = setInterval(function() {
    let now = new Date().getTime();

    let difference = countDownDate - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) 
    / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) /
    (1000 * 60))
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.querySelector(".demo").innerHTML = 
    days + "d" + " " + hours + "h" + " " + minutes + "m"
    + " " + seconds + "s";
}, 1000);


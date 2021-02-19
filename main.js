const counter = document.querySelector('.counter')

// CountDown launch date
let countDownDate = new Date("Oct 7, 2021 16:00:07").getTime()

//Change every one second
const timer = setInterval(() => {
    let now = new Date().getTime();

    let difference = countDownDate - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) 
    / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) /
    (1000 * 60))
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    counter.innerHTML = 
    days + "d" + " " + hours + "h" + " " + minutes + "m"
    + " " + seconds + "s"

    if (difference < 0){
        clearInterval(timer)
        counter.innerHTML = 'Launch time is here'
    }
}, 1000)


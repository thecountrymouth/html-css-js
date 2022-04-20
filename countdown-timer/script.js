const newYear = "1 Jan 2023";

const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");

function countdown(){
    const currentDate = new Date();
    const newYearsDate = new Date(newYear);

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const mins = Math.floor(totalSeconds/60) % 60;
    const secs = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(secs);
    // console.log(days, hours, mins, secs);
}

function formatTime(time) {
    if (time < 10){
        return `0${time}`
    }else{
        return time;
    }
}
countdown();

setInterval(countdown, 1000);
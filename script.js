const new_year= "2 Jan 2024";

const dayId= document.getElementById('days_id');
const hoursId= document.getElementById('hours_id');
const minId= document.getElementById('min_id');
const secondsId= document.getElementById('seconds_id');


function countDown(){

    const newyearDate= new Date(new_year);
    const currentDate= new Date();

    const totalSecond= (newyearDate - currentDate)/ 1000;


    const day= Math.floor(totalSecond/3600 / 30);
    const hour= Math.floor(totalSecond/3600) % 24;
    const minuts= Math.floor(totalSecond/60) % 60;
    const second= Math.floor(totalSecond)%60;

    dayId.innerHTML= day;
    hoursId.innerHTML= formatTime(hour);
    minId.innerHTML= formatTime(minuts);
    secondsId.innerHTML= formatTime(second);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


function updateCountdown() {
    countDown(); // Call countDown function to update countdown values
}

// Call countDown initially to set the initial time
updateCountdown();

// Update countdown every second (1000 milliseconds)
setInterval(updateCountdown, 1000);
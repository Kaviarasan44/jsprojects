const hourEl= document.querySelector(".hours")
const minuteEl= document.querySelector(".minutes")
const secondEl= document.querySelector(".seconds")

function updateClock(){
    const currentDate= new Date();
    //setTimeout(updateClock, 1000);
    const hour =currentDate.getHours();
    const minute =currentDate.getMinutes();
    const second =currentDate.getSeconds();
    
    const hourDeg = (hour/12)*360;
    hourEl.style.transform =`rotate(${hourDeg}deg)`;

    const minuteDeg = (minute/60)*360;
    minuteEl.style.transform =`rotate(${minuteDeg}deg)`;

    const secondDeg = (second/60)*360;
    secondEl.style.transform =`rotate(${secondDeg}deg)`;
}
//updateClock()
setInterval(updateClock,1000)
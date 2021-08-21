const secondHand = document.querySelector('.second-hand');
const MinuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
console.log(hourHand)

function setDate(){
    const now = new Date()
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();
    //second
    const secondDegree = ((second/60)*360)+90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`
    //minute
    const minDegree = ((minute/60)*360)+90;
    MinuteHand.style.transform = `rotate(${minDegree}deg)`
    //hour
    const hourDegree = ((hour/12)*360)+90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`
   
}
setInterval(setDate,1000)
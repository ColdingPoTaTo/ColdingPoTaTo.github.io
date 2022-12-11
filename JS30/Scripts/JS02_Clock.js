const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
setDate()
function setDate() {

    let now = new Date();
    let sec = now.getSeconds();
    const secDegrees = (sec / 60) * 360;
    secHand.style.transform = `rotate(${secDegrees + 90}deg)`

    let min = now.getMinutes();
    const minDegrees = (min / 60) * 360;
    minHand.style.transform = `rotate(${minDegrees + 90}deg)`

    let hour = now.getHours();
    const hourDegrees = (hour / 12) * 360;
    hourHand.style.transform = `rotate(${hourDegrees + 90}deg)`

    console.log(hour, min, sec)
}
setInterval(setDate, 1000)
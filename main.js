const hour = document.querySelector(".hour"),
    minutes = document.querySelector(".minute"),
    second = document.querySelector(".second")


const displayTime = () => {
    let date = new Date(),
        sec = (date.getSeconds() / 60) * 360,
        min = (date.getMinutes() / 60) * 360,
        hr = (date.getHours() / 12) * 360;

        second.style.transform = `rotate(${sec}deg)`;
        minutes.style.transform = `rotate(${min}deg)`;
        hour.style.transform = `rotate(${hr}deg)`;
}

setInterval(displayTime, 1000);
displayTime();
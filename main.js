let timerId = null;

function toggleClock() {
  const timeButton = document.getElementById("time)");

  if (timerId === null) {
    timerId = setInterval(updateTime, 1000);
    updateTime();

    timeButton.style.backgroundColor = "green";
    timeButton.style.color = "cyan";
    timeButton.style.fontSize = "30px";
  } else {
    clearInterval(timerId);
    timerId = null;

    timeButton.innerHTML= "Show Time";
    timeButton.style.backgroundColor = "";
    timeButton.style.color = "";
    timeButton.style.fontSize = "";
  }
}

function updateTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
}

document.getElementById("time").onclick = toggleClock;
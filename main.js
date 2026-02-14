let timerId = null;

function toggleClock() {
  const timeButton = document.getElementById("time)");

  if (timerId === null) {
    timerId = setInterval(updateTime, 1000);
    updateTime();
    timeButton.style.fontFamily = "Arial, sans-serif";
    timeButton.style.border = "4px solid red";
    timeButton.style.backgroundColor = "green";
    timeButton.style.color = "cyan";
    timeButton.style.fontSize = "30px";
  } else {
    clearInterval(timerId);
    timerId = null;

    timeButton.innerHTML= "Show Time";
    timeButton.style.backgroundColor = "green";
    timeButton.style.color = "cyan";
    timeButton.style.fontSize = "30px";
  }
}

function updateTime() {
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, "0");;
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let seconds = date.getSeconds().toString().padStart(2, "0");

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
}

document.getElementById("time").onclick = toggleClock;
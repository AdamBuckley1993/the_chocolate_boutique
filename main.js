let timerId = null;
const btn = document.getElementById("time");

function toggleClock() {
  if (timerId === null) {
    timerId = setInterval(updateTime, 1000);
    updateTime();
    btn.style.fontFamily = "Arial, sans-serif";
    btn.style.border = "8px solid magenta";
    btn.style.backgroundColor = "yellow";
    btn.style.color = "purple";
    btn.style.fontSize = "30px";
  } else {
    clearInterval(timerId);
    timerId = null;

    btn.innerHTML= "Show Time";
    btn.style.backgroundColor = "green";
    btn.style.color = "cyan";
    btn.style.fontSize = "20px";
    btn.style.border = "4px solid red";
  }
}

function updateTime() {
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, "0");;
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let seconds = date.getSeconds().toString().padStart(2, "0");

    btn.innerHTML = `${hours}:${minutes}:${seconds}`;
    }


btn.onmouseenter = function() {
    btn.dataset.oldBg = btn.style.backgroundColor;
    btn.dataset.oldCol = btn.style.color;

    if (timerId === null) {
        btn.style.backgroundColor = "indigo";
        btn.style.color = "chartreuse";
    } else {
        btn.style.backgroundColor = "darkorange";
        btn.style.color = "white";
    }
}

btn.onmouseleave = function() {
    btn.style.backgroundColor = btn.dataset.oldBg;
    btn.style.color = btn.dataset.oldCol;
}

btn.onclick = toggleClock;
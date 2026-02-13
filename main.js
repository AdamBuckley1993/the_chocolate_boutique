function whatTimeIsIt() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  onclick = setInterval(whatTimeIsIt, 1000);
const currentTimeElement = document.getElementById("time");
currentTimeElement.innerHTML = hours + ":" + minutes + ":" + seconds;
currentTimeElement.style.backgroundColor="green";
currentTimeElement.style.color="cyan";   
currentTimeElement.style.fontSize="30px";
currentTimeElement.style.fontFamily="Arial";
 
if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return hours + ":" + minutes + ":" + seconds;
}

console.log(whatTimeIsIt());
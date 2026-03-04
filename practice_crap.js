function myAbsoluteValueTestFunction() {
    var xAbsoluteValueTest = document.getElementById("myAbsoluteValueTestDIV");
    if (xAbsoluteValueTest.innerHTML === "Hello") {
        xAbsoluteValueTest.style.display = "block";
        xAbsoluteValueTest.innerHTML = Math.abs(-4.7);
        xAbsoluteValueTest.style.backgroundColor = "red";
        xAbsoluteValueTest.style.color = "white";
    } else {
        xAbsoluteValueTest.style.display = "none";
        xAbsoluteValueTest.innerHTML = "Hello";
    }
}


function myAccessKeyFunction() {
    let xAccessKey = document.getElementById("w3sAccesskey").accessKey;
    let xAccessKeyValue = document.getElementById("myAccesskeyDIV");
    if (xAccessKeyValue.innerHTML === "Hello" || xAccessKeyValue.style.display === "none") {
        xAccessKeyValue.style.display = "block";
        xAccessKeyValue.innerHTML = xAccessKey;
        xAccessKeyValue.style.backgroundColor = "green";
        xAccessKeyValue.style.color = "#ff99ff";
    } else {
        xAccessKeyValue.style.display = "none";
        xAccessKeyValue.innerHTML = "Hello";
        xAccessKeyValue.style.backgroundColor = "darkorange";
        xAccessKeyValue.style.color = "darkblue";
    }
}

function myAcosFunction() {
    let xAcos = document.getElementById("myArccosineDIV");
    let xAcosValue = document.getElementById("myArccosineDIV");
    if (xAcosValue.innerHTML === "Hello" || xAcosValue.style.display === "none") {
        xAcosValue.style.display = "block";
        xAcosValue.innerHTML = Math.acos(-1);
        xAcosValue.style.backgroundColor = "purple";
        xAcos.style.color = "white";
    } else {
        xAcosValue.style.display = "none";
        xAcosValue.innerHTML = "Hello";
        xAcosValue.style.backgroundColor = "darkorange";
        xAcosValue.style.color = "darkblue";
    }
}

/* From outside sources to help */

function myAbsoluteValueFunction() {
  var xAbsoluteValue = document.getElementById("myAbsoluteValueDIV");
  if (xAbsoluteValue.innerHTML === "Hello") {
    xAbsoluteValue.innerHTML = "Swapped text!";
    xAbsoluteValue.style.backgroundColor = "red";
    xAbsoluteValue.style.color = "white";
  } else {
    xAbsoluteValue.innerHTML = "Hello";
    xAbsoluteValue.style.backgroundColor = "darkorange";
    xAbsoluteValue.style.color = "darkblue";
  }
}

function accessKeyTest() {
    let accessKeyTestValue = document.getElementById("w3s").accessKey;
    let accessKeyTestDIV = document.getElementById("demo");
    if (accessKeyTestDIV.innerHTML === "Hello" || accessKeyTestDIV.style.display === "none") {
        accessKeyTestDIV.style.display = "block";
        accessKeyTestDIV.innerHTML = accessKeyTestValue;
        accessKeyTestDIV.style.backgroundColor = "green";
        accessKeyTestDIV.style.color = "#ff99ff";
    } else {
        accessKeyTestDIV.style.display = "none";
        accessKeyTestDIV.innerHTML = "Hello";
        accessKeyTestDIV.style.backgroundColor = "darkorange";
        accessKeyTestDIV.style.color = "darkblue";
    }
}

let key = document.getElementById("w3s").accessKey;
document.getElementById("demo").innerHTML = key;

let xAccessKeyTest = document.getElementById("w3sAccesskey").accessKey;
document.getElementById("myAccesskeyDIV").innerHTML = xAccessKeyTest;
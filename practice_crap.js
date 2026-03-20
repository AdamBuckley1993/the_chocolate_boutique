function myAbsoluteValueTestFunction() {
    var xAbsoluteValueTest = document.getElementById("myAbsoluteValueTestDIV");
    if (xAbsoluteValueTest.innerHTML === "-4.7") {
        xAbsoluteValueTest.style.display = "block";
        xAbsoluteValueTest.innerHTML = Math.abs(-4.7);
        xAbsoluteValueTest.style.backgroundColor = "red";
        xAbsoluteValueTest.style.color = "white";
    } else {
        xAbsoluteValueTest.style.display = "none";
        xAbsoluteValueTest.innerHTML = "-4.7";
    }
}


function myAccessKeyFunction() {
    let xAccessKey = document.getElementById("w3sAccesskey").accessKey;
    let xAccessKeyValue = document.getElementById("myAccesskeyDIV");
    if (xAccessKeyValue.innerHTML === "Accesskey") {
        xAccessKeyValue.style.display = "block";
        xAccessKeyValue.innerHTML = xAccessKey;
        xAccessKeyValue.style.backgroundColor = "green";
        xAccessKeyValue.style.color = "#ff99ff";
    } else {
        xAccessKeyValue.style.display = "none";
        xAccessKeyValue.innerHTML = "Accesskey";
        xAccessKeyValue.style.backgroundColor = "darkorange";
        xAccessKeyValue.style.color = "darkblue";
    }
}

function myAcosFunction() {
    let xAcos = document.getElementById("myArccosineDIV");
    let xAcosValue = document.getElementById("myArccosineDIV");
    if (xAcosValue.innerHTML === "Hello") {
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

function myAcoshFunction() {
    let xAcosh = document.getElementById("myHyperbolicArccosineDIV");
    let xAcoshValue = document.getElementById("myHyperbolicArccosineDIV");
    if (xAcoshValue.innerHTML === "Hello") {
        xAcoshValue.style.display = "block";
        xAcoshValue.innerHTML = Math.acosh(1);
        xAcoshValue.style.backgroundColor = "purple";
        xAcosh.style.color = "white";
    } else {
        xAcoshValue.style.display = "none";
        xAcoshValue.innerHTML = "Hello";
        xAcoshValue.style.backgroundColor = "darkorange";
        xAcoshValue.style.color = "darkblue";
    }
}

function myActiveElementFunction() {
    const xActiveElement = document.getElementById("myActiveElementDIV");
    if (xActiveElement.innerHTML === "Hello") {
        xActiveElement.style.display = "block";
        xActiveElement.innerHTML = document.activeElement.tagName;
        xActiveElement.style.backgroundColor = "blue";
        xActiveElement.style.color = "white";
    } else {
        xActiveElement.style.display = "none";
        xActiveElement.innerHTML = "Hello";
        xActiveElement.style.backgroundColor = "darkorange";
        xActiveElement.style.color = "darkblue";
    }
}

function myAddFunction() {
    const xLetters = new Set(["a", "b", "c"]);
    const xLettersDIV = document.getElementById("myAddDIV");
    xLetters.add("d");
    xLetters.add("e");
    if (xLettersDIV.innerHTML === "Hello") {
        xLettersDIV.style.display = "block";
        xLettersDIV.innerHTML = "The set has " + xLetters.size + " values." + " They are: " + Array.from(xLetters).join(", ");
        xLettersDIV.style.backgroundColor = "green";
        xLettersDIV.style.color = "white";
    } else {
        xLettersDIV.style.display = "none";
        xLettersDIV.innerHTML = "Hello";
        xLettersDIV.style.backgroundColor = "darkorange";
        xLettersDIV.style.color = "darkblue";
    }
}

document.addEventListener("click", myAddEventListenerFunction);

function myAddEventListenerFunction() {
    document.getElementById("myAddEventListenerDIV").style.backgroundColor = "magenta";
    document.getElementById("myAddEventListenerDIV").style.color = "cyan";
    document.getElementById("myAddEventListenerDIV").innerHTML = "You clicked the page!";
}

function myAdoptNodeFunction() {
    const xFrame = document.getElementById("myAdoptNodeDiv");
    const xh1 = xFrame.contentWindow.document.getElementsByTagName("H1")[0];
    const xNode = document.adoptNode(xh1);
    document.body.appendChild(xFrame);
    if (xFrame.innerHTML === "Hello") {
        xFrame.style.display = "block";
        xFrame.innerHTML = "";
        xFrame.appendChild(xNode);
        xFrame.style.backgroundColor = "indigo";
        xFrame.style.color = "lightyellow";
    } else {
        xFrame.style.display = "none";
        xFrame.innerHTML = "Hello";
        xFrame.style.backgroundColor = "darkorange";
        xFrame.style.color = "darkblue";
}
}

function myAfterFunction() {
    const xAfterDiv = document.getElementById("myAfterDiv");
    xAfterDiv.style.backgroundColor = "teal";
    xAfterDiv.style.color = "lightyellow";

    const xAfterDivPart = document.createElement("span");
    xAfterDivPart.innerHTML = "World!";

    xAfterDivPart.style.backgroundColor = "teal";
    xAfterDivPart.style.color = "lightyellow";
    xAfterDiv.after(xAfterDivPart);
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
    if (accessKeyTestDIV.innerHTML === "Hello") {
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

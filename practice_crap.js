function abV() {
    const abv1 = Math.abs(7.25);
    const abv2 = Math.abs(-7.25);
    const abv3 = Math.abs(null);
    const abv4 = Math.abs("Hello");
    const abv5 = Math.abs(2-3);
    document.getElementById("abv").innerHTML = abv1 + "<br>" + abv2 + "<br>" + abv3 + "<br>" + abv4 + "<br>" + abv5;
    abV.style.color = "yellow";

    if (abv1 === 7.25) {
        abv1.style.backgroundColor = "red";
    }
}
abV();

/*Works in HTML as JavaScript but not here*/
function accessK() {
    const key = document.getElementById("w3s").accessKey;
    document.getElementById("demo").innerHTML = "The accesskey is: " + key;
}
accessK();

function acos() {
    document.getElementById("acos").innerHTML = Math.acos(1);
}
acos();

function myFunction1() {
    const element = document.activeElement.tagName;
    document.getElementById("demo").innerHTML = element;
}
myFunction1();

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

/* From outside sources to help */

function myAbsoluteValueFunction() {
  var x = document.getElementById("myAbsoluteValueDIV");
  if (x.innerHTML === "Hello") {
    x.innerHTML = "Swapped text!";
    x.style.backgroundColor = "red";
    x.style.color = "white";
  } else {
    x.innerHTML = "Hello";
    x.style.backgroundColor = "darkorange";
    x.style.color = "darkblue";
  }
}
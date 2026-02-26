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
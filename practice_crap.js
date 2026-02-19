function abV() {
    const abv1 = Math.abs(7.25);
    const abv2 = Math.abs(-7.25);
    const abv3 = Math.abs(null);
    const abv4 = Math.abs("Hello");
    const abv5 = Math.abs(2-3);
    document.getElementById("abv").innerHTML = abv1 + "<br>" + abv2 + "<br>" + abv3 + "<br>" + abv4 + "<br>" + abv5;
}

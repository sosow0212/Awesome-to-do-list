const said = document.querySelector(".said");
const h1 = document.querySelector(".said-h1");
const NUM = 3;

const arr = ["I never dreamed about success, I worked for it.", "Do not try to be original, just try to be a good", "Do not be afraid to give up the good to go for the great."];
// arr 3개

function random() {
    const number = Math.floor(Math.random() * 3);
    return number;
}

function paint(sayNumber) {
    let what = arr[sayNumber];
    h1.innerText = what;
}

function gogo() {
    const randomNumber = random();
    paint(randomNumber);
}

function init() {
    gogo();
    setInterval(gogo, 3000);
}

init();
//------------------------------Knipperende tekst------------------------------//

const blinking = document.querySelector("h4");

function blinker() {
    if (blinking) {
        var d = blinking;
        d.style.color = (d.style.color == 'white' ? 'gray' : 'white');
        setTimeout('blinker()', 900);
    }
}

//-----------Bron: https://codepen.io/adamrifai/pen/doWgqv--------------//

//-----------------------------------Variabelen------------------------------------//
//-----------------------Importeren audio------------------//

const soundNothing = new Audio("./sfx/nothing.mp3");
const soundNothing2 = new Audio("./sfx/nothing2.mp3");
const soundNothing3 = new Audio("./sfx/nothing3.mp3");
const soundDouble1 = new Audio("./sfx/double1.mp3");
const soundDouble2 = new Audio("./sfx/double2.mp3");
const soundDouble3 = new Audio("./sfx/double3.mp3");
const soundDouble4 = new Audio("./sfx/double4.mp3");
const soundDouble5 = new Audio("./sfx/double5.mp3");
const soundDouble6 = new Audio("./sfx/double6.mp3");
const soundDouble7 = new Audio("./sfx/double7.mp3");
const soundDouble8 = new Audio("./sfx/double8.mp3");
const soundCashOut = new Audio("./sfx/cashout.mp3");
const soundCoins = new Audio("./sfx/coins.mp3");

//------------------------------classes oproepen------------------------------//

var background = document.querySelector(".double0");
var textScore = document.querySelector("h2");
var doubleCounter = document.querySelector("h3");
var textTotalScore = document.querySelector("p");
var textTotalWin = document.querySelector(".win");
var textTotalLoss = document.querySelector(".loss");

const redButton = document.getElementById("red");
const orangeButton = document.getElementById("orange");

var score = 0;
var totalScore = 500;
var stake = 10;
var totalWin = 0;
var totalLoss = 0;


textTotalScore.textContent = totalScore + " Coins";
textTotalWin.textContent = totalWin + " Coins";
textTotalLoss.textContent = totalLoss + " Coins";
textScore.textContent = score;


//-----------------------regelt de betaling------------------//

function firstPress() {
    if (score === 0) {
        score = 5;
        totalScore -= stake;
        totalLoss += stake;
    }
}

//-----------------------50/50 kans dat het verdubbelt------------------//


function buttonPress() {

    firstPress()

    const randomNumber = Math.floor(Math.random() * 2);

    if (randomNumber === 0) {
        score *= 2;
    } else {
        score = 0;
    }

    counter()
    textTotalScore.textContent = totalScore + " Coins";
    textTotalLoss.textContent = totalLoss + " Coins";
    textScore.textContent = score;
}


//-----------------------Stappen uitvoeren bij het verdubbelen------------------//

var sound = soundNothing;

function counter() {
    if (score === 0) {
        doubleCounter.textContent = "NOTHING";
        background.classList.remove("double1");
        background.classList.remove("double2");
        background.classList.remove("double3");
        background.classList.remove("double4");
        background.classList.remove("double5");
        background.classList.remove("double6");
        background.classList.remove("double7");
        background.classList.remove("double8");
        background.classList.add("double0");
        soundDouble4.pause();
        soundDouble5.pause();
        soundDouble6.pause();
        soundDouble7.pause();
        soundDouble8.pause();
        sound.play();
        sound = soundNothing;
    }

    if (score === 10) {
        doubleCounter.textContent = "DOUBLE x1";
        background.classList.add("double1");
        sound.pause();
        soundDouble1.play();
        sound = soundNothing;
    }
    if (score === 20) {
        doubleCounter.textContent = "DOUBLE x2";
        background.classList.add("double2");
        soundDouble2.play();
        sound = soundNothing;
    }
    if (score === 40) {
        doubleCounter.textContent = "DOUBLE x3";
        background.classList.add("double3");
        soundDouble3.play();
        sound = soundNothing2;
    }
    if (score === 80) {
        doubleCounter.textContent = "DOUBLE x4";
        background.classList.add("double4");
        background.classList.remove("double3")
        soundDouble4.play();
        sound = soundNothing2;
    }
    if (score === 160) {
        doubleCounter.textContent = "DOUBLE x5";
        background.classList.add("double5");
        soundDouble5.play();
        sound = soundNothing2;
    }
    if (score === 320) {
        doubleCounter.textContent = "DOUBLE x6";
        background.classList.add("double6");
        soundDouble6.play();
        sound = soundNothing3;
    }
    if (score === 640) {
        doubleCounter.textContent = "DOUBLE x7";
        background.classList.add("double7");
        soundDouble7.play();
        sound = soundNothing3;
    }
    if (score === 1280) {
        doubleCounter.textContent = "DOUBLE x8";
        background.classList.add("double8");
        soundDouble8.play();
        sound = soundNothing3;
    }
    if (score === 2560) {
        doubleCounter.textContent = "DOUBLE x9";
        background.classList.add("double9");
        soundDouble8.play();
        sound = soundNothing3;
    }
    if (score === 6120) {
        doubleCounter.textContent = "DOUBLE x10";
        background.classList.add("double10");
        soundDouble8.play();
        sound = soundNothing3;
    }

}

//-----------------------De coins uit laten betalen------------------//

function cashOut() {
    if (score=== 0){
        sound = soundNothing;
        sound.play();
    } else {
    totalScore = totalScore + score;
    totalWin = totalWin + score;
    score = 0;
    textTotalScore.textContent = totalScore + " Coins";
    textTotalWin.textContent = totalWin + " Coins";
    textScore.textContent = score;
    sound = soundNothing;
    soundCashOut.play();
    soundCoins.play();
    doubleCounter.textContent = "NOTHING";
    background.classList.remove("double1");
    background.classList.remove("double2");
    background.classList.remove("double3");
    background.classList.remove("double4");
    background.classList.remove("double5");
    background.classList.remove("double6");
    background.classList.remove("double7");
    background.classList.remove("double8");
    background.classList.add("double0");
}
}


//-----------------------klikken op de button------------------//  

redButton.addEventListener("click", buttonPress);
orangeButton.addEventListener("click", cashOut);





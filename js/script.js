
//------------------------------------Baby Groot------------------------------------//

const kleineGroot = document.querySelector(".groot-verstopt");

const buttonGroot = document.getElementById("grootknop");

buttonGroot.addEventListener("click", grootTevoorschijn);
function grootTevoorschijn() {
    kleineGroot.classList.toggle("groot-zichtbaar")
}

//------------------------------------Disco------------------------------------//

const balVerstopt = document.querySelector(".disco-verstopt");
const achtergrond = document.querySelector(".light-mode");

const buttonDisco = document.getElementById("discoknop");

buttonDisco.addEventListener("click", discoModus);

function discoModus() {
    balVerstopt.classList.toggle("disco-zichtbaar");
    achtergrond.classList.toggle("dark-mode");

}

//------------------------------------Cassette swapper (drag-drop)------------------------------------//

// VARIABELEN & CONSTANTEN ///////////////////

const nummerMixtape = document.getElementById("mixtape");
const speler = document.getElementById("player")

// EVENT LISTENER OP DIV's
nummerMixtape.addEventListener("dragstart", (event) => {
    dragged = event.target
})

// 2. Voorkom default gedrag bij drag over de dropDiv
speler.addEventListener("dragover", (event) => {
    event.preventDefault()
})

// 3. Event bij droppen van de div
speler.addEventListener("drop", (event) => {
    swapBandje()
    slepen.classList.remove("text-zichtbaar");
})

// Bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event
// Code mbv Berry Nieskens



//--------Sleep text------//

let slepen = document.querySelector(".text-ontzichtbaar");

nummerMixtape.addEventListener("click", stukjetekst);

function stukjetekst() {
    slepen.classList.toggle("text-zichtbaar");
}



//------------------------------------MUSIC PLAYER------------------------------------//

//---Volume 1---//
const nummerEen = new Audio("./music/Come and Get Your Love.mp3");
const nummerTwee = new Audio("./music/I Want You Back.mp3");
const nummerDrie = new Audio("./music/Escape.mp3");
const nummerVier = new Audio("./music/Hooked on a Feeling.mp3");
const nummerVijf = new Audio("./music/Spirit In The Sky.mp3");
const nummerZes = new Audio("./music/O-o-h Child.mp3");

//---Volume 2---//
const nummerZeven = new Audio("./music/Mr. Blue Sky.mp3");
const nummerAcht = new Audio("./music/The Chain.mp3");
const nummerNegen = new Audio("./music/Brandy.mp3");
const nummerTien = new Audio("./music/Fox On The Run.mp3");
const nummerElf = new Audio("./music/Guardians Inferno.mp3");
const nummerTwaalf = new Audio("./music/Southern Nights.mp3");

//---SFX---//
const audioKnopje = new Audio("./sfx/indrukken.wav")
const audioSwap = new Audio("./sfx/swappen.wav")

const aantalNummers = 6;

var oudNummer;
var randomGetal = 0;

var volumeOne = [nummerEen, nummerTwee, nummerDrie, nummerVier, nummerVijf, nummerZes];
var volumeTwo = [nummerZeven, nummerAcht, nummerNegen, nummerTien, nummerElf, nummerTwaalf];

// var nummerBandje = document.querySelector("button.bandjeknop");

var huidigBandje = volumeOne;

var huidigNummer = huidigBandje[0];


function swapBandje() {
    huidigNummer.pause();

    if (huidigBandje == volumeOne) {
        huidigBandje = volumeTwo;
        console.log("bandje 2 zit er in");
        document.getElementById("player").src = "./video/vol2.mp4";
        document.getElementById("mixtape").src = "./img/vol1.png"
    } else {
        huidigBandje = volumeOne;
        console.log("bandje 1 zit er in");
        document.getElementById("player").src = "./video/vol1.mp4";
        document.getElementById("mixtape").src = "./img/vol2.png"
    }

    huidigNummer = huidigBandje[0];

    huidigNummer.currentTime = 0
    document.getElementById('player').pause();
    audioSwap.play();
}

// code om het bandje terug te swappen van 2 naar 1


var playButton = document.getElementById("playbutton");
var pauseButton = document.getElementById("pausebutton");
var nextButton = document.getElementById("nextbutton");
var shuffleButton = document.getElementById("shufflebutton");



playButton.addEventListener("click", playMusic);
pauseButton.addEventListener("click", pauseMusic);
nextButton.addEventListener("click", nextMusic);
shuffleButton.addEventListener("click", shuffleMusic);



// muziek af spelen.
function playMusic() {
    audioKnopje.play();
    huidigNummer.play();
    document.getElementById('player').play();
}

// muziek af pauzeren.
function pauseMusic() {
    audioKnopje.play();
    huidigNummer.pause();
    document.getElementById('player').pause();
}

// Random getal genereren
function genereerGetal() {
    randomGetal = Math.random() * aantalNummers;
    randomGetal = Math.floor(randomGetal);
}

// muziek af shuffelen dmv random getal, kan ook niet 2x hetzelfde achter elkaar afspelen.
function shuffleMusic() {
    huidigNummer.pause();

    oudNummer = randomGetal;

    genereerGetal()

    while (oudNummer == randomGetal) {
        genereerGetal()
    }

    huidigNummer = huidigBandje[randomGetal];

    huidigNummer.currentTime = 0
    audioKnopje.play();
    huidigNummer.play();
    document.getElementById('player').play();
}


// muziek volgende nummer uit de Array pakken.
function nextMusic() {
    huidigNummer.pause();

    for (let i = 0; i < huidigBandje.length; i++) {
        if (huidigNummer == huidigBandje[i]) {
            if (i >= 5) {
                huidigNummer = huidigBandje[0];
            } else {
                huidigNummer = huidigBandje[i + 1];
            } break
        }
    }

    huidigNummer.currentTime = 0
    audioKnopje.play();
    huidigNummer.play();
    document.getElementById('player').play();

}


//code volume slider
// Bron: https://stackoverflow.com/questions/62160275/js-audio-volume-slider

let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function (e) {
    huidigNummer.volume = e.currentTarget.value / 100;
})

//------------------------------------Baby Groot TEST------------------------------------//

// const groteGroot = document.querySelector(".groot-zichtbaar");
// let grootZichtbaar = false;

// function grootZichtbaar(){
//     kleineGroot.classList.add("groot-zichtbaar")
//     audioKnopje.play();
// }

// function grootTevoorschijn(){
//     if (grootZichtbaar = false) {
//         groteGroot.classList.remove("groot-zichtbaar")
//         grootZichtbaar = true;
//         console.log("groot is verstopt");
//     } else if (grootZichtbaar = true){
//         kleineGroot.classList.add("groot-zichtbaar");
//         grootZichtbaar = false;
//         console.log("groot is zichtbaar");
//     }
// }




//ik had het eerst met een if-else statement maar kwam er achter via Fei dat er een toggle functie is.




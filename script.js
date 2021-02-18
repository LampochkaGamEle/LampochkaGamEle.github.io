'use strict'; //современный режим

window.onload = function() {

    const lamp = document.querySelector(".lamp");
    const audio = document.querySelector(".audio");
    audio.loop = "true";

    let switchLamp = false;

    lamp.addEventListener("click", ()=>{
        if (switchLamp == false) {
            lamp.src = "images/lamp_on.png";
            switchLamp = "on";
            audio.play();
        }
        else {
            lamp.src = "images/lamp_off.png";
            switchLamp = false;
            audio.pause();
        };
    });

};
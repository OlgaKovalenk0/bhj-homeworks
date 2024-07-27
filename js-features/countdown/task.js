'use strict'
let element = document.getElementById("timer")
let timer = Number(element.textContent);

const countTime  = function(){
    timer--;
    element.textContent = timer;
    if (timer === 0){
        clearInterval(counter);
        alert("Вы победили в конкурсе!");
    }
}

const counter = setInterval(countTime,1000);
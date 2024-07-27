'use strict'

const cookieElement = document.getElementById ('cookie');
const clicker__counterElement = document.getElementById('clicker__counter'); 
const clicker__speedElement = document.getElementById('clicker__speed');
let counter = 1; 
let lastClickTime = new Date();
 
cookieElement.addEventListener('click', function(){ 
    
    counter++;
    clicker__counterElement.textContent = counter; 
 
    cookieElement.width = counter % 2 ? 200 : 230;

    const currentClickTime = new Date ();
    const diff = currentClickTime - lastClickTime;
    const speed = (1/diff)*1000;
    clicker__speedElement.textContent = speed.toFixed(2);
    lastClickTime = currentClickTime;
    
});
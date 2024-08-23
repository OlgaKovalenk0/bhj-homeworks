'use strict';

window.addEventListener('scroll', event => {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => {
        const elementTopX = element.getBoundingClientRect().top;        
        const viewportHeight = window.innerHeight;
        if(elementTopX < viewportHeight) {
            element.classList.add('reveal_active')
        }
    })
});

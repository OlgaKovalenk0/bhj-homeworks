'use strict';

window.addEventListener('scroll', event => {
    const message = document.querySelector('div.reveal')
    const massageTopX = message.getBoundingClientRect().top;
    const massageBottomX = message.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;
    const condition = (massageTopX < (viewportHeight / 1.5) & massageBottomX >= (viewportHeight / 4))
    condition ? message.classList.add('reveal_active') : message.classList.remove('reveal_active');
})
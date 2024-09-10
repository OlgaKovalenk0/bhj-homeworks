const editor = document.getElementById('editor');
const clearAll = document.getElementById('clearAll');

editor.addEventListener('input', saveText);
window.addEventListener('load', printTextFromLocalStorage);
clearAll.addEventListener('click', clear);


function saveText() {
    localStorage.setItem('text', editor.value);
}

function printTextFromLocalStorage() {  
    editor.value = localStorage.getItem('text');    
}

function clear(event) {

    event.preventDefault();

    localStorage.removeItem('text');
    editor.value = '';
}
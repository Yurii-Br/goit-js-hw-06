'use strict'
const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', (event) =>  {
    const inputValue = event.target.value.trim();
    if (inputValue === '') {
        output.textContent = 'Anonymous';
    }
    else {
        output.textContent = inputValue;
    }
});
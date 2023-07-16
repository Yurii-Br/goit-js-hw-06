'use strict'
const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
   const inputVal = parseInt(input.dataset.length);
   const length = input.value.trim().length;

   if (inputVal === parseInt(length)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } 
  else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }

});
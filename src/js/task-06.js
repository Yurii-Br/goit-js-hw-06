'use strict'
const IN = document.getElementById('validation-input');

IN.addEventListener('blur', () => {
   const inpVal = parseInt(IN.dataset.length);
   const OWN_VAL = IN.value.length;

   if (inpVal === parseInt(OWN_VAL)) {
    IN.classList.add('valid');
    IN.classList.remove('invalid');
  } 
  else {
    IN.classList.remove('valid');
    IN.classList.add('invalid');
  }

});
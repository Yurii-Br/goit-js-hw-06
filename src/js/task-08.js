'use strict'

const form = document.querySelector('.login-form');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isFormValid = true;
  const formData = {};

  for (let i = 0; i < form.elements.length; i++) {
    const field = form.elements[i];

    if (field.type !== 'submit') {
      if (field.value === '') {
        isFormValid = false;
        break;
      }

      formData[field.name] = field.value;
    }
  }

  if (isFormValid) {
    console.log(formData);
    form.reset();
  } else {
    alert('All fields must be filled in');
  }
});




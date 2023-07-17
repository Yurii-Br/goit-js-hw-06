'use strict';

const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = form.elements.email;
  const password = form.elements.password;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const userData = {
    email: email.value,
    password: password.value
  };

  console.log(userData);
  form.reset();
}
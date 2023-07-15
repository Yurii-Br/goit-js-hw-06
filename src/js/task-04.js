'use strict'
let CountValue = 0;
let value = document.getElementById('value');

const BTN_PLUS = document.querySelector('[data-action="increment"]');
const BTN_MINUS = document.querySelector('[data-action="decrement"]');

value.textContent = CountValue.toString();

BTN_PLUS.addEventListener("click", () => {
  CountValue += 1;
  value.textContent = CountValue.toString();
});

BTN_MINUS.addEventListener("click", () => {
  CountValue -= 1;
  value.textContent = CountValue.toString();
});


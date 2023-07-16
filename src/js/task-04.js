'use strict'
let countValue = 0;
let value = document.getElementById('value');

const btnPlus = document.querySelector('[data-action="increment"]');
const btnMinus = document.querySelector('[data-action="decrement"]');

value.textContent = countValue.toString();

btnPlus.addEventListener("click", () => {
  countValue += 1;
  value.textContent = countValue.toString();
});

btnMinus.addEventListener("click", () => {
  countValue -= 1;
  value.textContent = countValue.toString();
});


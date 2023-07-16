'use strict'
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');
const fragment = document.createDocumentFragment()

const newElement = ingredients.forEach(item => {
  const newElement = document.createElement('li');
  newElement.classList.add('item');
  newElement.textContent = item;
  fragment.appendChild(newElement);
})
list.appendChild(fragment);



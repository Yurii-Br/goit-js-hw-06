
'use strict';

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');

const newElements = ingredients.map(item => {
  const newElement = document.createElement('li');
  newElement.classList.add('item');
  newElement.textContent = item;
  return newElement;
});

list.append(...newElements);
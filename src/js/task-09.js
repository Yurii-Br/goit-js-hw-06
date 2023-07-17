function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let color = getRandomHexColor();

const background = document.querySelector('body');

const nameColor = document.querySelector('.color');

const btn = document.querySelector('.change-color');


btn.addEventListener('click', () => {
  background.style.backgroundColor = color;
  nameColor.textContent = color;
})

// Только теперь это работает 1 раз 
// но я думал что нужно при каждом нажатии 
// мало информации в техническом задании 



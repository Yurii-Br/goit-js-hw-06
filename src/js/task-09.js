function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const background = document.querySelector('body');

const nameColor = document.querySelector('.color');

const btn = document.querySelector('.change-color');


btn.addEventListener('click', () => {
  background.style.backgroundColor = `${getRandomHexColor()}`;
  nameColor.textContent = background.style.backgroundColor;
})



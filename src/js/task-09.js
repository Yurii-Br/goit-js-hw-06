function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const BACKGROUND = document.querySelector('body');

const nameColor = document.querySelector('.color');

const BTN = document.querySelector('.change-color');


BTN.addEventListener('click', () => {
  BACKGROUND.style.backgroundColor = `${getRandomHexColor()}`;
  nameColor.textContent = `${getRandomHexColor()}`;
})


// Это сам написал без чата и поиска гугл все остальное без чата не пошло 
// а задание 8 это вообще хардкор какой то 
// Если можно фидбек как учить лучше js потому что очень туго идет 

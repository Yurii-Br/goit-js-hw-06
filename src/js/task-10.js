function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const obj = document.querySelector('input[type="number"]');
const divBoxes = document.getElementById('boxes');

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');


function createBoxes(amount){
 
   let size = 30;
   amount = obj.value;
   if (amount > 100 || amount  < 1 ){
    alert('You can enter from 1 to 100')
   }

   // Create Element DIV
  else{
    for (let i = 0 ; i <= amount - 1 ; ++i ){
     const elem = document.createElement('div');
     elem.style.width = `${size}` + "px";
     elem.style.height =  `${size}` + "px";
     elem.classList.add('box')
     elem.style.backgroundColor = `${getRandomHexColor()}`;
      
     divBoxes.appendChild(elem);
    size += 10;
  }
  }
}


  function destroyBoxes() {
     const elem = document.querySelectorAll('.box');
      
     for (let i = 0 ; i < elem.length; i++){
        elem[i].remove();
        console.log(i)
      }

  }


btnCreate.addEventListener("click",createBoxes);

btnCreate.addEventListener("click",destroyBoxes);


// не доделал нет времени уже  но проблема есть в том что срабатывают оба слушателя 
// одновременно и не понятно как это убрать 


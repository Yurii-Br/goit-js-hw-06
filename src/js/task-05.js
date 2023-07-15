const IN = document.getElementById('name-input');
const OUT = document.getElementById('name-output');

IN.addEventListener('input', (event) =>  {
    const inputValue = event.target.value;
    if (inputValue === '') {
        OUT.textContent = 'Anonymous';
    }
    else {
        OUT.textContent = inputValue;
    }
});
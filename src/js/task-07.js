const range = document.getElementById('font-size-control');
const txt = document.getElementById('text');

range.value = range.min;
range.addEventListener('input', () => txt.style.fontSize = range.value + 'px');
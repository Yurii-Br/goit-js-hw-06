const RANGE = document.getElementById('font-size-control');
const TXT = document.getElementById('text');

RANGE.value = RANGE.min;
RANGE.addEventListener('input', () => TXT.style.fontSize = RANGE.value + 'px');
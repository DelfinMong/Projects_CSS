const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.getElementById('.container');

open.addEventListener('clikc', () => container.classList.add('show-nav'))

close.addEventListener('clikc', () => container.classList.remove('show-nav'))



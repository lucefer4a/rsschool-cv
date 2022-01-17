const lang = document.querySelectorAll('span');

lang.forEach(item => item.addEventListener('click', () => {
    lang.forEach(item => item.classList.toggle('gold'))
}))
const menuBtn = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const bar = document.querySelector('.bars');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menu.classList.add('open');
        bar.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menu.classList.remove('open');
        bar.classList.add('open');
        menuOpen = false;
    }
});
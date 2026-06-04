const burger = document.querySelector('.header__burger');
const menu = document.querySelector('header nav');

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('header__burger')) {
        burger.classList.toggle('_active');
        menu.classList.toggle('_open');
    }
})

// gestion du burger menu


const burger = document.querySelector('.header_nav_burger_container');

const menu = document.querySelector('.header_nav_menu');

let isOpened = false;

burger.addEventListener('pointerdown', () => {
    if(!isOpened) {
        menu.classList.add('active');
        burger.classList.add('active');
        document.body.style.overflow = "hidden";
        isOpened = true;
    }
    else {
        menu.classList.remove('active');
        burger.classList.remove('active');
        document.body.style.overflow = "auto";
        isOpened = false;
    }
})

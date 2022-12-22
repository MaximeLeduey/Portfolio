
// animation au scroll des projets 

const slider = document.querySelector('.projects_slider');
let activeItemNbr = 1;


slider.addEventListener('scroll', () => {
    if(slider.scrollLeft < 250) {
        activeItemNbr = 1;
    }
    else if(slider.scrollLeft < 500) {
        activeItemNbr = 2;
    }
    else {
        activeItemNbr = 3;
    }
    const items = document.querySelectorAll('.projects_item');
    items.forEach(item => {
        if(item.classList.contains(`item-${activeItemNbr}`)) {
            item.classList.remove('inactive');
            item.classList.add('active');
        }
        else {
            item.classList.remove('active');
            item.classList.add('inactive');
        }
    })
    // console.log(slider.scrollLeft);
})




// gestion du burger menu


const burger = document.querySelector('.header_nav_burger_container');

const menu = document.querySelector('.header_nav_menu');

let isOpened = false;

burger.addEventListener('pointerdown', () => {
    if(!isOpened) {
        menu.classList.add('active');
        burger.classList.add('active');
        isOpened = true;
    }
    else {
        menu.classList.remove('active');
        burger.classList.remove('active');
        isOpened = false;
    }
})

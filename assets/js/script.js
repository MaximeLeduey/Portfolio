
// animation au scroll des projets 

// const slider = document.querySelector('.projects_slider');
// let activeItemNbr = 1;


// slider.addEventListener('scroll', () => {
//     if(slider.scrollLeft < 250) {
//         activeItemNbr = 1;
//     }
//     else if(slider.scrollLeft < 500) {
//         activeItemNbr = 2;
//     }
//     else {
//         activeItemNbr = 3;
//         slider.removeEventListener('scroll', () => {
//             console.log('remove');
//         }, true)
//     }
//     const items = document.querySelectorAll('.projects_item');
//     items.forEach(item => {
//         if(item.classList.contains(`item-${activeItemNbr}`)) {
//             item.classList.add('active');
//         }
//         else {
//             item.classList.remove('active');
//         }
//     })
//     console.log(slider.scrollLeft);
// }, true)

const slider = document.querySelector('.projects_slider'),
    slides = document.querySelectorAll('.projects_item'),
    slideSize = 500;


let clicPosition = 0,
    dragPosition = 0,
    startPosition = 0,
    endPosition = 0,
    limit = 70;

slider.addEventListener('pointerdown', dragStart);

function dragStart(e) {

    e.preventDefault();

    slider.style.left = slider.startPosition;

    clicPosition = e.clientX;

    document.addEventListener('pointermove', dragging);
    document.addEventListener('pointerup', dragEnd);

}

function dragging(e) {

    e.preventDefault();
    
    dragPosition = clicPosition - e.clientX;

    console.log(dragPosition);
    clicPosition = e.clientX;

    if(slider.offsetLeft - dragPosition > 0) {
        console.log('stop');
        return;
    }

    slider.style.left = (slider.offsetLeft - dragPosition) + "px";

    console.log(slider.offsetLeft);
}

function dragEnd(e) {

    e.preventDefault();

    console.log('fini')
}


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

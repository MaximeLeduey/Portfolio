// smooth scroll

const links = [...document.querySelectorAll('nav a')];

const sections = [...document.querySelectorAll('section')];

let sectionsPosition;

function calcPosition() {
    sectionsPosition = sections.map(section => (section.offsetTop - 100));
}

calcPosition();

links.forEach(link => link.addEventListener('click', addSmoothScroll));

function addSmoothScroll(e) {
    const linkIndex = links.indexOf(e.target);
    window.scrollTo({
        top: sectionsPosition[linkIndex],
        behavior: "smooth"
    })
}

window.addEventListener('resize', calcPosition);


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

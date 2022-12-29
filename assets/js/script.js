const links = [...document.querySelectorAll('nav li')];

const sections = [...document.querySelectorAll('section')];

// smooth scroll 

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

// scrollspy

window.onscroll = () => {

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 550;
        let height = section.offsetHeight;
        let className = section.getAttribute('class');

        if(top >= offset && top <= offset + height) {
            links.forEach(link => link.classList.remove('active'));
            document.getElementById(className).classList.add('active');
        }
    })

}




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

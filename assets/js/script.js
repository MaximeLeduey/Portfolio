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


// gestion des projets


const projectsSlider = document.querySelector('.projects_slider');

fetch('../assets/data/data.json')
.then(response => response.json())
.then(data => {
    data.projects.map(project => {
        const html = `  <div class="projects_item item-1">
        <p class="projects_item_title">${project.title}</p>
        <p class="projects_item_subtitle">${project.subtitle}</p>
        <div class="projects_item_img_container">
            <img class="projects_item_img_container_image" src="${project.img}" alt="image de projet numero 1">
        </div>
        <a href="https://github.com/MaximeLeduey/Trombinoscope"><button class="btn-secondary">Voir le projet</button></a>
    </div>`;
        projectsSlider.innerHTML += html;
    })
} )


// gestion des skills 

const skillsSlider = document.querySelector('.skills_list');

fetch('../assets/data/data.json')
.then(response => response.json())
.then(data => {
    data.skills.map(skillGroup => {
       

    })
} )

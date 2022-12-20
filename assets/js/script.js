
// animation au scroll des projets 

const slider = document.querySelector('.projects_slider');
let activeItemNbr = 1;

function addClass() {
    const itemToSelect = `.projects .item-${activeItemNbr}`;
    const currentItemActive = document.querySelector(itemToSelect);
    currentItemActive.classList.add('active');
}

function removeClass() {
    const itemToSelect = `.projects .item-${activeItemNbr}`;
    const currentItemActive = document.querySelector(itemToSelect);
    currentItemActive.classList.remove('active');
}

slider.addEventListener('mouseup', () => {
    if(slider.scrollLeft > 600) {
        activeItemNbr = 3;
        addClass();
    }
    else if(slider.scrollLeft > 300) {
        activeItemNbr = 2;
        addClass();
    }
    else {
        activeItemNbr = 1;
        addClass();
    }
    // console.log(slider.scrollLeft)
})

addClass();

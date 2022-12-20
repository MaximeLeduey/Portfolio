
// animation au scroll des projets 

const slider = document.querySelector('.projects_slider');
let activeItemNbr = 1;

slider.addEventListener('touchend', () => {
    if(slider.scrollLeft > 600) {
        activeItemNbr = 3;
    }
    else if(slider.scrollLeft > 300) {
        activeItemNbr = 2;
    }
    else {
        activeItemNbr = 1;
    }
    const items = document.querySelectorAll('.projects_item');
    items.forEach(item => {
        if(item.classList.contains(`item-${activeItemNbr}`)) {
            item.classList.add('active');
        }
        else {
            item.classList.remove('active');
        }
    })
    
})



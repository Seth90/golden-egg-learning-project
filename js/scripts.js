const swiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }

});

window.addEventListener('load', overflowTabs);
window.addEventListener('resize', overflowTabs);

function overflowTabs () {
    let outerTabs = document.querySelector('.tabs__container');
    let innerTabs = document.querySelector('.tabs');

    if (innerTabs.offsetWidth > outerTabs.offsetWidth) {
        innerTabs.classList.add('overflow');
    } else {
        innerTabs.classList.remove('overflow');
    }
}



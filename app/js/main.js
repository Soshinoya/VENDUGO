// Create Sliders
const mainSlider = new DotSlider({
    dotClass: 'main-slider__dot',
    slideClass: 'main-slider__item',
    dotsInnerClass: 'main-slider__dots-inner',
    btnClass: 'main-slider__btn',
    btnClassInner: 'main-slider__btn-inner',
});

const aboutDotSlider = new DotSlider({
    dotClass: 'about__dot-slider__dot',
    slideClass: 'about__dot-slider__item',
    dotsInnerClass: 'about__dot-slider__inner',
    btnClass: 'about__dot-slider__btn',
    btnClassInner: 'about__dot-slider__btn-inner',
});

const aboutDragSlider = new DragSlider({
    slideClass: 'about__slider',
});



// Rest Code

// Optimize Title Text
if (document.body.offsetWidth < 1400) {
    changeTitleText();
};

window.addEventListener('resize', () => {
    if (document.body.offsetWidth < 1400) {
        changeTitleText();
    };
});

function changeTitleText() {
    document.querySelectorAll('.title').forEach(title => {
        title.textContent = title.textContent.trim()
        if (title.textContent.length > 50) {
            title.textContent = title.textContent
                .split('')
                .splice(0, 46)
                .join('');
            title.textContent += '...';
        };
    });
};

$(function () {

    // Burger Menu
    $('.header-menu__btn').on('click', function () {
        $('.menu').toggleClass('menu--active');
        $(this).toggleClass('header-menu__btn-resolve');
        if ($('.menu').hasClass('menu--active')) {
            bodyOverFlow(true, document.querySelector(`.${mainSlider.btnClass}--left`), document.querySelector(`.${mainSlider.btnClass}--right`));
        } else {
            bodyOverFlow(false, document.querySelector(`.${mainSlider.btnClass}--left`), document.querySelector(`.${mainSlider.btnClass}--right`));
        }
    });

});

function bodyOverFlow(param, elem1, elem2) {
    param ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
    param ? document.querySelectorAll('section').forEach(section => section.style.display = 'none')
    : document.querySelectorAll('section').forEach(section => section.style.display = 'block');
    param ? document.querySelector('footer').style.display = 'none' : document.querySelector('footer').style.display = 'block';
};
// Variables
const dotClass = 'main-slider__dot';
const slideClass = 'main-slider__item';
const slideArray = document.querySelectorAll(`.${slideClass}`);
const dotsInner = document.querySelector('.main-slider__dots-inner');
const DOTS_COUNT = slideArray.length;

// Create Dots
for (let i = 0; i < DOTS_COUNT; i++) {
    const dot = document.createElement('li');
    dot.classList.add(dotClass);
    dot.setAttribute(dotClass, i);
    dotsInner.append(dot);
};

const dotsArray = document.querySelectorAll(`.${dotClass}`);

// Change Class
dotsArray[0].classList.add(`${dotClass}--active`);
slideArray[0].classList.add(`${slideClass}--active`);

// Check Click
for (const dot of dotsArray) {
    dot.addEventListener('click', () => classChange(dot));
};

function classChange(e) {
    for (const dot of dotsArray) {
        dot.classList.remove(`${dotClass}--active`);
    };
    for (const slide of slideArray) {
        slide.classList.remove(`${slideClass}--active`);
    };
    e.classList.add(`${dotClass}--active`);
    slideArray[e.getAttribute(dotClass)].classList.add(`${slideClass}--active`);
};
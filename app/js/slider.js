// Dot Slider
class DotSlider {

    constructor(obj = {}) {
        this.dotClass = obj.dotClass;
        this.slideClass = obj.slideClass;
        this.dotsInnerClass = obj.dotsInnerClass;

        this.slideArray = document.querySelectorAll(`.${this.slideClass}`);
        this.dotsInner = document.querySelector(`.${this.dotsInnerClass}`);
        this.DOTS_COUNT = this.slideArray.length;

        this.createDots();
    };

    createDots() {
        for (let i = 0; i < this.DOTS_COUNT; i++) {
            const dot = document.createElement('li');
            dot.classList.add(this.dotClass);
            dot.setAttribute(this.dotClass, i);
            this.dotsInner.append(dot);
        };
        this.dotsArray = document.querySelectorAll(`.${this.dotClass}`);
        this.firstClassChange();
    };

    firstClassChange() {
        this.dotsArray[0].classList.add(`${this.dotClass}--active`);
        this.slideArray[0].classList.add(`${this.slideClass}--active`);
        this.checkClick();
    };

    checkClick() {
        for (const dot of this.dotsArray) {
            dot.addEventListener('click', () => this.classChange(dot));
        };
    };

    classChange(e) {
        for (const dot of this.dotsArray) {
            dot.classList.remove(`${this.dotClass}--active`);
        };
        for (const slide of this.slideArray) {
            slide.classList.remove(`${this.slideClass}--active`);
        };
        e.classList.add(`${this.dotClass}--active`);
        this.slideArray[e.getAttribute(this.dotClass)].classList.add(`${this.slideClass}--active`);
    };
};

// --------------------------------------
// Drag Slider
class DragSlider {

    constructor(obj = {}) {
        this.slideClass = obj.slideClass;
        this.startCoordX = 0;
        this.position = 0;
        this.sliderInner = document.querySelector(`.${this.slideClass}`);

        this.checkDrag();
    };

    checkDrag() {
        this.sliderInner.addEventListener('drag', (e) => {
            let p = this.position - (this.startCoordX - e.clientX);
            gsap.to(this.sliderInner, {
                x: p,
            });
        });
        this.sliderInner.addEventListener('dragstart', (e) => this.startCoordX = e.clientX);
    };
    
};
// Dot Slider
class DotSlider {

    constructor(obj = {}) {
        this.dotClass = obj.dotClass;
        this.slideClass = obj.slideClass;
        this.dotsInnerClass = obj.dotsInnerClass;

        obj?.btnClass ? this.btnClass = obj.btnClass : this.btnClass = '';
        if (obj?.btnClassInner)  {
            this.btnClassInner = obj.btnClassInner;
            this.btnInner = document.querySelector(`.${obj.btnClassInner}`);
        };

        this.slideArray = document.querySelectorAll(`.${this.slideClass}`);
        this.dotsInner = document.querySelector(`.${this.dotsInnerClass}`);

        this.slidesCount = this.slideArray.length;
        this.DOTS_COUNT = this.slidesCount;
        this.counter = 0;

        this.createDots();
        this.btnClass !== '' ? this.createBtn() : 0;
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

    createBtn() {

        const btnLeft = document.createElement('button');
        const btnRight = document.createElement('button');

        btnLeft.classList.add(`${this.btnClass}--left`);
        btnRight.classList.add(`${this.btnClass}--right`);

        this.btnInner.append(btnLeft);
        this.btnInner.append(btnRight);

        this.btnL = document.querySelector(`.${this.btnClass}--left`);
        this.btnR = document.querySelector(`.${this.btnClass}--right`);

        this.btnArray = [];
        this.btnArray[0] = this.btnL;
        this.btnArray[1] = this.btnR;

        this.checkClickBtn();

    };

    firstClassChange() {

        this.dotsArray[0].classList.add(`${this.dotClass}--active`);
        this.slideArray[0].classList.add(`${this.slideClass}--active`);
        this.checkClickDot();

    };

    checkClickDot() {

        for (const dot of this.dotsArray) {
            dot.addEventListener('click', () => this.classChange(dot));
        };

    };

    checkClickBtn() {

        this.btnArray[0].addEventListener('click', () => {
            if (this.counter > 0) {
                this.counter--;
                this.classChange('btn');
            };
        });

        this.btnArray[1].addEventListener('click', () => {
            if (this.counter < this.slidesCount - 1) {
                this.counter++;
                this.classChange('btn');
            };
        });

    };

    classChange(e) {

        for (const slide of this.slideArray) {
            slide.classList.remove(`${this.slideClass}--active`);
        };
        for (const dot of this.dotsArray) {
            dot.classList.remove(`${this.dotClass}--active`);
        };
        if (e !== 'btn') {
            e.classList.add(`${this.dotClass}--active`);
            this.slideArray[e.getAttribute(this.dotClass)].classList.add(`${this.slideClass}--active`);
            this.counter = e.getAttribute(this.dotClass);
        } else {
            this.slideArray[this.counter].classList.add(`${this.slideClass}--active`);
            this.dotsArray[this.counter].classList.add(`${this.dotClass}--active`);
        };

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

        this.checkEvent();
    };

    checkEvent() {

        this.sliderInner.addEventListener('drag', (e) => {
            changePos(e);
        });

        this.sliderInner.addEventListener('dragend', (e) => {
            changePos(e);
        });

        let changePos = (event) => {
            let p = this.startCoordX - (this.startCoordX + event.screenX);
            gsap.to(this.sliderInner, {
                x: p,
            });
        };

        this.sliderInner.addEventListener('dragstart', (e) => this.startCoordX = e.screenX);
        
    };

};
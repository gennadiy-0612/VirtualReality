/* use strict*/
/*! lazysizes - v5.3.2 */


let shch = {};
shch.addDetect = function () {

    this.checkVision = function (init) {
        const options = {
            rootMargins: '500px 0',
            threshold: [0.1]
        };

        function vdHandler(els) {
            els.forEach((data) => {
                if (data.intersectionRatio > .01) {
                    data.target.classList.add(init.animationName);
                }
            });
        }

        const vd = new IntersectionObserver(vdHandler, options);

        const cImgs = document.querySelectorAll(init.selector);

        cImgs.forEach((el) => {
            vd.observe(el);
        });
    }
}

shch.InSlide = {
    addEv: 1,
    startClass: 1,
    actSelector: 'actInSlide1',
    unActSelector: 'unActInSlide1',
    prevDisplay: {},
    display: 0,
    currentDisplay: document.querySelectorAll('.outSlideBigImg')[0],
    frameIn: document.querySelectorAll('.outSlideBigImg'),
    frameInLength: document.querySelectorAll('.outSlideBigImg').length,
    moveNext: function () {
        this.prevDisplay = this.frameIn[this.display];
        this.display++;
        if (this.display < this.frameInLength) {
            this.changeDisplay();
        } else {
            this.display = this.frameInLength - 1;
            return true;
        }
    },
    movePrev: function () {
        this.prevDisplay = this.frameIn[this.display];
        this.display--;
        if (this.display < 0) {
            this.prevDisplay = this.frameIn[0];
            this.display = 0;
            return true;
        } else {
            this.changeDisplay();
        }
    },
    changeDisplay: function () {
        if (this.addEv === 1) {
            this.frameIn[0].addEventListener('load', this.addVision.bind(shch.InSlide));
            this.addEv = 0;
        }
        this.currentDisplay = this.frameIn[this.display];
        this.frameIn[0].setAttribute('src', this.frameIn[this.display].getAttribute('data-src'));
    },
    addVision: function () {
        if (this.startClass) {
            this.frameIn[0].classList.add('AppAnim0');
            this.frameIn[0].classList.remove('AppAnim1');
            this.startClass = 0
        } else {
            this.frameIn[0].classList.add('AppAnim1');
            this.frameIn[0].classList.remove('AppAnim0');
            this.startClass = 1;
            console.log(this)
        }
    }
}
shch.OutSlide = {
    addEv: 1,
    startClass: 1,
    actSelector: 'actInSlide1',
    unActSelector: 'unActInSlide1',
    prevDisplay: {},
    display: 0,
    currentDisplay: document.querySelectorAll('.outSlideBigImg')[0],
    frameIn: document.querySelectorAll('.outSlideBigImg'),
    frameInLength: document.querySelectorAll('.outSlideBigImg').length,
    next: function () {
        this.prevDisplay = this.frameIn[this.display];
        this.display++;
        if (this.display < this.frameInLength) {
            this.changeDisp();
        } else {
            this.display = this.frameInLength - 1;
            return true;
        }
    },
    prev: function () {
        this.prevDisplay = this.frameIn[this.display];
        this.display++;
        if (this.display < this.frameInLength) {
            this.changeDisp();
        } else {
            this.display = this.frameInLength - 1;
            return true;
        }
    },
    changeDisp: function () {
        console.log('ggg')
        if (this.addEv === 1) {
            this.frameIn[0].addEventListener('load', this.addVis.bind(shch.OutSlide));
            this.addEv = 0;
        }
        this.currentDisplay.classList.remove('biggerSlideAct');
        this.currentDisplay = this.frameIn[this.display];
        this.currentDisplay.classList.add('biggerSlideAct');
    },
    addVis: function () {
        if (this.startClass) {
            this.frameIn[0].classList.add('AppAnim0');
            this.frameIn[0].classList.remove('AppAnim1');
            this.startClass = 0
        } else {
            this.frameIn[0].classList.add('AppAnim1');
            this.frameIn[0].classList.remove('AppAnim0');
            this.startClass = 1;
            console.log(this)
        }
    }
}
shch.switchBigIMG = function (selectorLittle) {
    this.tags = document.querySelectorAll(selectorLittle);
    this.tagAll = document.querySelectorAll(selectorLittle).length;
    this.changeBig = function () {
        for (this.tagStart = 0; this.tagStart < this.tagAll; this.tagStart++) {
            this.tags[this.tagStart].addEventListener('click', this.switchIt);
            this.tags[this.tagStart].numberItem = this.startClass;
        }
    }
    this.switchIt = function () {
        let num = this.getAttribute('data-id');
        shch.InSlide.currentDisplay.classList.remove('AppAnim0');
        shch.InSlide.currentDisplay.classList.add('AppAnim1');
        shch.InSlide.frameIn[0].setAttribute('src', shch.InSlide.frameIn[num].getAttribute('data-src'));
        shch.InSlide.currentDisplay = shch.InSlide.frameIn[num];
        shch.InSlide.display = num;
    }
}

shch.watch = {
    screen1: {
        selector: '.Know',
        animationName: 'KnowAnim'
    },
    screen2: {
        selector: '.VirtualWord',
        animationName: 'VirtualWordAnim'
    },
    screen3: {
        selector: '.RealityWord',
        animationName: 'RealityWordAnim'
    },
    screen4: {
        selector: '.Mouse',
        animationName: 'MouseAnim'
    },
    screen5: {
        selector: '.WhatWeDo',
        animationName: 'WhatWeDoAnim'
    },
    screen6: {
        selector: '.DoLI1',
        animationName: 'DoLI1Anim'
    },
    screen7: {
        selector: '.DoLI2',
        animationName: 'DoLI2Anim'
    },
    screen8: {
        selector: '.DoLI3',
        animationName: 'DoLI3Anim'
    },
    screen9: {
        selector: '.FromSmall',
        animationName: 'FromSmallAnim'
    },
    screen10: {
        selector: '.GoodTraining',
        animationName: 'GoodTrainingAnim'
    },
    screen11: {
        selector: '.BadTraining',
        animationName: 'BadTrainingAnim'
    }
}

shch.LoadFunc = function () {

    shch.InSlide.aLeft = document.querySelector('.inLinkLeft');
    shch.InSlide.aLeft.addEventListener('click', shch.InSlide.movePrev.bind(shch.InSlide));

    shch.InSlide.aRight = document.querySelector('.inLinkRight');
    shch.InSlide.aRight.addEventListener('click', shch.InSlide.moveNext.bind(shch.InSlide));

    shch.littleIMGS = new shch.switchBigIMG('.outSlideImg');
    shch.littleIMGS.changeBig(shch.littleIMGS.tags);


    shch.OutSlide.aLeft = document.querySelector('.OutL');
    shch.OutSlide.aLeft.addEventListener('click', shch.OutSlide.next.bind(shch.OutSlide));

    shch.OutSlide.aRight = document.querySelector('.OutR');
    shch.OutSlide.aRight.addEventListener('click', shch.OutSlide.prev.bind(shch.OutSlide));


    shch.watch1 = new shch.addDetect();
    shch.watch1.checkVision(shch.watch.screen1);

    shch.watch2 = new shch.addDetect();
    shch.watch2.checkVision(shch.watch.screen2);

    shch.watch3 = new shch.addDetect();
    shch.watch3.checkVision(shch.watch.screen3);

    shch.watch4 = new shch.addDetect();
    shch.watch4.checkVision(shch.watch.screen4);

    shch.watch5 = new shch.addDetect();
    shch.watch5.checkVision(shch.watch.screen5);

    shch.watch6 = new shch.addDetect();
    shch.watch6.checkVision(shch.watch.screen6);

    shch.watch7 = new shch.addDetect();
    shch.watch7.checkVision(shch.watch.screen7);

    shch.watch8 = new shch.addDetect();
    shch.watch8.checkVision(shch.watch.screen8);

    shch.watch9 = new shch.addDetect();
    shch.watch9.checkVision(shch.watch.screen9);

    shch.watch10 = new shch.addDetect();
    shch.watch10.checkVision(shch.watch.screen10);

    shch.watch11 = new shch.addDetect();
    shch.watch11.checkVision(shch.watch.screen11);
}

window.addEventListener('load', shch.LoadFunc);

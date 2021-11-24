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

shch.BS = function (cs, ps) {
    this.display = 0;
    this.i = 0;
    this.controler = document.querySelectorAll(cs);
    this.controlerDisolay = document.querySelectorAll(cs)[0]
    this.controlerAll = document.querySelectorAll(cs).length;
    this.passive = document.querySelectorAll(ps);
    this.passivecurrent = document.querySelectorAll(ps)[0];
    this.moveBack = function (act, actLink) {
        this.controlerDisolay.classList.remove(actLink);
        this.passive[this.display].classList.remove(act);
        this.display--;
        if (this.display < 0) {
            this.display = 0;
        }
        this.controlerDisolay = this.controler[this.display];
        this.controlerDisolay.classList.add(actLink);
        this.passivecurrent = this.passive[this.display];
        this.passivecurrent.classList.add(act);
        console.log(act);
    }
    this.back = function (selTag, act, actLink) {
        document.querySelector(selTag).addEventListener('click', this.moveBack.bind(this, act, actLink))
    }
    this.moveToward = function (act, actLink) {
        this.controlerDisolay.classList.remove(actLink);
        this.passive[this.display].classList.remove(act);
        this.display++;
        if (this.display === this.controlerAll) {
            this.display = this.controlerAll - 1;
        }
        this.controlerDisolay = this.controler[this.display];
        this.controlerDisolay.classList.add(actLink);
        this.passivecurrent = this.passive[this.display];
        this.passivecurrent.classList.add(act);
        console.log(this.display);
    }
    this.toward = function (selTag, act, actLink) {
        document.querySelector(selTag).addEventListener('click', this.moveToward.bind(this, act, actLink))
    }
    this.setDisplay = function (id, actL, active) {
        this.display = id;
        this.controlerDisolay.classList.remove(actL);
        this.passivecurrent.classList.remove(active);
        this.controler[id].classList.add(actL)
        this.passive[id].classList.add(active)
        this.controlerDisolay = document.querySelectorAll(cs)[id]
        this.passivecurrent = this.passive[id];
    }
    this.addAct = function (actLink, actSelect) {
        for (; this.i < this.controlerAll; this.i++) {
            this.controler[this.i].addEventListener('click', this.setDisplay.bind(this, this.i, actLink, actSelect))
        }
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
    },
    screen12: {
        selector: '.Dig1',
        animationName: 'Dig1Anim'
    },
    screen13: {
        selector: '.Dig2',
        animationName: 'Dig2Anim'
    },
    screen14: {
        selector: '.Dig3',
        animationName: 'Dig3Anim'
    },
    screen15: {
        selector: '.Dig4',
        animationName: 'Dig4Anim'
    },
    screen16: {
        selector: '.Approach',
        animationName: 'ApproachAnim'
    },
    screen17: {
        selector: '.Step',
        animationName: 'StepAnim'
    },
    screen18: {
        selector: '.Partner1',
        animationName: 'Partner1Anim'
    },
    screen19: {
        selector: '.Partner2',
        animationName: 'Partner2Anim'
    },
    screen20: {
        selector: '.Partner3',
        animationName: 'Partner3Anim'
    },
    screen21: {
        selector: '.Partner4',
        animationName: 'Partner4Anim'
    },
    screen22: {
        selector: '.Partner5',
        animationName: 'Partner5Anim'
    },
    screen23: {
        selector: '.Partner6',
        animationName: 'Partner6Anim'
    }
}

shch.LoadFunc = function () {

    shch.BSone = new shch.BS('.doA1', '.whatDidWe');
    shch.BSone.addAct('doLinksActive', 'whatDidWeAct');

    shch.BComp = new shch.BS('.doA2', '.biggerSlide');
    shch.BComp.addAct('doLinksActive', 'biggerSlideAct');
    shch.BComp.back('.OutL', 'biggerSlideAct', 'doLinksActive');
    shch.BComp.toward('.OutR', 'biggerSlideAct', 'doLinksActive');

    shch.BSImg1 = new shch.BS('.outL1', '.outI1');
    shch.BSImg1.addAct('doLinksActive', 'actInSlide');

    shch.BSImg1 = new shch.BS('.outL2', '.outI2');
    shch.BSImg1.addAct('doLinksActive', 'actInSlide');

    shch.BSone = new shch.BS('.doA1', '.whatDidWe');
    shch.BSone.addAct('doLinksActive', 'whatDidWeAct');

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

    shch.watch12 = new shch.addDetect();
    shch.watch12.checkVision(shch.watch.screen12);

    shch.watch13 = new shch.addDetect();
    shch.watch13.checkVision(shch.watch.screen13);

    shch.watch14 = new shch.addDetect();
    shch.watch14.checkVision(shch.watch.screen14);

    shch.watch15 = new shch.addDetect();
    shch.watch15.checkVision(shch.watch.screen15);

    shch.watch16 = new shch.addDetect();
    shch.watch16.checkVision(shch.watch.screen16);

    shch.watch17 = new shch.addDetect();
    shch.watch17.checkVision(shch.watch.screen17);


    shch.watch18 = new shch.addDetect();
    shch.watch18.checkVision(shch.watch.screen18);

    shch.watch19 = new shch.addDetect();
    shch.watch19.checkVision(shch.watch.screen19);

    shch.watch20 = new shch.addDetect();
    shch.watch20.checkVision(shch.watch.screen20);

    shch.watch21 = new shch.addDetect();
    shch.watch21.checkVision(shch.watch.screen21);

    shch.watch22 = new shch.addDetect();
    shch.watch22.checkVision(shch.watch.screen22);

    shch.watch23 = new shch.addDetect();
    shch.watch23.checkVision(shch.watch.screen23);
}

window.addEventListener('load', shch.LoadFunc);

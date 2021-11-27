/* use strict*/
let shch = {};
shch.addDetect = function (inter) {

    this.checkVision = function (init) {
        const options = {
            rootMargins: '500px 0',
            threshold: [inter]
        };

        function vdHandler(els) {
            els.forEach((data) => {
                if (data.intersectionRatio > inter) {
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

shch.BS = function (cs, ps, papa) {
    this.display = 0;
    this.i = 0;
    this.controler = papa.querySelectorAll(cs);
    this.controlerDisplay = papa.querySelectorAll(cs)[0];
    this.controlerAll = papa.querySelectorAll(cs).length;
    this.passive = papa.querySelectorAll(ps);
    this.passivecurrent = papa.querySelectorAll(ps)[0];
    this.moveBack = function (act, actLink) {
        this.controlerDisplay.classList.remove(actLink);
        this.passive[this.display].classList.remove(act);
        this.display--;
        if (this.display < 0) {
            this.display = this.controlerAll - 1;
        }
        this.controlerDisplay = this.controler[this.display];
        this.controlerDisplay.classList.add(actLink);
        this.passivecurrent = this.passive[this.display];
        this.passivecurrent.classList.add(act);
    }
    this.back = function (selTag, act, actLink) {
        papa.querySelector(selTag).addEventListener('click', this.moveBack.bind(this, act, actLink))
    }
    this.moveToward = function (act, actLink) {
        this.controlerDisplay.classList.remove(actLink);
        this.passive[this.display].classList.remove(act);
        this.display++;
        if (this.display === this.controlerAll) {
            this.display = 0;
        }
        this.controlerDisplay = this.controler[this.display];
        this.controlerDisplay.classList.add(actLink);
        this.passivecurrent = this.passive[this.display];
        this.passivecurrent.classList.add(act);
    }
    this.toward = function (selTag, act, actLink) {
        papa.querySelector(selTag).addEventListener('click', this.moveToward.bind(this, act, actLink))
    }
    this.setDisplay = function (id, actL, active) {
        this.display = id;
        this.controlerDisplay.classList.remove(actL);
        this.passivecurrent.classList.remove(active);
        this.controler[id].classList.add(actL)
        this.passive[id].classList.add(active)
        this.controlerDisplay = papa.querySelectorAll(cs)[id]
        this.passivecurrent = this.passive[id];
    }
    this.addAct = function (actLink, actSelect) {
        for (; this.i < this.controlerAll; this.i++) {
            this.controler[this.i].addEventListener('click', this.setDisplay.bind(this, this.i, actLink, actSelect))
        }
    }
}

shch.watch = {
    screenS1: {
        selector: '.FromLeftCorner',
        animationName: 'FromLeftCornerAnim'
    },
    screenS2: {
        selector: '.FromSmallTop',
        animationName: 'FromSmallTopAnim'
    },
    screenS3: {
        selector: '.FromLeftCorner2',
        animationName: 'FromSmallTopAnim2'
    },
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
    screen151: {
        selector: '.WhoWeH2Left',
        animationName: 'WhoWeH2LeftAnim'
    },
    screen1511: {
        selector: '.WhoWeOlLeft',
        animationName: 'WhoWeOlLeftAnim'
    },
    screen152: {
        selector: '.WhoWeH2Right',
        animationName: 'WhoWeH2RightAnim'
    },
    screen1521: {
        selector: '.WhoWeOlRight',
        animationName: 'WhoWeOlRightAnim'
    },
    screen16: {
        selector: '.Approach',
        animationName: 'ApproachAnim'
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
    },
    screen24: {
        selector: '.Rotate',
        animationName: 'RotateAnim'
    },
    screen25: {
        selector: '.StepToRight',
        animationName: 'StepToRightAnim'
    },
    screen26: {
        selector: '.StepToLeft',
        animationName: 'StepToLeftAnim'
    },
    screen27: {
        selector: '.check-icon',
        animationName: 'birdAnim'
    },
    screen28: {
        selector: '.success-checkmark',
        animationName: 'birdAnim'
    },
    screen29: {
        selector: '.icon-line',
        animationName: 'birdAnim'
    },
    screen30: {
        selector: '.mobile7',
        animationName: 'mobile7Anim'
    }
}

shch.LoadFunc = function () {

    shch.WWD = {}
    shch.WWD.Papa = document.querySelectorAll('.Screen2');
    shch.WWD.Papa.start = 0;
    shch.WWD.Papa.all = shch.WWD.Papa.length;
    for (; shch.WWD.Papa.start < shch.WWD.Papa.all; shch.WWD.Papa.start++) {
        shch.WWD[shch.WWD.Papa.start] = new shch.BS('.doA', '.whatDidWe', shch.WWD.Papa[shch.WWD.Papa.start]);
        shch.WWD[shch.WWD.Papa.start].addAct('doLinksActive', 'whatDidWeAct');
    }

    shch.OP = {}
    shch.OP.Papa = document.querySelectorAll('.Screen3');
    shch.OP.Papa.start = 0;
    shch.OP.Papa.all = shch.OP.Papa.length;
    for (; shch.OP.Papa.start < shch.OP.Papa.all; shch.OP.Papa.start++) {
        shch.OP[shch.OP.Papa.start] = new shch.BS('.doA', '.biggerSlide', shch.OP.Papa[shch.OP.Papa.start]);
        shch.OP[shch.OP.Papa.start].addAct('doLinksActive', 'biggerSlideAct');
    }

    shch.OPMove = {}
    shch.OPMove.Papa = document.querySelectorAll('.Screen3');
    shch.OPMove.Papa.start = 0;
    shch.OPMove.Papa.all = shch.OPMove.Papa.length;
    for (; shch.OPMove.Papa.start < shch.OPMove.Papa.all; shch.OPMove.Papa.start++) {
        shch.OPMove[shch.OPMove.Papa.start] = new shch.BS('.doA', '.biggerSlide', shch.OPMove.Papa[shch.OPMove.Papa.start]);
        shch.OPMove[shch.OPMove.Papa.start].addAct('doLinksActive', 'biggerSlideAct');
        shch.OPMove[shch.OPMove.Papa.start].back('.OutL', 'biggerSlideAct', 'doLinksActive');
        shch.OPMove[shch.OPMove.Papa.start].toward('.OutR', 'biggerSlideAct', 'doLinksActive');
    }

    shch.OPMini = {}
    shch.OPMini.Papa = document.querySelectorAll('.biggerSlide');
    shch.OPMini.Papa.start = 0;
    shch.OPMini.Papa.all = shch.OPMini.Papa.length;
    for (; shch.OPMini.Papa.start < shch.OPMini.Papa.all; shch.OPMini.Papa.start++) {
        shch.OPMini[shch.OPMini.Papa.start] = new shch.BS('.outSlideImg', '.outSlideBigImg', shch.OPMini.Papa[shch.OPMini.Papa.start]);
        shch.OPMini[shch.OPMini.Papa.start].addAct('outSlideImgAct', 'actInSlide');
        shch.OPMini[shch.OPMini.Papa.start].toward('.inLinkRight', 'actInSlide', 'outSlideImgAct');
        shch.OPMini[shch.OPMini.Papa.start].back('.inLinkLeft', 'actInSlide', 'outSlideImgAct');
    }

    shch.watchS1 = new shch.addDetect(.1);
    shch.watchS1.checkVision(shch.watch.screenS1);

    shch.watchS2 = new shch.addDetect(.1);
    shch.watchS2.checkVision(shch.watch.screenS2);

    shch.watchS3 = new shch.addDetect(.1);
    shch.watchS3.checkVision(shch.watch.screenS3);

    shch.watch1 = new shch.addDetect(.1);
    shch.watch1.checkVision(shch.watch.screen1);

    shch.watch2 = new shch.addDetect(.1);
    shch.watch2.checkVision(shch.watch.screen2);

    shch.watch3 = new shch.addDetect(.1);
    shch.watch3.checkVision(shch.watch.screen3);

    shch.watch4 = new shch.addDetect(.1);
    shch.watch4.checkVision(shch.watch.screen4);

    shch.watch5 = new shch.addDetect(.1);
    shch.watch5.checkVision(shch.watch.screen5);

    shch.watch6 = new shch.addDetect(.1);
    shch.watch6.checkVision(shch.watch.screen6);

    shch.watch7 = new shch.addDetect(.1);
    shch.watch7.checkVision(shch.watch.screen7);

    shch.watch8 = new shch.addDetect(.1);
    shch.watch8.checkVision(shch.watch.screen8);

    shch.watch9 = new shch.addDetect(.1);
    shch.watch9.checkVision(shch.watch.screen9);

    shch.watch10 = new shch.addDetect(.1);
    shch.watch10.checkVision(shch.watch.screen10);

    shch.watch11 = new shch.addDetect(.5);
    shch.watch11.checkVision(shch.watch.screen11);

    shch.watch12 = new shch.addDetect(.1);
    shch.watch12.checkVision(shch.watch.screen12);

    shch.watch13 = new shch.addDetect(.1);
    shch.watch13.checkVision(shch.watch.screen13);

    shch.watch14 = new shch.addDetect(.1);
    shch.watch14.checkVision(shch.watch.screen14);

    shch.watch15 = new shch.addDetect(.1);
    shch.watch15.checkVision(shch.watch.screen15);

    shch.watch151 = new shch.addDetect(.1);
    shch.watch151.checkVision(shch.watch.screen151);

    shch.watch1511 = new shch.addDetect(.1);
    shch.watch1511.checkVision(shch.watch.screen1511);

    shch.watch152 = new shch.addDetect(.5);
    shch.watch152.checkVision(shch.watch.screen152);

    shch.watch1521 = new shch.addDetect(.5);
    shch.watch1521.checkVision(shch.watch.screen1521);

    shch.watch16 = new shch.addDetect(.1);
    shch.watch16.checkVision(shch.watch.screen16);


    shch.watch18 = new shch.addDetect(.1);
    shch.watch18.checkVision(shch.watch.screen18);

    shch.watch19 = new shch.addDetect(.1);
    shch.watch19.checkVision(shch.watch.screen19);

    shch.watch20 = new shch.addDetect(.1);
    shch.watch20.checkVision(shch.watch.screen20);

    shch.watch21 = new shch.addDetect(.1);
    shch.watch21.checkVision(shch.watch.screen21);

    shch.watch22 = new shch.addDetect(.1);
    shch.watch22.checkVision(shch.watch.screen22);

    shch.watch23 = new shch.addDetect(.1);
    shch.watch23.checkVision(shch.watch.screen23);

    shch.watch24 = new shch.addDetect(.1);
    shch.watch24.checkVision(shch.watch.screen24);

    shch.watch25 = new shch.addDetect(.5);
    shch.watch25.checkVision(shch.watch.screen25);

    shch.watch26 = new shch.addDetect(.5);
    shch.watch26.checkVision(shch.watch.screen26);

    shch.watch27 = new shch.addDetect(.5);
    shch.watch27.checkVision(shch.watch.screen27);

    shch.watch28 = new shch.addDetect(.5);
    shch.watch28.checkVision(shch.watch.screen28);

    shch.watch29 = new shch.addDetect(.5);
    shch.watch29.checkVision(shch.watch.screen29);

    shch.watch30 = new shch.addDetect(.1);
    shch.watch30.checkVision(shch.watch.screen30);
}

window.addEventListener('load', shch.LoadFunc);

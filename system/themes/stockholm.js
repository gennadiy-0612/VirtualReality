/* use strict*/
const shch = {};
shch.manipulated = function (son, startPoint, stopPoint, translateX, longX, cb, degree, colors, rotate) {
    this.memo = startPoint;
    this.go = startPoint;
    this.stop = stopPoint;
    this.MZmemo = startPoint;
    this.way = stopPoint-startPoint;
    this.wayStep = 100 / (stopPoint-startPoint);
    this.move = 0;
    this.Anim = 0;
    this.Opacity = 0;
    this.PZ = 0;
    this.infoT = document.querySelector(son)
    this.GO = function (e) {
        this.move = this.memo - window.scrollY;
        this.memo = window.scrollY;
        if (this.move < 0) {this.Anim += 1;} else {this.Anim -= 1;}
        if (this.Anim < 0) this.Anim = 0;
        if (this.Anim > 100) {this.Anim = 100;}
        this.MZmemo = this.move + this.MZmemo;
        this.PZ = -50*this.Anim * this.wayStep;
        if (this.Anim < 11) this.Opacity = '0';
        if (10 < this.Anim < 91) this.Opacity = '1';
        if (this.Anim > 100) this.Opacity = '0';
        if (this.Anim < 0 || this.Anim > 100 || window.scrollY < this.go || window.scrollY > this.stop) this.Opacity = 0;
        // this.infoT.textContent = 'memo: ' + this.memo + ' / move: ' + this.move+ ' / MZmemo: ' + this.MZmemo + ' / Anim: ' + this.Anim;
        this[cb]();
        if (window.scrollY <= this.go){
            if (son === '.opportunity'){this.infoT.setAttribute('style', 'opacity:1;');
                return;
            }
        }
        if (window.scrollY >= this.stop) {return;}
    }
    this.OpacityTrans = function () {
        this.infoT.setAttribute('style', 'opacity:' + this.Opacity + '; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, ' + this.PZ + ', 1)');
    }
    this.Rotate = function () {
        let d = parseInt(degree) - this.Anim;
        let r = (rotate ? 'rotateY(180deg) ': '');
        let tr = (rotate ? -this.Anim * this.wayStep*70: this.Anim * this.wayStep*70);
        this.infoT.setAttribute('style',  'opacity:' + this.Opacity + '; background-image:conic-gradient(from ' + d + 'deg,' + colors + ',transparent,transparent,transparent,transparent); transform: ' + r + ' translate3d(0, 0, ' + (tr) + 'px)');
    }
}

shch.addDetect = function (inter) {

    this.checkVision = function (init) {
        const options = {
            rootMargins: '50vh 0',
            threshold: [inter]
        };

        function vdHandler(els) {
            els.forEach((data) => {
                if (data.intersectionRatio === inter) {
                    data.target.classList.add(init.animationName);
                    init.func();
                }
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
    this.more = '';
    this.n = 0;
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
    this.actSet = function (id, actLink, actSelect) {
        this.display = id;
        this.controlerDisplay.classList.remove(actLink);
        this.passivecurrent.classList.remove(actSelect);
        this.controler[id].classList.add(actLink)
        this.passive[id].classList.add(actSelect)
        this.controlerDisplay = papa.querySelectorAll(cs)[id]
        this.passivecurrent = this.passive[id];
    }
    this.actMore = function (actLink, actSelect) {
        for (; this.n < this.passive.length; this.n++) {
            this.passive[this.n].addEventListener('click', this.actSet.bind(this, this.n, actLink, actSelect))
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
    },
    screen31: {
        selector: '.Desktop7',
        animationName: 'Desktop7Anim'
    }
}

shch.LoadFunc = function () {
    shch['.opportunity'] = new shch.manipulated('.opportunity', 50, 800, 4, 2, 'OpacityTrans');
    window.addEventListener('scroll', shch['.opportunity'].GO.bind(shch['.opportunity']), true);
    window.addEventListener('pointerdown', shch['.opportunity'].GO.bind(shch['.opportunity']), true);

    shch['.VRw'] = new shch.manipulated('.VRw', 600, 1400, 8, 2, 'OpacityTrans');
    window.addEventListener('scroll', shch['.VRw'].GO.bind(shch['.VRw']), true);
    window.addEventListener('pointerdown', shch['.VRw'].GO.bind(shch['.VRw']), true);

    shch['.RoundBox-1'] = new shch.manipulated('.RoundBox-1', 600, 1400, 8, 3, 'Rotate', '45','#e80055');
    window.addEventListener('scroll', shch['.RoundBox-1'].GO.bind(shch['.RoundBox-1']), true);
    window.addEventListener('pointerdown', shch['.RoundBox-1'].GO.bind(shch['.RoundBox-1']), true);

    shch['.RoundBox-2'] = new shch.manipulated('.RoundBox-2', 600, 1400, 8, 3, 'Rotate', '190', '#c20aa4');
    window.addEventListener('scroll', shch['.RoundBox-2'].GO.bind(shch['.RoundBox-2']), true);
    window.addEventListener('pointerdown', shch['.RoundBox-2'].GO.bind(shch['.RoundBox-2']), true);

    shch['.RoundBox-3'] = new shch.manipulated('.RoundBox-3', 600, 1400, 8, 3, 'Rotate', '280','#16e7ff');
    window.addEventListener('scroll', shch['.RoundBox-3'].GO.bind(shch['.RoundBox-3']), true);
    window.addEventListener('pointerdown', shch['.RoundBox-3'].GO.bind(shch['.RoundBox-3']), true);

    shch['.RoundBox-4'] = new shch.manipulated('.RoundBox-4', 600, 1400, 8, 3, 'Rotate', '75' ,'#5185ff', 1);
    window.addEventListener('scroll', shch['.RoundBox-4'].GO.bind(shch['.RoundBox-4']), true);
    window.addEventListener('pointerdown', shch['.RoundBox-4'].GO.bind(shch['.RoundBox-4']), true);

    shch['.RoundBox-5'] = new shch.manipulated('.RoundBox-5', 600, 1400, 8, 3, 'Rotate', '66' ,'#9515ff');
    window.addEventListener('scroll', shch['.RoundBox-5'].GO.bind(shch['.RoundBox-5']), true);
    window.addEventListener('pointerdown', shch['.RoundBox-5'].GO.bind(shch['.RoundBox-5']), true);

    shch['.RoundBox-6'] = new shch.manipulated('.RoundBox-6', 600, 1400, 8, 3, 'Rotate', '152', '#00dfe9', 1);
    window.addEventListener('scroll', shch['.RoundBox-6'].GO.bind(shch['.RoundBox-6']), true);
    window.addEventListener('pointerdown', shch['.RoundBox-6'].GO.bind(shch['.RoundBox-6']), true);

    shch['.RoundBox-7'] = new shch.manipulated('.RoundBox-7', 600, 1400, 8, 3, 'Rotate', '12', '#e80055');
    window.addEventListener('scroll', shch['.RoundBox-7'].GO.bind(shch['.RoundBox-7']), true);
    window.addEventListener('pointerdown', shch['.RoundBox-7'].GO.bind(shch['.RoundBox-7']), true);

    shch['.RoundBox-8'] = new shch.manipulated('.RoundBox-8', 600, 1400, 8, 3, 'Rotate', '52', '#16e7ff');
    window.addEventListener('scroll', shch['.RoundBox-8'].GO.bind(shch['.RoundBox-8']), true);
    window.addEventListener('pointerdown', shch['.RoundBox-8'].GO.bind(shch['.RoundBox-8']), true);

    shch['.RoundBox-9'] = new shch.manipulated('.RoundBox-9', 600, 1400, 8, 3, 'Rotate', '102', '#c20aa4', 1);
    window.addEventListener('scroll', shch['.RoundBox-9'].GO.bind(shch['.RoundBox-9']), true);
    window.addEventListener('pointerdown', shch['.RoundBox-9'].GO.bind(shch['.RoundBox-9']), true);

    shch['.RoundBox-10'] = new shch.manipulated('.RoundBox-10', 600, 1400, 8, 3, 'Rotate', '200', '#5185ff');
    window.addEventListener('scroll', shch['.RoundBox-10'].GO.bind(shch['.RoundBox-10']), true);
    window.addEventListener('pointerdown', shch['.RoundBox-10'].GO.bind(shch['.RoundBox-10']), true);

    shch['.RoundBox-11'] = new shch.manipulated('.RoundBox-11', 600, 1400, 8, 3, 'Rotate', '100', '#00dfe9');
    window.addEventListener('scroll', shch['.RoundBox-11'].GO.bind(shch['.RoundBox-11']), true);
    window.addEventListener('pointerdown', shch['.RoundBox-11'].GO.bind(shch['.RoundBox-11']), true);

    shch['.RoundBox-12'] = new shch.manipulated('.RoundBox-12', 600, 1400, 8, 3, 'Rotate', '111', '#9515ff', 1);
    window.addEventListener('scroll', shch['.RoundBox-12'].GO.bind(shch['.RoundBox-12']), true);
    window.addEventListener('pointerdown', shch['.RoundBox-12'].GO.bind(shch['.RoundBox-12']), true);

    shch.WWD = {}
    shch.WWD.Papa = document.querySelectorAll('.Screen2');
    shch.WWD.Papa.start = 0;
    shch.WWD.Papa.all = shch.WWD.Papa.length;
    for (; shch.WWD.Papa.start < shch.WWD.Papa.all; shch.WWD.Papa.start++) {
        shch.WWD[shch.WWD.Papa.start] = new shch.BS('.doA', '.whatDidWe', shch.WWD.Papa[shch.WWD.Papa.start]);
        shch.WWD[shch.WWD.Papa.start].addAct('doLinksActive', 'whatDidWeAct');
        shch.WWD[shch.WWD.Papa.start].actMore('doLinksActive', 'whatDidWeAct');
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

    shch.watch1 = new shch.addDetect(.1);
    shch.watch1.checkVision(shch.watch.screen1);

    shch.watch2 = new shch.addDetect(.1);
    shch.watch2.checkVision(shch.watch.screen2);

    shch.watch3 = new shch.addDetect(.1);
    shch.watch3.checkVision(shch.watch.screen3);

    shch.watch4 = new shch.addDetect(.1);
    shch.watch4.checkVision(shch.watch.screen4);

    shch.watch5 = new shch.addDetect(.9);
    shch.watch5.checkVision(shch.watch.screen5);

    shch.watch6 = new shch.addDetect(.1);
    shch.watch6.checkVision(shch.watch.screen6);

    shch.watch7 = new shch.addDetect(.1);
    shch.watch7.checkVision(shch.watch.screen7);

    shch.watch8 = new shch.addDetect(.1);
    shch.watch8.checkVision(shch.watch.screen8);

    shch.watch9 = new shch.addDetect(.1);
    shch.watch9.checkVision(shch.watch.screen9);

    shch.watch151 = new shch.addDetect(.1);
    shch.watch151.checkVision(shch.watch.screen151);

    shch.watch1511 = new shch.addDetect(.1);
    shch.watch1511.checkVision(shch.watch.screen1511);

    shch.watch152 = new shch.addDetect(.9);
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

    shch.watch31 = new shch.addDetect(.1);
    shch.watch31.checkVision(shch.watch.screen31);
}

window.addEventListener('load', shch.LoadFunc);

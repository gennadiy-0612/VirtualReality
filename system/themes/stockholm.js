/* use strict*/
const shch = {};
shch.motion = function () {
    this.memo = 0;
    this.move = 0;
    this.detect = function () {
        this.move = this.memo - window.scrollY;
        this.memo = window.scrollY;
        return this.move;
    };
};

shch.menu = function (move) {
    this.menu = document.querySelector('.topMenu');
    this.menuStick = function () {
        let up = move();
        up < 0 ? this.menu.classList.add('moveUp') : this.menu.classList.remove('moveUp');
    }
};

shch.manipulated = function (son, startPoint, stopPoint, cb, degree, colors, rotate, speed) {
    this.movement = new shch.motion();
    this.way = stopPoint - startPoint;
    this.wayStep = (stopPoint - startPoint) / 100;
    this.go = startPoint;
    this.stop = stopPoint;
    this.wayMove = 0;
    this.Opacity = 1;
    this.infoT = document.querySelector(son);
    this.showIn = 0;
    this.showOut = 0;
    this.opacityUp = this.way / 100 * 20;
    this.opacityDown = this.way / 100 * 80;
    this.GO = function () {
        if (this.movement.detect()) {
            if (window.scrollY > this.go && window.scrollY < this.stop) {
                this.wayMove = this.go - window.scrollY;
                this.Opacity = 1;
                let opacity = (this.way + this.wayMove) / this.wayStep;
                if (-this.wayMove < this.opacityUp) {
                    let op = Math.floor((100 - opacity) / 2);
                    this.Opacity = '0.' + op;
                }
                if (-this.wayMove > this.opacityDown) {
                    let op = Math.floor(opacity / 2);
                    this.Opacity = '0.' + op;
                }
                this[cb]();
            }
            if (window.scrollY > this.go && this.showIn) {
                this.showIn = 0;
                this.hideFS(0, 0, 'collapse');
            }
            if (window.scrollY > this.stop && !this.showOut) {
                this.showOut = 1;
                this.hideFS(0, this.wayMove, 'collapse');
            }
            if (window.scrollY < this.go && window.scrollY < this.go && !this.showIn) {
                this.showIn = 1;
                this.hideFS(0, 0, 'collapse');
            }
            if (window.scrollY < this.stop && this.showOut) {
                this.showOut = 0;
                this.hideFS(0, 0, 'collapse');
            }
            if (window.scrollY < this.opacityUp && son === '.opportunity') {
                this.Opacity = 1;
                this.hideFS(1, 1, 'visible');
            }
        }
    };
    this.OpacityTrans = function () {
        this.infoT.setAttribute('style', 'opacity:' + this.Opacity + '; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, ' + this.wayMove + ', 1)');
    };
    this.Rotate = function () {
        let d = speed * this.wayMove + parseInt(degree);
        let tr = -.9 * this.wayMove;
        this.infoT.setAttribute('style', 'opacity:' + this.Opacity + '; background-image:conic-gradient(from ' + d + 'deg,' + colors + ',transparent,transparent,transparent,transparent,' + colors + '); transform: translate3d(0, 0, ' + (tr) + 'px)');
        if (rotate) this.infoT.setAttribute('style', 'opacity:' + this.Opacity + '; background-image:conic-gradient(from ' + (-1 * d) + 'deg,' + colors + ',transparent,transparent,transparent,transparent,' + colors + '); transform: translate3d(0, 0, ' + (tr) + 'px)');
    };
    this.hideFS = function (op, wide, vis) {
        this.infoT.setAttribute('style', 'visibility: ' + vis + '; opacity:' + op + '; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, ' + wide + ', 1)');
    }
};

shch.FPhoto = function (son, startPoint, endPoint) {
    this.animTag = document.querySelector(son);
    this.way = endPoint - startPoint;
    this.startScroll = startPoint;
    this.endScroll = endPoint;
    this.wayStep = this.way / 100;
    this.fixed = this.wayStep * 30;
    this.lightUp = function () {
        if (window.scrollY < (this.fixed + this.startScroll)) this.animTag.setAttribute('style', 'opacity:' + ((this.fixed - window.scrollY) / this.wayStep / 30) + ';');
        else this.animTag.setAttribute('style', 'opacity:0;');
        if (window.scrollY < this.endScroll) return false;
    };
    this.lift = function () {
        if (this.endScroll > window.scrollY) this.animTag.setAttribute('style', 'opacity:1;');
        if (this.endScroll < window.scrollY) this.animTag.setAttribute('style', 'top:' + (this.endScroll - window.scrollY) * 4 + 'px; opacity:1;');
        if ((this.endScroll + window.innerHeight) < window.scrollY) this.animTag.setAttribute('style', 'display:none;');
    };
};

shch.S2 = function (select, ind, topY) {
    this.papa = document.querySelector(select);
    this.lift = 0;
    this.lifting = function () {
        if (this.papa.getBoundingClientRect().top > topY && this.papa.getBoundingClientRect().bottom < (window.innerHeight + this.papa.getBoundingClientRect().height)) {
            this.lift = this.papa.getBoundingClientRect().bottom * ind - window.innerHeight * .05;
            this.papa.setAttribute('style', 'transform:translateY(' + this.lift + 'vmin)');
        }
    };
};

function ttt(e) {
    e.preventDefault();
}

function ttt1(e) {
    console.log('ttt')
    e.returnValue = true;
}

shch.Screen = function (ids) {
    this.Scr = document.querySelector(ids);
    this.bodie = document.querySelector('body');
    this.start = 2;
    this.switching = function (event) {
        this.bodie.addEventListener('wheel', ttt, {passive: false})
        // if (this.Scr.getBoundingClientRect().top < 0) {
        //     this.start++;
        //     if (this.start > 4) this.start = 4;
        //     // document.querySelector('#id' + this.start).classList.add('id' + this.start);
        //
        function myGreeting() {
            console.log(this);
            document.addEventListener('wheel', ttt1, {passive: true})
            console.log('eee')
        }

        const myTimeout = setTimeout(myGreeting, 1000);

        function myStopFunction() {
            clearTimeout(myTimeout);
        }

        // }
    }
};

shch.addDetect = function (inter) {

    this.checkVision = function (init) {
        const options = {
            rootMargins: '50vh 0',
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
};

shch.BS = function (cs, ps, papa) {
    this.display = 0;
    this.i = 0;
    this.controler = papa.querySelectorAll(cs);
    this.controlerDisplay = papa.querySelectorAll(cs)[0];
    this.controlerAll = papa.querySelectorAll(cs).length;
    this.passive = papa.querySelectorAll(ps);
    this.passivecurrent = papa.querySelectorAll(ps)[0];
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
    };
    this.back = function (selTag, act, actLink) {
        papa.querySelector(selTag).addEventListener('click', this.moveBack.bind(this, act, actLink))
    };
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
    };
    this.toward = function (selTag, act, actLink) {
        papa.querySelector(selTag).addEventListener('click', this.moveToward.bind(this, act, actLink))
    };
    this.setDisplay = function (id, actL, active) {
        this.display = id;
        this.controlerDisplay.classList.remove(actL);
        this.passivecurrent.classList.remove(active);
        this.controler[id].classList.add(actL);
        this.passive[id].classList.add(active);
        this.controlerDisplay = papa.querySelectorAll(cs)[id];
        this.passivecurrent = this.passive[id];
    };
    this.addAct = function (actLink, actSelect) {
        for (; this.i < this.controlerAll; this.i++) {
            this.controler[this.i].addEventListener('click', this.setDisplay.bind(this, this.i, actLink, actSelect))
        }
    };
    this.actSet = function (id, actLink, actSelect) {
        this.display = id;
        this.controlerDisplay.classList.remove(actLink);
        this.passivecurrent.classList.remove(actSelect);
        this.controler[id].classList.add(actLink);
        this.passive[id].classList.add(actSelect);
        this.controlerDisplay = papa.querySelectorAll(cs)[id];
        this.passivecurrent = this.passive[id];
    };
    this.actMore = function (actLink, actSelect) {
        for (; this.n < this.passive.length; this.n++) {
            this.passive[this.n].addEventListener('click', this.actSet.bind(this, this.n, actLink, actSelect))
        }
    }
};

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
};

shch.LoadFunc = function () {
    if ('scroll' in window) shch.Etype = 'scroll';
    if ('pointermove' in window) shch.Etype = 'pointermove';

    shch.Scr21 = new shch.S2('.slogan', .04, -.33 * window.innerHeight);
    shch.Scr21.lifting();
    window.addEventListener(shch.Etype, shch.Scr21.lifting.bind(shch.Scr21), {passive: true});

    shch.Scr22 = new shch.S2('.frame-v', .04, .33 * window.innerHeight);
    shch.Scr22.lifting();
    window.addEventListener(shch.Etype, shch.Scr22.lifting.bind(shch.Scr22), {passive: true});

    shch['#S2move'] = new shch.motion();
    shch['#S2move'].detect();
    shch['#id2'] = new shch.Screen('.Screen2');
    window.addEventListener('wheel', shch['#id2'].switching.bind(shch['#id2']), {passive: true});

    shch['.topMenu'] = new shch.motion();
    shch.moveIt = new shch.menu(shch['.topMenu'].detect);
    window.addEventListener(shch.Etype, shch.moveIt.menuStick.bind(shch.moveIt), {passive: true});

    shch['.TGI2'] = new shch.FPhoto('.TGI2', 0, 1200);
    shch['.TGI2'].lightUp();
    window.addEventListener(shch.Etype, shch['.TGI2'].lightUp.bind(shch['.TGI2']), {passive: true});

    shch['.topGlasses'] = new shch.FPhoto('.topGlasses', 0, 360);
    shch['.topGlasses'].lift();
    window.addEventListener(shch.Etype, shch['.topGlasses'].lift.bind(shch['.topGlasses']), {passive: true});

    shch['.opportunity'] = new shch.manipulated('.opportunity', 400, 1500, 'OpacityTrans');
    shch['.opportunity'].GO();
    if (window.scrollY < 400) shch['.opportunity'].infoT.setAttribute('style', 'opacity:1');
    window.addEventListener(shch.Etype, shch['.opportunity'].GO.bind(shch['.opportunity']), {passive: true});

    shch['.VRw'] = new shch.manipulated('.VRw', 800, 1950, 'OpacityTrans');
    shch['.VRw'].GO();
    window.addEventListener(shch.Etype, shch['.VRw'].GO.bind(shch['.VRw']), {passive: true});

    shch['.RoundBox-1'] = new shch.manipulated('.RoundBox-1', 1200, 2500, 'Rotate', '45', '#ff9f01', 1, .6);
    shch['.RoundBox-1'].GO();
    window.addEventListener(shch.Etype, shch['.RoundBox-1'].GO.bind(shch['.RoundBox-1']), {passive: true});

    shch['.RoundBox-2'] = new shch.manipulated('.RoundBox-2', 1200, 2500, 'Rotate', '190', '#ff4e00', 0, .5);
    shch['.RoundBox-2'].GO();
    window.addEventListener(shch.Etype, shch['.RoundBox-2'].GO.bind(shch['.RoundBox-2']), {passive: true});

    shch['.RoundBox-3'] = new shch.manipulated('.RoundBox-3', 1200, 2500, 'Rotate', '280', '#ce00ff', 0, .5);
    shch['.RoundBox-3'].GO();
    window.addEventListener(shch.Etype, shch['.RoundBox-3'].GO.bind(shch['.RoundBox-3']), {passive: true});

    shch['.RoundBox-4'] = new shch.manipulated('.RoundBox-4', 1200, 2500, 'Rotate', '75', '#ff2f00', 0, .3);
    shch['.RoundBox-4'].GO();
    window.addEventListener(shch.Etype, shch['.RoundBox-4'].GO.bind(shch['.RoundBox-4']), {passive: true});

    shch['.RoundBox-5'] = new shch.manipulated('.RoundBox-5', 1200, 2500, 'Rotate', '66', '#ff2800', 0, .2);
    shch['.RoundBox-5'].GO();
    window.addEventListener(shch.Etype, shch['.RoundBox-5'].GO.bind(shch['.RoundBox-5']), {passive: true});

    shch['.RoundBox-6'] = new shch.manipulated('.RoundBox-6', 1200, 2500, 'Rotate', '152', '#ff8b00', 0, .7);
    shch['.RoundBox-6'].GO();
    window.addEventListener(shch.Etype, shch['.RoundBox-6'].GO.bind(shch['.RoundBox-6']), {passive: true});

    shch['.RoundBox-7'] = new shch.manipulated('.RoundBox-7', 1200, 2500, 'Rotate', '12', '#e80055', 1, .4);
    shch['.RoundBox-7'].GO();
    window.addEventListener(shch.Etype, shch['.RoundBox-7'].GO.bind(shch['.RoundBox-7']), {passive: true});

    shch['.RoundBox-8'] = new shch.manipulated('.RoundBox-8', 1200, 2500, 'Rotate', '52', '#16e7ff', 0, .4);
    shch['.RoundBox-8'].GO();
    window.addEventListener(shch.Etype, shch['.RoundBox-8'].GO.bind(shch['.RoundBox-8']), {passive: true});

    shch['.RoundBox-9'] = new shch.manipulated('.RoundBox-9', 1200, 2500, 'Rotate', '102', '#c20aa4', 0, 1.25);
    shch['.RoundBox-9'].GO();
    window.addEventListener(shch.Etype, shch['.RoundBox-9'].GO.bind(shch['.RoundBox-9']), {passive: true});

    shch['.RoundBox-10'] = new shch.manipulated('.RoundBox-10', 1200, 2500, 'Rotate', '200', '#5185ff', 0, .3);
    shch['.RoundBox-10'].GO();
    window.addEventListener(shch.Etype, shch['.RoundBox-10'].GO.bind(shch['.RoundBox-10']), {passive: true});

    shch['.RoundBox-11'] = new shch.manipulated('.RoundBox-11', 1200, 2500, 'Rotate', '100', '#00dfe9', 0, .5);
    shch['.RoundBox-11'].GO();
    window.addEventListener(shch.Etype, shch['.RoundBox-11'].GO.bind(shch['.RoundBox-11']), {passive: true});

    shch['.RoundBox-12'] = new shch.manipulated('.RoundBox-12', 1200, 2500, 'Rotate', '111', '#9515ff', 1, .9);
    shch['.RoundBox-12'].GO();
    window.addEventListener(shch.Etype, shch['.RoundBox-12'].GO.bind(shch['.RoundBox-12']), {passive: true});

    shch.WWD = {};
    shch.WWD.Papa = document.querySelectorAll('.Screen2');
    shch.WWD.Papa.start = 0;
    shch.WWD.Papa.all = shch.WWD.Papa.length;
    for (; shch.WWD.Papa.start < shch.WWD.Papa.all; shch.WWD.Papa.start++) {
        shch.WWD[shch.WWD.Papa.start] = new shch.BS('.doA', '.whatDidWe', shch.WWD.Papa[shch.WWD.Papa.start]);
        shch.WWD[shch.WWD.Papa.start].addAct('doLinksActive', 'whatDidWeAct');
        shch.WWD[shch.WWD.Papa.start].actMore('doLinksActive', 'whatDidWeAct');
    }

    shch.OP = {};
    shch.OP.Papa = document.querySelectorAll('.Screen3');
    shch.OP.Papa.start = 0;
    shch.OP.Papa.all = shch.OP.Papa.length;
    for (; shch.OP.Papa.start < shch.OP.Papa.all; shch.OP.Papa.start++) {
        shch.OP[shch.OP.Papa.start] = new shch.BS('.doA', '.biggerSlide', shch.OP.Papa[shch.OP.Papa.start]);
        shch.OP[shch.OP.Papa.start].addAct('doLinksActive', 'biggerSlideAct');
    }

    shch.OPMove = {};
    shch.OPMove.Papa = document.querySelectorAll('.Screen3');
    shch.OPMove.Papa.start = 0;
    shch.OPMove.Papa.all = shch.OPMove.Papa.length;
    for (; shch.OPMove.Papa.start < shch.OPMove.Papa.all; shch.OPMove.Papa.start++) {
        shch.OPMove[shch.OPMove.Papa.start] = new shch.BS('.doA', '.biggerSlide', shch.OPMove.Papa[shch.OPMove.Papa.start]);
        shch.OPMove[shch.OPMove.Papa.start].addAct('doLinksActive', 'biggerSlideAct');
        shch.OPMove[shch.OPMove.Papa.start].back('.OutL', 'biggerSlideAct', 'doLinksActive');
        shch.OPMove[shch.OPMove.Papa.start].toward('.OutR', 'biggerSlideAct', 'doLinksActive');
    }

    shch.OPMini = {};
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
};

window.addEventListener('load', shch.LoadFunc);

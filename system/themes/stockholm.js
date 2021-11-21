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
    movePrev: function () {
        console.log(this);
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
    shch.InSlide.aLeft.addEventListener('click', shch.InSlide.movePrev);

    shch.InSlide.aRight = document.querySelector('.inLinkRight');
    shch.InSlide.aRight.addEventListener('click', shch.InSlide.movePrev);

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

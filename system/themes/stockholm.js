/* use strict*/
/*! lazysizes - v5.3.2 */


let shch = {};
shch.observertag = {};
shch.addDetect = function () {

    this.checkVision = function (init) {
        const options = {
            rootMargins: '500px 0',
            threshold: [0.1]
        };

        function vdHandler(els) {
            els.forEach((data) => {
                if (data.intersectionRatio > .01) {
                    if (!shch.observertag[init.selector]) {
                        console.log(init.selector)
                        data.target.classList.add(init.animationName);
                        shch.observertag[init.selector] = 1;
                    }
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

shch.watch = {
    screen1: {
        selector: '.virtual-word',
        animationName: 'VirtualWordAnim'
    },
    screen2: {
        selector: '.reality-word',
        animationName: 'RealityWordAnim'
    },
    screen3: {
        selector: '.Mouse',
        animationName: 'MouseAnim'
    },
    screen4: {
        selector: '.Know',
        animationName: 'KnowAnim'
    }
}

shch.LoadFunc = function () {

    shch.watch1 = new shch.addDetect();
    shch.watch1.checkVision(shch.watch.screen1);

    shch.watch2 = new shch.addDetect();
    shch.watch2.checkVision(shch.watch.screen2);

    shch.watch3 = new shch.addDetect();
    shch.watch3.checkVision(shch.watch.screen3);

    shch.watch4 = new shch.addDetect();
    shch.watch4.checkVision(shch.watch.screen4);
}

window.addEventListener('load', shch.LoadFunc);

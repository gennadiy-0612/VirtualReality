/* use strict*/
let shch = {};
shch.addDetect = function () {

    this.checkVision = function (init) {
        const options = {
            rootMargins: '200px',
            threshold: [0.1]
        };

        function vdHandler(els) {
            els.forEach((data) => {
                if (data.intersectionRatio > .1) {
                    data.target.classList.add(init.animationName);
                    // data.target.classList.remove(init.moveInit);
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
        selector: '.VirtualWordAnim',
        animationName: 'VirtualWordAnim',
        moveInit: 'VirtualWordAnim'
    },
    screen2: {
        selector: '.Mouse',
        animationName: 'MouseAnim',
        moveInit: 'MouseAnimInit'
    },
    screen3: {
        selector: '.Appear',
        animationName: 'AppearAnim',
        moveInit: 'AppearInit'
    }
}

shch.LoadFunc = function () {

    shch.watch1 = new shch.addDetect();
    shch.watch1.checkVision(shch.watch.screen1);

    shch.watch2 = new shch.addDetect();
    shch.watch2.checkVision(shch.watch.screen2);

    shch.watch3 = new shch.addDetect();
    shch.watch3.checkVision(shch.watch.screen3);
}

window.addEventListener('load', shch.LoadFunc);

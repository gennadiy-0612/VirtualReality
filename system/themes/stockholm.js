/* use strict*/
/*! lazysizes - v5.3.2 */


let shch = {};
shch.observertag = {};
shch.addDetect = function () {

    this.checkVision = function (init) {
        const options = {
            rootMargins: '200px',
            threshold: [0.1]
        };

        function vdHandler(els) {
            els.forEach((data) => {
                if (data.intersectionRatio > .1) {
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
        selector: '.VirtualWordAnim',
        animationName: 'VirtualWordAnim'
    },
    screen2: {
        selector: '.RealityWordAnim',
        animationName: 'RealityWordAnim'
    },
    screen3: {
        selector: '.Mouse',
        animationName: 'MouseAnim'
    },
    screen3: {
        selector: '.Know',
        animationName: 'Appear'
    }
}

shch.LoadFunc = function () {

    shch.watch1 = new shch.addDetect();
    shch.watch1.checkVision(shch.watch.screen1);

    shch.watch2 = new shch.addDetect();
    shch.watch2.checkVision(shch.watch.screen2);
    //
    // shch.watch3 = new shch.addDetect();
    // shch.watch3.checkVision(shch.watch.screen3);
    // alert('ppppppppppp')
}

window.addEventListener('load', shch.LoadFunc);

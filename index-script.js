"use strict";

(function () {

    const imageDescript = ["Croissant Taiyaki", "White Rabbit Cake", "White Rabbit Milk Tea"]
    const numShowcase = 3
    const imgDelay = 8 * 1000

    window.addEventListener("load", init);

    function init() {
        startImageCarosel(0)
    }

    function startImageCarosel(index) {
        document.getElementById("showcased").src = "./img/index/showcase-imgs/showcase" + index +".png";
        document.getElementById("showcased-desc").innerText = imageDescript[index]
        if (index === (numShowcase - 1)) {
            index = -1
        }
        setTimeout(startImageCarosel, imgDelay, (index +1 ) )
    }
})();
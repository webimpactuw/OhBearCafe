"use strict";

(function () {

    const imageDescript = ["Croissant Taiyaki", "White Rabbit Cake", "White Rabbit Milk Tea"]
    const numShowcase = 3
    const imgDelay = 8 * 1000;
    let currTimeout;

    window.addEventListener("load", init);

    function init() {
      populateSelectors();
      startImageCarosel(0);
    }

    function startImageCarosel(index) {
      document.getElementById("showcased").src =
        "./img/index/showcase-imgs/showcase" + index + ".png";
      document.getElementById("showcased-desc").innerText =
        imageDescript[index];

      for (let i = 0; i < numShowcase; i++) {
        document.getElementById("selector" + i).src =
          "./img/index/unselectedIcon.png";
      }
      let selector = document.getElementById("selector" + index);
      selector.src = "./img/index/selectedIcon.png";

      if (index === numShowcase - 1) {
        index = -1;
      }
      currTimeout = setTimeout(startImageCarosel, imgDelay, index + 1);
    }

    function populateSelectors() {
      let selectorParent = document.getElementById("selected-selector");
      for (let i = 0; i < numShowcase; i++) {
        let selector = document.createElement("img");
        selector.src = "./img/index/unselectedIcon.png";
        selector.id = "selector" + i;
        selectorParent.appendChild(selector);
        selector.addEventListener("click", function () {
          clearTimeout(currTimeout);
          startImageCarosel(i);
        });
      }
    }
})();
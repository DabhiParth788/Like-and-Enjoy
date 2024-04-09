//  not connected and not needed

import { gsap } from "../node_modules/gsap/index.js";
import { MotionPathPlugin } from "../node_modules/gsap/MotionPathPlugin.js";
gsap.registerPlugin(MotionPathPlugin);
// import "./style.css";

const heartTemplate = document.querySelector("#heart");
const container = document.querySelector(".screen");
const button = document.querySelector(".accept");
const endY = container.clientHeight * -4;
const w = container.clientWidth;

let intervalID; // to keep track of setInterval ID

button.addEventListener("click", (event) => {
  event.preventDefault();
  clearInterval(intervalID); // clear existing interval
  const createAndAnimateHeart = () => {
    for (let i = 0; i < 1; i++) {

    //   let heartImg = document.querySelector("#heartImg");
    //   heartImg.classList.add("z-[10]");

      const heart = heartTemplate.content.firstElementChild.cloneNode(true);
      const width = gsap.utils.random(20, 40);
      const initialX = gsap.utils.random(0, w - width);
      const floatDirection = gsap.utils.random([-1, 1]);

      const getNextX = (dir) => {
        return gsap.utils.random(initialX, initialX + 200 * dir);
      };

      gsap.set(heart, {
        width: width,
        x: initialX,
      });
      heart.classList.add(`z-[20]`,`absolute`);
      container.appendChild(heart);

      gsap.to(heart, {
        duration: 24,
        motionPath: {
          autoRotate: 90,
          // curviness: 5,
          path: [
            {
              x: getNextX(floatDirection),
              y: endY / gsap.utils.random(2, 4),
            },
            {
              x: getNextX(floatDirection * -1), // reverse float direction
              y: endY,
            },
        ],
    },
    onComplete: () => {
        //   heartImg.classList.remove("z-[10]");
        container.removeChild(heart);
        },
    });
}
};
// Start animation every 100ms until n seconds (n000ms) have passed
let elapsedTime = 0;
intervalID = setInterval(() => {
    if (elapsedTime < 6000) {
        createAndAnimateHeart();
        elapsedTime += 100; // increment elapsed time by 100ms
    } else {
        clearInterval(intervalID); // stop interval after n seconds
    }
}, 100);
});

// Get the data
var users = [
  {
    // profilPic: "",
    displayPic: "images/Harshit1.JPG",
    pendingMessage: "3",
    location: "Gujrat, India",
    name: "Harshit",
    age: "20",
    interests: [
      {
        icon: `<i class="fa-solid fa-music fa-sm"></i>`,
        interest: "Music",
      },
      {
        icon: `<i class="fa-solid fa-book-open fa-sm"></i>`,
        interest: "Reading",
      },
      {
        icon: `<i class="fa-solid fa-code fa-sm"></i>`,
        interest: "Coding",
      },
    ],
    bio: "Curantly learning DSA while enjoing the music. Studied at Goverment Engg. Collage Bhavnagr. Have a Good Friend named Parth.",
    isFriend: null,
  },
  {
    // profilPic: "",
    displayPic: "images/Jaimin1.JPG",
    pendingMessage: "4",
    location: "Gujrat, India",
    name: "Jaimin",
    age: "22",
    interests: [
      {
        icon: `<i class="fa-solid fa-music fa-sm"></i>`,
        interest: "Music",
      },
      {
        icon: `<i class="fa-solid fa-paw fa-sm"></i>`,
        interest: "Pets",
      },
      {
        icon: `<i class="fa-solid fa-compass fa-sm"></i>`,
        interest: "travaling",
      },
    ],
    bio: "Master of Web Devlopment Curantly learning DSA. Studied at Goverment Engg. Collage Bhavnagr. Have a Good Friend named Parth.",
    isFriend: null,
  },
  {
    // profilPic: "",
    displayPic: "images/Chaudhari.JPG",
    pendingMessage: "5",
    location: "Gujrat, India",
    name: "Chaudhari",
    age: "20",
    interests: [
      {
        icon: `<i class="fa-solid fa-chess-pawn fa-sm"></i>`,
        interest: "chess",
      },
      {
        icon: `<i class="fa-solid fa-image fa-sm"></i>`,
        interest: "Photography",
      },
      {
        icon: `<i class="fa-solid fa-dumbbell fa-sm"></i>`,
        interest: "Gym",
      },
    ],
    bio: "Curantly learning Full Stack Web Devlopment while Playing Games. Studied at Goverment Engg. Collage Bhavnagr. Have a Good Friend named Parth.",
    isFriend: null,
  },
  {
    // profilPic: "Dabhi2.JPG",
    displayPic: "images/Dabhi1.jpg",
    pendingMessage: "9+",
    location: "Gujrat, India",
    name: "Parth",
    age: "20",
    interests: [
      {
        icon: `<i class="fa-solid fa-gamepad fa-sm"></i>`,
        interest: "Video Game",
      },
      {
        icon: `<i class="fa-solid fa-book-open fa-sm"></i>`,
        interest: "Reading",
      },
      {
        icon: `<i class="fa-solid fa-paw fa-sm"></i>`,
        interest: "Pets",
      },
    ],
    bio: "Learning Complete WebDevlopment. Studied at Goverment Engg. Collage Bhavnagr.Good Friend of Harshit,Chaudhari and Jaimin (XD).",
    isFriend: null,
  },
];

let curr = 0;
let isAnimating = false;

function setData(index) {
  document.querySelector(".badge h5").textContent = users[index].pendingMessage;
  document.querySelector(".location  h3").textContent = users[index].location;
  document.querySelector(".name h1:nth-child(1)").textContent =
    users[index].name;
  document.querySelector(".name h1:nth-child(2)").textContent =
    users[index].age;

  var clutter = "";
  users[index].interests.forEach(function (interest) {
    clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">${interest.icon} <h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3> </div>`;
  });
  document.querySelector(".tags").innerHTML = clutter;
  document.querySelector(".bio p").textContent = users[index].bio;
}

(function setInitial() {
  // not Working
  function select(elem) {
    document.querySelector(elem);
  }

  document.querySelector(".maincard img").src = users[curr].displayPic;
  document.querySelector(".incomingcard img").src = users[curr + 1]?.displayPic;

  setData(curr);

  curr = 2;
})();

function imageChange() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        console.log("curr after animation", curr);
        let main = document.querySelector(`.maincard`);
        let incoming = document.querySelector(".incomingcard");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });
        if (curr === users.length) {
          curr = 0;
        }
        document.querySelector(".maincard img").src = users[curr].displayPic;
        curr++;
        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
      },
    });

    // Image animation
    tl.to(
      ".maincard",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "flag"
    ).from(
      ".incomingcard",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duaration: 1.1,
      },
      "flag"
    );
  }
}

let deny = document.querySelector(`.deny`);
let accept = document.querySelector(`.accept`);

deny.addEventListener("click", () => {
  // console.log("deny Clicked");
  imageChange();
  setData(curr - 1);

  // Details animation
  gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: 0.06,
    ease: Power4.easeInOut,
    duaration: 1,
  });
});

// Create a new div for each element so that we can animate it separately from the others
(function containerCreator() {
  document.querySelectorAll(".element").forEach(function (element) {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`, "overflow-hidden");
    div.appendChild(element);
    document.querySelector(".details").appendChild(div);
  });
})();

// 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

// heart animation
import gsap from "./gsap-public/esm/gsap-core.js";
import { MotionPathPlugin } from "./node_modules/gsap/MotionPathPlugin.js";
gsap.registerPlugin(MotionPathPlugin);

const heartTemplate = document.querySelector("#heart");
const container = document.querySelector(".screen");
const button = document.querySelector(".accept");
const endY = container.clientHeight * -1.2;
const w = container.clientWidth;

document.addEventListener("DOMContentLoaded", function () {
  var intervalID;
  var isAnimating = false; // Assuming isAnimating is a global variable defined elsewhere

  // Define createAndAnimateHeart function globally
  const createAndAnimateHeart = () => {
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
    heart.classList.add(`z-[20]`, `absolute`);
    container.appendChild(heart);

    gsap.to(heart, {
      duration: 6,
      motionPath: {
        autoRotate: 90,
        path: [
          {
            x: getNextX(floatDirection),
            y: endY / gsap.utils.random(2, 4),
          },
          {
            x: getNextX(floatDirection * -1),
            y: endY,
          },
        ],
      },
      onStart: () => {
        music.play();
        console.log("Playing music");
      },
      onComplete: () => {
        isAnimating = false;
        container.removeChild(heart);
        // music.pause();
        // console.log("Stopped music");
      },
    });
  };

  button.addEventListener("click", (event) => {
    event.preventDefault();
    clearInterval(intervalID); // clear existing interval

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
});

// Music
document.addEventListener("DOMContentLoaded", function () {
  var music = document.getElementById("music");
  var playButton = document.querySelector(".accept");

  playButton.addEventListener("click", function () {
    // alert('lol');
    if (isAnimating) {
      music.play();
      // playButton.textContent = "Pause Music";
      console.log("Playing music");
    }
    if (!isAnimating) {
      music.pause();
      console.log("stop music");
      // playButton.textContent = "Play Music";
    }
  });
});

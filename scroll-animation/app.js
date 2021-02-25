const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");


//  SCROLLMAGIC

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 12000, //length of video, change the displacement of trigger and end
    triggerElemnt: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro) //set duration to intro (video). Apprximately one mouse scrolling / sec
.addTo(controller);

//Video Animation
let accelAmount = 1 // change video's frame when moving down/up
let scrollpos = 0;
let delay = 0;

scene.on("update",e =>{
    scrollpos = e.scrollPos / 1000;
});

//
setInterval(() => {
    delay += (scrollpos - delay) * accelAmount;
    video.currentTime = scrollpos;
},83.3)
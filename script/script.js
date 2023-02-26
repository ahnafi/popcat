//element
const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");
const point = document.querySelector("#point");
//img
const openImg = "img/open.png";
const closeImg = "img/close.png";
//sound
const openSound = new Audio("/audio/soundOpen.mp3");
const closeSound = new Audio("/audio/soundClose.mp3");
// Event Handlers (Desktops)
btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);
// Event Handers (Touch Screens)
btn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  openMouth();
});
btn.addEventListener("touchend", function (e) {
  e.preventDefault();
  closeMouth();
});

// The functions which will perform the cool stuff
let score = 0;

function openMouth() {
  popcat.src = openImg;
  openSound.play();
  score++;
  point.innerHTML = score;
  point.classList.toggle('animate-wiggle')
}

function closeMouth() {
  popcat.src = closeImg;
  closeSound.play();
  point.classList.toggle('animate-wiggle')
}





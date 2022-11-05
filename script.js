//element
const popcat = document.querySelector(".popcat");
const btn = document.querySelector(".btn");
const point = document.getElementById("point");
const text = document.getElementById("saka");

//img
const openImg = "/img/open.png";
const closeImg = "/img/close.png";
//sound
const openSound = new Audio("/audio/soundOpen.mp3");
const closeSound = new Audio("/audio/soundClose.mp3");
const sakanigadik = new Audio("/audio/sakanigadik.mp3");
const bakso = new Audio("/audio/bakso.mp3");
//sakanigadik.play();
//

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
let nilais = 0;
let nilaib = 0;
function openMouth() {
  popcat.src = openImg;
  openSound.play();
  score++;
  point.innerHTML = score;

  //shake animation
  point.classList.toggle("move");

  //sakanigedik play jika score berkelipatan 100

  nilais++;
  nilaib++;
  if (nilais == 1000) {
    sakanigadik.play();
    nilais -= 1000;
    saka.innerHTML = "anda sangat gabut sakanigadiiiikkkk!!!!!!!!!!!";
  } else if (nilaib == 100) {
    bakso.play();
    nilaib -= 100;
  }
}

function closeMouth() {
  popcat.src = closeImg;
  closeSound.play();
  point.classList.toggle("move");
}

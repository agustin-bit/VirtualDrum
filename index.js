
for (i=0; i<7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    var letter = this.innerHTML;
    playSound(letter);
  });
}

addEventListener("keydown", function (event) {
  playSound(event.key);
})

function playSound(letter) {
  console.log(letter);
  var sound;
  switch (letter) {
    case "w":
        sound = new Audio("sounds/crash.mp3");
      break
    case "a":
        sound = new Audio("sounds/kick-bass.mp3");
      break
    case "s":
        sound = new Audio("sounds/snare.mp3");
      break
    case "d":
        sound = new Audio("sounds/tom-1.mp3");
      break
    case "j":
        sound = new Audio("sounds/tom-2.mp3");
      break
    case "k":
        sound = new Audio("sounds/tom-3.mp3");
      break
    case "l":
        sound = new Audio("sounds/tom-4.mp3");
      break

    default:
        sound = new Audio("sounds/tom-4.mp3");
  }
  sound.play();
}

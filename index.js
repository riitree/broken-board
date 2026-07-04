$("button.drum").on("click", function () {
  console.log(this.id);
  makeSound(this.id);
});

$("button.drum").on("mouseover", function () {
  hoverAnimation(this.id);
});

function makeSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

$(".beat").on("click", function () {
  var audio = new Audio("sounds/guitar.wav");
  audio.play();
});

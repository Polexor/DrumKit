for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
// For mouse click
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML; // the button that triggered the event's innerHTML
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
// For keyboard keys
  document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
  })


// function that takes a character and checks it against the switch statement
function makeSound(key){
  switch (key) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "a":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;
    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;


    default: console.log(buttonInnerHTML);

  }
}
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed"); // go into classlist and add the class called pressed
  setTimeout(function() {
    activeButton.classList.remove("pressed");}, 100);
}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
// 7 A deeper understanding of javaScript objects (12)
// All event references on mdn docs

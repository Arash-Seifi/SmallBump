AOS.init();
//  animation
// Wrap every letter in a span
var textWrapper = document.getElementsByClassName("heroBox-text-Cont");
for (var i = 0; i < textWrapper.length; i++) {
  textWrapper[i].innerHTML = textWrapper[i].textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
}
anime.timeline({ loop: false }).add({
  targets: ".heroBox-text-Cont .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 2250,
  delay: (el, i) => 150 * (i + 1),
});
var contactText = document.querySelector(".heroBox-contact");
contactText.innerHTML = contactText.textContent.replace(
  /\S/g,
  "<span class='contactLetter'>$&</span>"
);
anime.timeline({ loop: false }).add({
  targets: ".heroBox-contact .contactLetter",
  translateX: [40, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1900,
  delay: (el, i) => 1000 + 80 * i,
});

var tableUnderline = document.getElementsByClassName("table-header-underline");
//  dakhel MY-JS onscroll onja dadam
function scrollFunction2() {
  console.log("working");
}
// overwrite stopPlayer method
Flickity.prototype.stopPlayer = function () {
  this.player.stop();
  // always resume play after 3 seconds
  setTimeout(() => {
    this.player.play();
  }, 3000);
};


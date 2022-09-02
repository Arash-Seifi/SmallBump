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

var numberUnderline = document.getElementById("section1-number-underline");
var numberUnderline2 = document.getElementById("section1-number-underline2");
var numberUnderline3 = document.getElementById("section2-number-underline");

var tableUnderline = document.getElementsByClassName("table-header-underline");
//  dakhel MY-JS onscroll onja dadam
function scrollFunction2() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    numberUnderline.style.width = "100%";
    for (var i = 0; i < tableUnderline.length; i++) {
      tableUnderline[i].style.width = "80%";
    }
  }
  if (
    document.body.scrollTop > 1100 ||
    document.documentElement.scrollTop > 1100
  ) {
    numberUnderline2.style.width = "100%";
  }
  if (
    document.body.scrollTop > 2200 ||
    document.documentElement.scrollTop > 2200
  ) {
    numberUnderline3.style.width = "100%";
  }
}

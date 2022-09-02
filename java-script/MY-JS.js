//  navBar function
var prevScrollpos = window.pageYOffset;
const navItem = document.getElementsByClassName("nav-effect");
window.onscroll = function () {
  scrollFunction2();
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    for (var i = 0; i < navItem.length; i++) {
      navItem[i].classList.remove("hideNavItem");
      navItem[i].classList.add("showNavItem");
    }
  }
  if (prevScrollpos < currentScrollPos) {
    for (var y = 0; y < navItem.length; y++) {
      navItem[y].classList.add("hideNavItem");
    }
  }
  prevScrollpos = currentScrollPos;
};
// dakhel circle Effect call kardam
function navbarOpacity() {
  for (var i = 0; i < navItem.length; i++) {
    navItem[i].style.opacity = "1";
  }
}
function navbarOpacityRemove() {
  for (var i = 0; i < navItem.length; i++) {
    navItem[i].style.opacity = "0.5";
  }
}
// circle follow Crusor
jQuery(document).ready(function () {
  var mouseX = 0,
    mouseY = 0;
  var xp = 0,
    yp = 0;

  $(document).mousemove(function (e) {
    mouseX = e.pageX - 30;
    mouseY = e.pageY - 30;
  });

  setInterval(function () {
    xp += (mouseX - xp) / 6;
    yp += (mouseY - yp) / 6;
    $("#circle").css({ left: xp + "px", top: yp + "px" });
  }, 20);


});
function mouseCircleEffect(evt) {
  navbarOpacityRemove();
  evt.currentTarget.style.opacity = "1";
  var circle = document.getElementById("circle");
  circle.classList.add("circleEffect");
}
function mouseCircleRemoveEffect() {
  navbarOpacity();
  var circle = document.getElementById("circle");
  circle.classList.remove("circleEffect");
}
// heeroBox text height
var heroBoxCont = document.getElementById("heroBox-text-left-Container");
var heroBoxContHight = heroBoxCont.clientHeight;

document.getElementById("heroBox-right-filler").style.height =
  heroBoxContHight / 2 + "px";

// heroBox contact us animation
var contactUsAnimationCheck = true;
function contactUsAnimeFalse() {
  contactUsAnimationCheck = false;
}
function contactUsAnime() {
  if (contactUsAnimationCheck) {
    var animeCont = document.getElementById(
      "heroBox-contact-animation-overlay"
    );
    animeCont.classList.add("heroBox-contact-animation-overlay-action");
    setTimeout(removeContactUsAnime, 800);
  }
  contactUsAnimationCheck = true;
}
function removeContactUsAnime() {
  var animeCont = document.getElementById("heroBox-contact-animation-overlay");
  animeCont.classList.remove("heroBox-contact-animation-overlay-action");
  setTimeout(contactUsAnime, 800);
}

// to The Top Functional
function toTheTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
AOS.init({
  duration: 1200,
});

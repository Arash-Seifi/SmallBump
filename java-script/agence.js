AOS.init();
var tilt = document.querySelectorAll(".personImage");
VanillaTilt.init(tilt, {
  reverse: false,
  max: 15,
  speed: 400,
  glare: true,
  reset: true,
  perspective: 500,
  transition: true,
  "max-glare": 0.75,
});
var personContainer = document.getElementsByClassName("imageClass");
window.onscroll = function () {
  showImages();
};

function showImages() {
  for (var i = 0; i < personContainer.length; i++) {
    if (
      personContainer[i].getBoundingClientRect().top < $(window).scrollTop()
    ) {
      personContainer[i].style.height = "540px";
    }
  }
}

var mainCircle = document.getElementById("circle");
function removeCircle() {
  mainCircle.classList.remove("circle");
}
function addCircle() {
  mainCircle.classList.add("circle");
}
var cursor1 = document.querySelector(".cursor1");
var cursor2 = document.querySelector(".cursor2");
document.body.onmousemove = function (e) {
  /* 15 = background-size/2 */
  cursor1.style.setProperty(
    "background-position",
    e.clientX - 15 + "px " + (e.clientY - 15) + "px"
  );
  cursor2.style.setProperty(
    "background-position",
    e.clientX - 15 + "px " + (e.clientY - 15) + "px"
  );
};
function circleToCenter() {
  document.body.onmousemove = function (e) {
    /* 15 = background-size/2 */
    cursor1.style.setProperty(
      "background-position",
      e.clientX - 35 + "px " + (e.clientY - 35) + "px"
    );
    cursor2.style.setProperty(
      "background-position",
      e.clientX - 35 + "px " + (e.clientY - 35) + "px"
    );
  };
}
function circleToCenterRemove() {
  document.body.onmousemove = function (e) {
    /* 15 = background-size/2 */
    cursor1.style.setProperty(
      "background-position",
      e.clientX - 15 + "px " + (e.clientY - 15) + "px"
    );
    cursor2.style.setProperty(
      "background-position",
      e.clientX - 15 + "px " + (e.clientY - 15) + "px"
    );
  };
}
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
var titleSwapElm = document.getElementsByClassName("titleSwapElm");
var contentSwapElm = document.getElementsByClassName("contentSwapElm");
var movingElement = document.getElementsByClassName("changingElements");
var numberOfMovingElements = movingElement.length;
var topPositionElements = 60;

var titleSwapElmTopPosition = 100;
var titleSwapElmPositionDistance = 0;
var contentSwapElmTopPosition = 150;
var contentSwapElmPositionDistance = 0;
// top positioning ---> 20
// setting position
var positionDistance = 0;
for (var i = 0; i < movingElement.length; i++) {
  movingElement[i].style.top = positionDistance + "px";
  positionDistance = positionDistance + topPositionElements;

  titleSwapElm[i].style.top = titleSwapElmPositionDistance + "px";
  titleSwapElmPositionDistance =
    titleSwapElmPositionDistance + titleSwapElmTopPosition;

  contentSwapElm[i].style.top = contentSwapElmPositionDistance + "px";
  contentSwapElmPositionDistance =
    contentSwapElmPositionDistance + contentSwapElmTopPosition;
}
function nextElement() {
  nextBtn.disabled = true;
  setTimeout(() => {
    nextBtn.disabled = false;
    console.log("Button Activated");
  }, 500);
  if (movingElement[numberOfMovingElements - 1].offsetTop == 0) {
    var positionDistance = 0;
    var titleSwapElmPositionDistance = 0;
    var contentSwapElmPositionDistance = 0;
    for (var k = 0; k < movingElement.length; k++) {
      movingElement[k].style.top = positionDistance + "px";
      positionDistance = positionDistance + topPositionElements;

      titleSwapElm[k].style.top = titleSwapElmPositionDistance + "px";
      titleSwapElmPositionDistance =
        titleSwapElmPositionDistance + titleSwapElmTopPosition;

      contentSwapElm[k].style.top = contentSwapElmPositionDistance + "px";
      contentSwapElmPositionDistance =
        contentSwapElmPositionDistance + contentSwapElmTopPosition;
    }
  } else {
    for (var i = 0; i < movingElement.length; i++) {
      movingElement[i].style.top =
        Math.ceil(
          (movingElement[i].offsetTop + -topPositionElements) /
            topPositionElements
        ) *
          topPositionElements +
        "px";

      titleSwapElm[i].style.top =
        Math.ceil(
          (titleSwapElm[i].offsetTop + -titleSwapElmTopPosition) /
            titleSwapElmTopPosition
        ) *
          titleSwapElmTopPosition +
        "px";


        contentSwapElm[i].style.top =
        Math.ceil(
          (contentSwapElm[i].offsetTop + -contentSwapElmTopPosition) /
            contentSwapElmTopPosition
        ) *
          contentSwapElmTopPosition +
        "px";


    }
  }
}
function prevElement() {
  prevBtn.disabled = true;
  setTimeout(() => {
    prevBtn.disabled = false;
    console.log("Button Activated");
  }, 1000);
  if (movingElement[0].offsetTop == 0) {
    var positionDistance = topPositionElements * (numberOfMovingElements - 1);
    var titleSwapPositionDistance =
      titleSwapElmTopPosition * (numberOfMovingElements - 1);
      var contentSwapPositionDistance =
      contentSwapElmTopPosition * (numberOfMovingElements - 1);

    for (var j = 0; j < movingElement.length; j++) {
      movingElement[j].style.top = -positionDistance + "px";
      positionDistance = positionDistance - topPositionElements;

      titleSwapElm[j].style.top = -titleSwapPositionDistance + "px";
      titleSwapPositionDistance =
        titleSwapPositionDistance - titleSwapElmTopPosition;

        contentSwapElm[j].style.top = -contentSwapPositionDistance + "px";
        contentSwapPositionDistance =
          contentSwapPositionDistance - contentSwapElmTopPosition;
    }
  } else {
    for (var i = 0; i < movingElement.length; i++) {
      movingElement[i].style.top =
        Math.ceil(
          (movingElement[i].offsetTop + topPositionElements) /
            topPositionElements
        ) *
          topPositionElements +
        "px";

      titleSwapElm[i].style.top =
        Math.ceil(
          (titleSwapElm[i].offsetTop + titleSwapElmTopPosition) /
            titleSwapElmTopPosition
        ) *
          titleSwapElmTopPosition +
        "px";

        contentSwapElm[i].style.top =
        Math.ceil(
          (contentSwapElm[i].offsetTop + contentSwapElmTopPosition) /
            contentSwapElmTopPosition
        ) *
          contentSwapElmTopPosition +
        "px";
    }
  }
}

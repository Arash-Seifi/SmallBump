var filterItem = document.getElementsByClassName("filterItem");
var filterItemPosition = 0;
var filterItemPositionDistace = 0;
for (var i = 0; i < filterItem.length; i++) {
  filterItem[i].style.left = filterItemPosition + "px";
  filterItemPositionDistace = filterItem[i].offsetWidth * 1.5;
  filterItemPosition = filterItemPosition + filterItemPositionDistace;
}
var underlineFilterItem = document.getElementById("underlineFilterItem");
underlineFilterItem.style.width = filterItem[0].offsetWidth + "px";
function changeUnderline(evt) {
  for (var i = 0; i < filterItem.length; i++) {
    filterItem[i].style.opacity = "0.5";
  }
  evt.currentTarget.style.opacity = "1";
  var evtWidth = evt.currentTarget.offsetWidth;
  var rect = evt.currentTarget.getBoundingClientRect();
  underlineFilterItem.style.width = evtWidth + "px";
  underlineFilterItem.style.left = evt.currentTarget.offsetLeft + "px";
}

var contentImage = document.getElementsByClassName("contentImg");
window.onscroll = function () {
  showImages();
};

function showImages() {
  for (var i = 0; i < contentImage.length; i++) {
    if (
      contentImage[i].getBoundingClientRect().top < $(window).scrollTop()
    ) {
      contentImage[i].style.height = "300px";
    }
  }
  contentImage[i].style.height = "auto";
}
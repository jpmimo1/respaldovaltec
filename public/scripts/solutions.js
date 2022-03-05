const buttonDownBanner = document.querySelector(".banner .banner--down-button");
buttonDownBanner.addEventListener("click", function () {
  const weHaveSolutions = document.querySelector(".we-have-solutions");
  window.scrollTo(0, weHaveSolutions.offsetTop);
});

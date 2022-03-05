const buttonDownBanner = document.querySelector(".banner .banner--down-button");
buttonDownBanner.addEventListener("click", function () {
  const otherWaysContact = document.querySelector(".licenses-description");
  window.scrollTo(0, otherWaysContact.offsetTop);
});

const buttonDownBanner = document.querySelector(".banner .banner--down-button");
buttonDownBanner.addEventListener("click", function () {
  const otherWaysContact = document.querySelector(".saas-description");
  window.scrollTo(0, otherWaysContact.offsetTop);
});

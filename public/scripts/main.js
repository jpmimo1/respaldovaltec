const buttonSeeMoreOurServices = document.querySelector(
  ".our-services__button-see-more .button-see-more"
);
buttonSeeMoreOurServices.addEventListener("click", function () {
  const cardsOurServices = document.querySelector(".our-services");
  cardsOurServices.classList.toggle("open");
  if (!cardsOurServices.classList.contains("open")) {
    window.scrollTo(0, cardsOurServices.offsetTop);
  }
});

const buttonDownBanner = document.querySelector(".banner .banner--down-button");
buttonDownBanner.addEventListener("click", function () {
  const ourServicesSection = document.querySelector(".our-services");
  window.scrollTo(0, ourServicesSection.offsetTop);
});

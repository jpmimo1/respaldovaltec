const buttonDownBanner = document.querySelector(".banner .banner--down-button");
buttonDownBanner.addEventListener("click", function () {
  const otherWaysContact = document.querySelector(".other-ways-contact");
  window.scrollTo(0, otherWaysContact.offsetTop);
});

var modalSuccess = new bootstrap.Modal(
  document.getElementById("modal-success")
);

var contactForm = document.getElementsByClassName("contact-form");

for (let i = 0; i < contactForm.length; i++) {
  contactForm[i].addEventListener("submit", (e) => {
    e.preventDefault();
    modalSuccess.show();
  });
}

var closeButtonModal = document.querySelector(
  "#modal-success .modal-success__close-button"
);
closeButtonModal.addEventListener("click", () => {
  modalSuccess.hide();
});

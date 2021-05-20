
// Form Validation

const form = document.querySelector('.form')

const emailField = document.querySelector('input[type="email"]');

const submitField = document.querySelector('input[type="submit"]');

const errorField = document.querySelector('.error');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailField.value === "" || emailField.value == null) {
        errorField.innerHTML = "Please Fill Out";
        return false
    }
    else if (emailField != "") {
        errorField.innerHTML = null;
        return true
    }
})


// Scroll 

const mainHeader = document.querySelector('.header');

window.addEventListener('scroll', () => {
    mainHeader.classList.toggle('active', scrollY > 0)
})


// Swiper Js

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },

    loop : true
  });




















































































//# sourceMappingURL=script.js.map

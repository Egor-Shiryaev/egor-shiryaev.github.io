var servicesCards = document.querySelectorAll(".services__card");
var servicesBtn = document.querySelector(".services__btn");
var servicesBtntText = document.querySelector(".services__btn-text");
var servicesBtnImg = document.querySelector(".services__btn-img");

servicesBtn.addEventListener("click", function () {
  for (let i = 0; i < servicesCards.length; i++) {
    servicesCards[i].classList.toggle("services__card--hidden");
  }

  if (servicesBtntText.textContent == "Показать все") {
    servicesBtnImg.classList.add("services__btn-img--hidden");
    servicesBtntText.textContent = "Скрыть";
  } else {
    servicesBtntText.textContent = "Показать все";
    servicesBtnImg.classList.remove("services__btn-img--hidden");
  }
});

const breakpoint = window.matchMedia("(min-width:567px)");
let mySwiper;
const breakpointChecker = function () {
  if (breakpoint.matches) {
    if (mySwiper) {
      mySwiper.destroy(true, true);
    }
  } else {
    return enableSwiper();
  }
};

const enableSwiper = function () {
  mySwiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};
breakpoint.addEventListener("change", breakpointChecker);
breakpointChecker();

// const swiper = new Swiper('.swiper', {

//   slidesPerView: "auto",
//         // centeredSlides: true,
//         // spaceBetween: 0,

//   pagination: {
//     el: '.swiper-pagination',
//     clickable:true,
//   },

// });

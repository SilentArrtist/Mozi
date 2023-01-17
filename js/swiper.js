import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper_next',
    prevEl: '.swiper_prev',
  },
  breakpoints: {
    993: {
      slidesPerView: 4,
    },
    769: {
      slidesPerView: 3,
    },
    481: {
      slidesPerView: 2,
    }
  },
});
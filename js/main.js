const swiper = new Swiper('.dresscode__slider', {
  slidesPerView: 4,
  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

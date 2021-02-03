const flowerSlider = new Swiper('.flowers-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Стрелки
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,

  // Стрелки
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 4,
  cssMode: true,


  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    cssMode: true,
  },
})
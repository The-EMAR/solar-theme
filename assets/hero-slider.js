if (!customElements.get('hero-slider')) {
  class HeroSlider extends HTMLElement {
    constructor() {
      super();

      this.initSlider();
    }

    initSlider() {
      this.slider = new Swiper(this, {
        draggable: true,
        slidesPerView: 1,
        watchOverflow: true,
        // autoHeight: true,
        navigation: {
          nextEl: '.swiper-arrow--next',
          prevEl: '.swiper-arrow--prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        }
      });
    }
  }

  customElements.define(
    'hero-slider',
    HeroSlider,
  );
}


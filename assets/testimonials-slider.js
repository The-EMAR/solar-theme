if (!customElements.get('testimonials-slider')) {
  class TestimonialsSlider extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.initSlider();
    }

    initSlider() {
      this.slider = new Swiper(this, {
        draggable: true,
        slidesPerView: 1,
        watchOverflow: true,
        breakpoints: {
          767: {
            slidesPerView: 1,
          },
          1023: {
            slidesPerView: 3,
          },
        },
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
    'testimonials-slider',
    TestimonialsSlider,
  );
}


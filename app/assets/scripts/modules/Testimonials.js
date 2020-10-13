import "owl.carousel";

class Testimonial {
  constructor() {
    this.initTestSlider();
  }

  initTestSlider() {
    $(".slider-custom").owlCarousel({
      nav: false,
      autoplay: true,
      loop: true,
      responsiveClass: true,
      dots: true,
      margin: 25,
      responsive: {
        0: {
          items: 1,
          margin: 15,
        },
        720: {
          items: 2,
          margin: 20,
        },
        940: {
          items: 3,
          margin: 20,
        },
      },
    });
  }
}

export default Testimonial;

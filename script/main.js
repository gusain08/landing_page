AOS.init();

$('.testimonials_sections_wrap').slick({
    lazyLoad: 'ondemand',
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    arrows:false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
      
      
      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
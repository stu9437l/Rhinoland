$(document).ready(function () {
  // our partners slider
  $(".collection-card__list").slick({
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  // testimonial slider
  $(".testimonial__slider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
  });

  // our partners slider
  $(".partner-company__list").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: false,
    cssEase: "linear",
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //product media slider
  $(".product-slider__list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: ".product-thumbnail__list",
  });
  $(".product-thumbnail__list").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    vertical: true,
    arrows: true,
    focusOnSelect: true,
    // centerMode: false,
    asNavFor: ".product-slider__list",
  });

  //product more information tabs
  $(".product-more-info__tabs-nav .product-more-info__tabs-item").each(
    function () {
      $(this).click(function () {
        $(
          ".product-more-info__tabs-nav .product-more-info__tabs-item"
        ).removeClass("active");
        $(this).addClass("active");
        const target = $(this).data("target");
        $(".product-more-info__tabs-content").removeClass("show");
        $(`#${target}`).addClass("show");
      });
    }
  );

  //mobile menu dropdown
  $(".mobile-menu .main-nav__link").click(function () {
    $(this).closest(".main-nav__item").find(".mob-dropdown-menu").slideToggle();
    $(this).find("i").toggleClass("fa-chevron-up");
  });

  //faqs item toggle
  const faqButton = $(".faq__item .faq__question");
  faqButton.each(function () {
    $(this).click(function () {
      $(".faq__item .faq__content").slideUp();
      faqButton.find(".faq__icon").html(' <i class="fa-solid fa-plus"></i>');
      if (
        $(this).closest(".faq__item").find(".faq__content").css("display") ===
        "none"
      ) {
        $(this).find(".faq__icon").html(' <i class="fa-solid fa-minus"></i>');
        $(this).closest(".faq__item").find(".faq__content").slideDown();
      }
    });
  });
});

//view more filter option
$("#view__more__filter__category").click(function () {
  $(".main-filter__options-list li:nth-child(n+11)").slideToggle();
});

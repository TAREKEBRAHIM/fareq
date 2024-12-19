$(function () {
  const $newsLine = $(".news-line");
  (function animate() {
    $newsLine
      .css({ left: -$newsLine.width() })
      .animate(
        { left: $(".news-container").width() },
        20000,
        "linear",
        animate
      );
  })();
});







$(document).ready(function () {
  var owl = $(".owl-carousel-cards");
  owl.owlCarousel({
    loop: true,
    margin: 20,
    nav: false, // تعطيل التنقل الافتراضي للـ Owl
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // ربط الأزرار المخصصة
  $(".custom-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".custom-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
});










$(document).ready(function () {
  var owl = $(".owl-carousel-vidoes");
  owl.owlCarousel({
    loop: true,
    margin: 20,
    nav: false, // تعطيل التنقل الافتراضي للـ Owl
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });

  // ربط الأزرار المخصصة
  $(".custom-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".custom-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
});



$(window).on("scroll", function () {
  $("#scrollToTop").toggleClass("show", $(this).scrollTop() > 800);
});

$("#scrollToTop").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "smooth");
});

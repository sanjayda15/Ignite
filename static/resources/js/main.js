var scroll = new SmoothScroll('a[href*="#"]', {
speed: 1000
});

$(document).ready(function () {
  $(".box").hover(
    function () {
      $(this).addClass("box-hover");
    },
    function () {
      $(this).removeClass("box-hover");
    }
  );
});

if ($(window).width() < 769) {
          $('#navlast').addClass('order-last');
      } else {
          $('#navlast').removeClass('order-last');
      }

$(document).ready(function () {
  $(".box").hover(function () {
    $(this).toggleClass("box-hover");
  });
});

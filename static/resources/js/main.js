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



$(document).ready(function () {
  $(".box").hover(function () {
    $(this).toggleClass("box-hover");
  });
});

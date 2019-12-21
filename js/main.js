$(document).ready(function() {
  $(".slider__items").slick({
    dots: true
  });

  let time = document.querySelectorAll(".slick-dots button");

  time[0].innerText = "";
  time[1].innerText = "";
  time[2].innerText = "";

  $(".menu-icon").on("click", function() {
    $(".menu__inner").slideToggle();
  });
});

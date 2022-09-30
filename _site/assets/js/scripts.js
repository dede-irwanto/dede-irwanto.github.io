$(document).ready(function () {
  $("img").addClass("img-fluid");
  $(".post-card > *").slice(0, 8).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".post-card > *:hidden").slice(0, 8).slideDown();
    if ($(".post-card > *:hidden").length == 0) {
      $("#load").fadeOut("slow");
    }
    $("body").animate(
      {
        scrollTop: $(this).offset().top,
      },
      1500
    );
  });
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 10) {
    $("nav").addClass("animate");
    $("nav").addClass("shadow-sm");
  } else {
    $("nav").removeClass("shadow-sm");
    $("nav").removeClass("animate");
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("#back-to-top").fadeIn();
  } else {
    $("#back-to-top").fadeOut();
  }
});
// scroll body to 0px on click
$("#back-to-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    400
  );
  return false;
});

$(function () {
  $("input.aa-Input").focus();
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron h2").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1.3 + "%)",
  });

  $(".jumbotron svg").css({
    transform: "translate(0px, " + wScroll / 10 + "%)",
  });

  $("#about img").css({
    transform: "translate(" + wScroll / 80 + "%," + wScroll / 30 + "%)",
  });
});

$(window).on("load", function () {
  $(".kanan").addClass("muncul");
});


$(document).ready(function() {
  $("#star1").click(function() {
    $(".fa-star").css("color", "black");
    $("#star1").css("color", "#add4d4");
  });
  $("#star2").click(function() {
    $(".fa-star").css("color", "black");
    $("#star1, #star2").css("color", "#add4d4");
  });
  $("#star3").click(function() {
    $(".fa-star").css("color", "black");
    $("#star1, #star2, #star3").css("color", "#add4d4");
  });
  $("#star4").click(function() {
    $(".fa-star").css("color", "black");
    $("#star1, #star2, #star3, #star4").css("color", "#add4d4");
  });
  $("#star5").click(function() {
    $(".fa-star").css("color", "black");
    $(".fa-star").css("color", "#add4d4");
  });
});

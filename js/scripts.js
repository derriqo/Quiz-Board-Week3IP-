var blank = false;
$("input:radio").each(function() {
  var val = $('input:radio[name=' + this.name + ']:checked').val();
  if (val === undefined) {
    blank = true;
    return false;
  }
});
if (!blank) {

} else {}
var answer = $(input: radio[answer] val();)



$(document).ready(function() {
  $(".question").hide();
  $("#q1").slideDown();

  $("#next2").click(function() {
    $("#q3").slideDown();
  });
  $("#next3").click(function() {
    $("#q4").slideDown();
  });
  $("#next").click(function() {
    $("#q4").slideDown();
  });
  $("#next5").click(function() {
    $("#q5").slideDown();

  });
});


//
// $(document).ready(function() {
// $("button#nextx").click(function() {
// $("#q1").hide();
// $("#q2").show();
//
//
// });
// });

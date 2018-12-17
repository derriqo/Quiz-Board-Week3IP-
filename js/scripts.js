// Bussiness logic:\
var sum = 0;

function totalMarks() {
  var questions = ["answer", "answer1", "answer2", "answer3", "answer4"];
  questions.forEach(function(question) {
    var userChoice = $("input:radio[name=" + question + "]:checked").val();
    if (userChoice == "20") {
      sum += 20;
    }
  });
  return sum;
};




$(document).ready(function() {


  $("#finish").click(function() {
    var total = totalMarks();
    $(".yote").hide();
    if (!$("input[type='radio']:checked").val()) {
      alert('Please select an answer');
    } else {
      $(".marks").text("You Scored " + total + " out of 100");
      sum=0;
    }

  });
});

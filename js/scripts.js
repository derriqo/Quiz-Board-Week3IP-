$(document).ready(function() {
  $("#finish").click(function (){
    if (!$("input[type='radio']:checked").val()) {
      alert('Please select an answer');
      return false;
    }
  })
});

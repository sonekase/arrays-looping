// business logic
var beepboopFunction = function(number){
  var result = [];

  if(number < 0){
    return "Enter higher number."
  }else if(number > 0 && number%3 === 0){
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  }
}











// user interface
$(document).ready(function(){
  $("#beepboop-form").submit(function(event){
      event.preventDefault();
      var userInput = parseInt($('input#message-input').val());
      var userResult = beepboopFunction(userInput);
      $("#message-output").text(userResult);
      $('#input-form').trigger('reset');
  });
});

// business logic
var beepboopFunction = function(number){
  var result = [];

// set-up: if, else if, else.
  if(number < 0){
    return "Enter higher number."
    }else if(number > 0 && number%3 === 0){
    return "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if(number.toString().indexOf('1') > -1){
    return "Boop!";
    } else if(number%10 === 0){
    return "Beep!";
    } else {
    for(var i = 0; i <= number; i += 1){
      result.push(i);
      };
    }
    return result.toString();
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

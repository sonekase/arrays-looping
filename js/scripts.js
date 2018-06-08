// business logic
var beepboopFunction = function(string){
  return string;

};










// user interface
$(document).ready(function(){
  $("#beepboop-form").submit(function(event){
      event.preventDefault();
      var userInput = $("input#message-input").val();
      var userResult = beepboopFunction(userInput);
      $("#message-output").text(userResult);



  });
});

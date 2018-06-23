//business logic
var pingPong = function(userInput) {
  var resultsArray = [];
  for (i = 1; i <= userInput; i += 1) {
    
  }

}

//UserInteface logic

$(document).ready(function() {
  $(".form-inline").submit(function(event) {
    event.preventDefault();
    var userinputOne = $("#userInput").val();
    var displayArray = [];
    displayArray = pingPong();
    displayArray.forEach(function(item) {
      $("#yourresult").append("<li>" + item + "</li>");
    });
  });
});

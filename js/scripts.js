//business logic
var pingPong = function(userInput) {
  var resultsArray = [];
  for (i = 1; i <= userInput; i += 1) {
    if (i % 15 === 0) {
      resultsArray.push("Ping-pong!");
    } else if (i % 3 === 0) {
      resultsArray.push("Ping!");
    } else if (i % 5 === 0) {
      resultsArray.push("Pong!");
    } else {
      resultsArray.push(i);
    }
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

//business logic
var pingPong = function(userInput) {
  var resultsArray = [];
  //for loop , iteration till the userInput number , building the result set
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
//returning the result array
  return resultsArray;

}

//User-Inteface logic

$(document).ready(function() {
  $(".form-inline").submit(function(event) {
    event.preventDefault();
    //clears the existing result list
    $(".yourresult").html("");
    var userinputOne = $("#userInput").val();
    //validates the userInputOne
    if (isNaN(userinputOne) || userinputOne === "") {
      alert("Enter valid input");
      //else will go through the pingPongfunction loop
    } else {
      var displayArray = [];
      displayArray = pingPong(userinputOne);
      displayArray.forEach(function(num) {
        $(".yourresult").append("<li>" + num + "</li>");
      });
    }
  });
});

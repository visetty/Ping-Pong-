//business logic

var resultArray = [];


 function pingPong() {
 var userinputOne = $("#userInput").val();
  for (var i = 1; i <= userinputOne; i = i + 1) {
    if (i === NaN) {
      alert("Enter a valid Number:");
    } else if ((i % 3) === 0 && (i % 5) === 0) {
      resultArray.push("Ping-pong!");
    } else if (i % 3 === 0) {
      resultArray.push("Ping!");
    }else if (i % 5 === 0) {
      resultArray.push("Pong!");
    } else {
      resultArray.push(i);
    };

  }
  return resultArray;
}

//UserInteface logic

$(document).ready(function(){
  $("#blanks-form").submit(function(event) {
    event.preventDefault();
    var userinputOne = $("#userInput").val();
    var displayArray = pingPong();
    resultArray.forEach(function(displayArray) {
      $("#yourresult").append("<li>" + displayArray + "</li>");
    });
  });
});

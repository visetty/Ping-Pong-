//business logic

var resultArray = [];

 function pingPong(count) {

 var resultArray = [];
  for (var i = 1; i <= count; i = i + 1) {
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

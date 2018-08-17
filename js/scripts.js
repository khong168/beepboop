// Business Logic- Back End

var beepBoop = function(userInput) {
var answer = [];

  for (var i = 0; i <= userInput; i++) {
    if  (i.toString() > 0 && i.toString() % 3 === 0) {
      answer.push (" I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (i.toString().includes("0")) {
      answer.push(" Beep!");
    } else if (i.toString().includes("1")) {
      answer.push(" Boop!");
    } else {
      answer.push(i + "");
    };
  };

  console.log(answer)
    return answer;
};
// var userInput = function(#inputUserForm) {
// }
//
// function error(userInput) {
//     return userInput % 1 === 0;
//
//     alert("Must input numbers");
//     return false;)
// }
//$(document).ready(function()

// }
// }
//Front End User Interface
$(document).ready(function() {
  $("form#userForm").submit(function(event) {
  event.preventDefault();
  var inputNumber = parseInt($("input#inputUserForm").val());
  var finalNumber = beepBoop(inputNumber);


  if (isNaN(inputNumber)) {
    alert("Error. Not a valid number, try again!");
  }
    $("#answer").show();
    $("#answer").empty();

    $("<li>" + finalNumber + "</li>").appendTo("#answer");
    $("form#userForm")[0].reset();
  });
});

  // var userInput = parseInt($("input#userInputForm").val());
    // if (isNaN(userInput) || userInput < 0) {
    //   alert("Error. Not a valid number, try again!")

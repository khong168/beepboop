// Business Logic- Back End

var beepBoop = function(userInput) {
  console.log("muffin")
var output = [];
  for (var i = 0; i <= userInput; i++) {
    if  (i.toString().includes("0")) {
      output.push(" Beep!");
    } else if (i.tostring().includes("1")) {
      output.push(" Boop!");
    }else if (i % 3 === 0) {
      output.push(" I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      output.push(" " + i);
    }
  }
  return outcome;
}
//
//   if (i % 3 === 0 && i> 0) {
//     output.push();
//   }
// }

// $(function() {
//
// })
//
// function error(userInput) {
//   var userInput = (parseInt(#inputUserForm).val());
//     if ( parseFloat(userInput) !== parseInt(userInput) || parseInt(input) < 1 ){
//     return "Error. Invalid Input";
//     }
//   }





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

  var userInput = parseInt($("input#userInputForm").val());
  // var Result = output(inputNumber)
    // if (isNaN(userInput) || userInput < 0) {
    //   alert("Error. Not a valid number, try again!")

    // }
});
});


//   var UserInput = parseInt($("input#userInputForm").val());
//   });
// });
//     var output =
//   }))
//
//
//
//
//   function beepBoop(inputNumber) {
// var output = [];













// }

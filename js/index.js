function akanNames() {
  var day = document.getElementById("day").value;
  var DD = parseInt(day); // dd -> day
  var month = document.getElementById("month").value;
  var MM = parseInt(month); // mm -> month
  var year = document.getElementById("year").value;
  var YY = parseInt(year); // yy -> year
  var CC = parseInt(YY - 1) / 100 + 1; // cc -> century
  var dayOfTheWeek = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7; //day of the week
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var gender;



  if (document.getElementById("gender").checked) {
    gender = 'male';
  } else {
    gender = 'female';
  }


  // date val
  if (MM < 0 || MM > 12) {
    alert("invalid month ");
  }
  // checking if day is correct and does not exceed limit.  if its not correct alert user
  else if (DD < 0 || DD > 31) {
    alert("invalid  Date");
  }
  // validating february month ...leap year to be checked
  else if (MM == 2 && DD > 29) {
    alert("This month does not have those number of days");
  }
  // validating year
  else if (YY < 1000 || YY > 2020) {
    alert("Invalid year");
  }
  //gender
  if (document.getElementById("gender").checked) {
    //  debugger; 
    switch (dayOfTheWeek) {
      case 0:
        document.getElementById("results").innerHTML =
          "Your day name is " + maleNames[0] + " ,which means you were born on a Sunday.";
        break;
      case 1:
        document.getElementById("results").innerHTML =
          "Your day name is " + maleNames[1] + " ,which means you were born on a Monday.";
        break;
      case 2:
        document.getElementById("results").innerHTML =
          "Your day name is " + maleNames[2] + " ,which means you were born on a Tuesday.";
        break;
      case 3:
        document.getElementById("results").innerHTML =
          "Your day name is " + maleNames[3] + " ,which means you were born on a Wednesday.";
        break;
      case 4:
        document.getElementById("results").innerHTML =
          "Your day name is " + maleNames[4] + " ,which means you were born on a Thursday.";
        break;
      case 5:
        document.getElementById("results").innerHTML =
          "Your day name is " + maleNames[5] + " ,which means you were born on a Friday.";
        break;
      case 6:
        document.getElementById("results").innerHTML =
          "Your day name is " + maleNames[6] + " ,which means you were born on a Saturday.";
        break;
    }
  } else {
    switch (dayOfTheWeek) {
      case 0:
        document.getElementById("results").innerHTML =
          "Your day name is " + femaleNames[0] + " ,which means you were born on a Sunday.";
        break;
      case 1:
        document.getElementById("results").innerHTML =
          "Your day name is " + femaleNames[1] + " ,which means you were born on a Monday .";
        break;
      case 2:
        document.getElementById("results").innerHTML =
          "Your day name is " + femaleNames[2] + " ,which means you were born on a Tuesday.";
        break;
      case 3:
        document.getElementById("results").innerHTML =
          "Your day name is " + femaleNames[3] + " ,which means you were born on a Wednesday.";
        break;
      case 4:
        document.getElementById("results").innerHTML =
          "Your day name is " + femaleNames[4] + " ,which means you were born on a Thursday.";
        break;
      case 5:
        document.getElementById("results").innerHTML =
          "Your day name is " + femaleNames[5] + " ,which means you were born on a Friday.";
        break;
      case 6:
        document.getElementById("results").innerHTML =
          "Your day name is " + femaleNames[6] + " ,which means you were born on a Saturday.";
        break;
      default:
        alert("enter your information please");


    }


  }
}

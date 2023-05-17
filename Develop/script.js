// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  var length = lengthChoice();
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//var upperCharactersList = ABCDEFGHIJKLMNOPQRSTUVWXYZ;
//var lowerCharactersList = abcdefghijklmnopqrstuvwxyz;
//var numbersList = 1234567890;
//const specialCharactersList = [U+0020, U+0021, U+0022, U+0024, U+0025, U+0026, U+0027, U+0028, U+0029, U+003F];


var lengthChoice = prompt("Choose a password length between 8 and 128 characters.");

if (lengthChoice > 7 && lengthChoice < 129) {
    window.alert("Your password will be " + lengthChoice + " characters long.");
} else {
  prompt("That number is invalid. Please try again."); //works
}

var lowerChars = confirm("Would you like to include lowercase characters?");

if (lowerChars === true) {
  alert("Your password will contain lowercase characters.");
} else {
  alert("Your password will NOT contain lowercase characters.");
}

var upperChars = confirm("Would you like to include Uppercase characters?");

if (upperChars === true) {
  alert("Your password will contain uppercase characters.");
} else {
  alert("Your password will NOT contain uppercase characters.");
}


var numChars = confirm("Would you like to include numbers?");

if (numChars === true) {
  alert("Your password will contain numbers.");
} else {
  alert("Your password will NOT contain numbers.");
}

var specialChars = confirm("Would you like to include special characters?");

if (specialChars === true) {
  alert("Your password will contain special characters.");
} else {
  alert("Your password will NOT contain special characters.");
}

function generatePassword() {
  var length = lengthChoice; 
  
}



/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/
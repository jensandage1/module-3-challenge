// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var upperCharactersList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCharactersList = "abcdefghijklmnopqrstuvwxyz";
var numbersList = "1234567890";
const specialCharactersList = "!@#$%^&*"; //I decided to limit the characters that could be used. 


function generatePassword (){
var lengthChoice = prompt("Choose a password length between 8 and 128 characters.");
var allCharacters = "";
if (lengthChoice > 7 && lengthChoice < 129) {
    alert("Your password will be " + lengthChoice + " characters long.");
} else {
  alert("That number is invalid. Please try again.");
  return null;
}



var lowerChars = confirm("Would you like to include lowercase characters?"); //confirm is best choice for yes or no. ok is yes, cancel is no. 

if (lowerChars === true) {
  allCharacters += lowerCharactersList;
  alert("Your password will contain lowercase characters.");
} else {
  alert("Your password will NOT contain lowercase characters.");
}

var upperChars = confirm("Would you like to include Uppercase characters?");

if (upperChars === true) {
  allCharacters += upperCharactersList;
  alert("Your password will contain uppercase characters.");
} else {
  alert("Your password will NOT contain uppercase characters.");
}


var numChars = confirm("Would you like to include numbers?");

if (numChars === true) {
  allCharacters += numbersList;
  alert("Your password will contain numbers.");
} else {
  alert("Your password will NOT contain numbers.");
}

var specialChars = confirm("Would you like to include special characters?");

if (specialChars === true) {
  allCharacters += specialCharactersList;
  alert("Your password will contain special characters.");
} else {
  alert("Your password will NOT contain special characters.");
}

var finalPassword = "";
for (let i = 0; i < lengthChoice; i++) {
 var randomNumber = Math.floor(Math.random()* allCharacters.length); //randomizes the password. 
 var randomCharacter = allCharacters [randomNumber]; 
finalPassword += randomCharacter
}
return finalPassword;
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
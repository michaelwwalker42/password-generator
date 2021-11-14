// generate password
// prompt for password criteria
// password length at least 8 characters less than 128
// character types: lowercase, uppercase, numeric, and/or special chars                                                                      
// confirm which character types to include in password
// when each prompt answered, input should be validated and at least one char type selected
// when all prompts answered a password is generated that matches criteria
// when password is generated it is displayed in an alert or written to the page



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

// generate password
// prompt for password criteria
// password length at least 8 characters less than 128
// character types: lowercase, uppercase, numeric, and/or special chars                                                                      
// confirm which character types to include in password
// when each prompt answered, input should be validated and at least one char type selected
// when all prompts answered a password is generated that matches criteria


// Assignment code here
var generatePassword = function() {
  var criteriaLength = window.prompt('How many characters (at least 8, and up to 128)?');     // variable for password length
  if (criteriaLength <8 || criteriaLength > 128){
    window.alert("That is not a valid answer. Please try again.");
    
  }
 
  return criteriaLength; 
  
}



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

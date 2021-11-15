// generate password
// prompt for password criteria
// password length at least 8 characters less than 128
// character types: lowercase, uppercase, numeric, and/or special chars                                                                      
// confirm which character types to include in password
// when each prompt answered, input should be validated and at least one char type selected
// when all prompts answered a password is generated that matches criteria

// String.fromCharCode() to use numbers, letters, and symbols


// Assignment code here

//-----------------------------------------------FUNCTION FOR PASSWORD LENGTH----------------------------------
var getPasswordLength = function() {
  var passwordLength = window.prompt('How many characters (at least 8, and up to 128)?');    
  if (passwordLength >= 8 && passwordLength <= 128){
    console.log(passwordLength);
    return passwordLength;  

  } else {
    window.alert("That is not a valid answer. Please try again.");
    getPasswordLength();   
  }
}
getPasswordLength();

//------------------------------------------------------------------------------------------------------------  
 
 




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

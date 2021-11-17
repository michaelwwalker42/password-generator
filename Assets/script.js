
// Assignment code here

//-----------------------------------------------getPasswordLength function----------------------------------
function getPasswordLength() {
  var passwordLength = window.prompt('How many characters (at least 8, and up to 128)?');    
  if (passwordLength >= 8 && passwordLength <= 128){
    console.log("password length is " + passwordLength);
    return passwordLength;  

  } else {
    window.alert("That is not a valid answer. Please try again.");
    getPasswordLength();   
  }
}
//-------------------------------------------------------------------------------------------------------------


//------------------------------------------confirmLowercase function------------------------------------------
function confirmLowercase() {
  lowerCaseYes = window.confirm("Do you want to include lowercase letters?"); 
  if (!lowerCaseYes){ 
    lowerCaseYes = "";
    console.log("password does not include lowercase");
  } else {
    lowerCaseYes = "abcdefghijklmnopqrstuvwxyz";
    console.log("password includes lowercase");
   }  
  return lowerCaseYes;
};
//-------------------------------------------------------------------------------------------------------------


//----------------------------------------confirmUppercase function--------------------------------------------
function confirmUppercase() {
  upperCaseYes = window.confirm("Do you want to include uppercase letters?");
  if (!upperCaseYes){
    upperCaseYes = "";
    console.log("password does not include uppercase");
  } else {
    upperCaseYes = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log("password includes uppercase");
  }
  return upperCaseYes;
};
//-------------------------------------------------------------------------------------------------------------


//----------------------------------------confirmNumbers function----------------------------------------------
function confirmNumbers() {
  numbersYes = window.confirm("Do you want to include numbers?");
  if (!numbersYes){
    numbersYes = "";
    console.log("password does not include numbers");
  } else {
    numbersYes = "0123456789";
    console.log("password includes numbers");
  }
  return numbersYes;
};
//----------------------------------------------------------------------------------------------------------------


//--------------------------------------- confirmSpecialChars function--------------------------------------------
function confirmSpecialChars() {
  specialCharsYes = window.confirm("Do you want to include special characters?");
  if (!specialCharsYes){
    specialCharsYes = "";
    console.log("password does not include special characters");
  } else {
    specialCharsYes = "!@#$%^&*";
    console.log("password includes special characters");
  }
  return specialCharsYes;
};
//-------------------------------------------------------------------------------------------------------------


//---------------------------------------validateChars function------------------------------------------------
function validateChars() {
  confirmLowercase();
  confirmUppercase();
  confirmSpecialChars();
  confirmNumbers();
  var passwordChars = specialCharsYes + numbersYes + upperCaseYes + lowerCaseYes;
  if (!passwordChars) {
    window.alert("Your password needs at least one character type");
    validateChars();
  } else {
  return passwordChars;  
  }
};
//--------------------------------------------------------------------------------------------------------------




// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }                                                             

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);                 

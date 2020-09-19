// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password")
var passwordText = "";

var passwordLength = prompt ("How long do you want you password to be. Enter a number no smaller than 8 and no larger than 128.")
var includeUppercase = confirm ("Would you like to include Uppercase Letters?")
var includeLowercase = confirm ("Would you like to include Lowercase Letters?")
var includeNumbers = confirm ("Would you like to include Numbers?")
var includeSpecialCharacters = confirm ("Would you like to include Special Characters?")

// Write password to the #password input
function writePassword() {
 
  var allPossibleInputs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~ ";
  
  if (includeUppercase === true && includeLowercase === false && includeNumbers === false && includeSpecialCharacters === false) {
    for (var i = 0; i < passwordLength; i++) {
      passwordText += allPossibleInputs.charAt(Math.floor(Math.random() * allPossibleInputs.length));
    }
  }

  password.textContent = passwordText;

}
generateBtn.addEventListener("click", writePassword);




  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
  // password.appendChild(passwordText)
  

  // generatePassword(passwordLength);


// function generatePassword() {

// var passwordText = "";
// var allPossibleInputs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~ ";
// for (var i = 0; i < (passwordLength + 1); i++) {
//   passwordText += allPossibleInputs.charAt(Math.floor(Math.random() * allPossibleInputs.length));
// }

// return passwordText;

// var passwordText = document.querySelector("#password");
// passwordText.value = password;
// password.appendChild(passwordText)

// }

// Add event listener to generate button


// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password")
var passwordText = "";


// Write password to the #password input
function writePassword() {

  var passwordLength = prompt ("How long do you want you password to be. Enter a number no smaller than 8 and no larger than 128.")
  var includeUppercase = confirm ("Would you like to include Uppercase Letters?")
  var includeLowercase = confirm ("Would you like to include Lowercase Letters?")
  var includeNumbers = confirm ("Would you like to include Numbers?")
  var includeSpecialCharacters = confirm ("Would you like to include Special Characters?")

 
  // var allPossibleInputs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~ ";
  var allPossibleInputs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  if (includeUppercase === true && includeLowercase === false && includeNumbers === false && includeSpecialCharacters === false) {    
    for (var i = 0; i < passwordLength; i++) {
      passwordText += allPossibleInputs.charAt(Math.floor(Math.random() * allPossibleInputs.length));
    }
    
  password.textContent = passwordText;

  }
}

generateBtn.addEventListener("click", writePassword);


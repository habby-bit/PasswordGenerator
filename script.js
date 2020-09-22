// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password")
var passwordText = "";


// Write password to the #password input
function writePassword() {
  
  passwordText = "";
  password.textContent = passwordText;

  var upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var low = "abcdefghijklmnopqrstuvwxyz";
  var num = "0123456789"
  var char = "!”#$%&’()*+,-./:;<=>?@[]\\^_`|{}~ ";

  var uppLow = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var uppNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var uppChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!”#$%&’()*+,-./:;<=>?@[]\\^_`|{}~ ";

  var lowNum = "abcdefghijklmnopqrstuvwxyz0123456789";
  var lowChar = "abcdefghijklmnopqrstuvwxyz!”#$%&’()*+,-./:;<=>?@[]\\^_`|{}~ ";
  var numChar = "0123456789!”#$%&’()*+,-./:;<=>?@[]\\^_`|{}~ ";

  var uppLowNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var uppLowChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!”#$%&’()*+,-./:;<=>?@[]\\^_`|{}~";
  var uppNumChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!”#$%&’()*+,-./:;<=>?@[]\\^_`|{}~ ";
  var lowNumChar = "abcdefghijklmnopqrstuvwxyz0123456789!”#$%&’()*+,-./:;<=>?@[]\\^_`|{}~ ";

  var uppLowNumChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!”#$%&’()*+,-./:;<=>?@[]\\^_`|{}~ ";
  
  var passwordLength = parseInt(prompt("How long do you want you password to be. Enter a number no smaller than 8 and no larger than 128."))
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length")
  }

  else {
    var includeUppercase = confirm ("Would you like to include Uppercase Letters?")
    var includeLowercase = confirm ("Would you like to include Lowercase Letters?")
    var includeNumbers = confirm ("Would you like to include Numbers?")
    var includeSpecialCharacters = confirm ("Would you like to include Special Characters?")
  
    if (includeUppercase === true && includeLowercase === false && includeNumbers === false && includeSpecialCharacters === false) {    
      for (var i = 0; i < passwordLength; i++) {
        passwordText += upp.charAt(Math.floor(Math.random() * upp.length));
      }
    }

    else if (includeUppercase === false && includeLowercase === true && includeNumbers === false && includeSpecialCharacters === false) {    
      for (var i = 0; i < passwordLength; i++) {
        passwordText += low.charAt(Math.floor(Math.random() * low.length));
      }
    }

    else if (includeUppercase === false && includeLowercase === false && includeNumbers === true && includeSpecialCharacters === false) {    
      for (var i = 0; i < passwordLength; i++) {
        passwordText += num.charAt(Math.floor(Math.random() * num.length));
      }
    }

    else if (includeUppercase === false && includeLowercase === false && includeNumbers === false && includeSpecialCharacters === true) {    
      for (var i = 0; i < passwordLength; i++) {
        passwordText += char.charAt(Math.floor(Math.random() * char.length));
      }
    }

    else if (includeUppercase === true && includeLowercase === true && includeNumbers === false && includeSpecialCharacters === false) {    
        for (var i = 0; i < passwordLength; i++) {
          passwordText += uppLow.charAt(Math.floor(Math.random() * uppLow.length));
        }
    }

    else if (includeUppercase === true && includeLowercase === false && includeNumbers === true && includeSpecialCharacters === false) {    
      for (var i = 0; i < passwordLength; i++) {
        passwordText += uppNum.charAt(Math.floor(Math.random() * uppNum.length));
      }
    }

    else if (includeUppercase === true && includeLowercase === false && includeNumbers === false && includeSpecialCharacters === true) {    
      for (var i = 0; i < passwordLength; i++) {
        passwordText += uppChar.charAt(Math.floor(Math.random() * uppChar.length));
      }
    }

    else if (includeUppercase === false && includeLowercase === true && includeNumbers === true && includeSpecialCharacters === false) {    
      for (var i = 0; i < passwordLength; i++) {
        passwordText += lowNum.charAt(Math.floor(Math.random() * lowNum.length));
      }
    }

    else if (includeUppercase === false && includeLowercase === true && includeNumbers === false && includeSpecialCharacters === true) {    
      for (var i = 0; i < passwordLength; i++) {
        passwordText += lowChar.charAt(Math.floor(Math.random() * lowChar.length));
      }
    }

    else if (includeUppercase === false && includeLowercase === false && includeNumbers === true && includeSpecialCharacters === true) {    
      for (var i = 0; i < passwordLength; i++) {
        passwordText += numChar.charAt(Math.floor(Math.random() * numChar.length));
      }
    }

    else if (includeUppercase === true && includeLowercase === true && includeNumbers === true && includeSpecialCharacters === false) {    
      for (var i = 0; i < passwordLength; i++) {
        passwordText += uppLowNum.charAt(Math.floor(Math.random() * uppLowNum.length));
      }
    }

    else if (includeUppercase === true && includeLowercase === true && includeNumbers === false && includeSpecialCharacters === true) {    
      for (var i = 0; i < passwordLength; i++) {
        passwordText += uppLowChar.charAt(Math.floor(Math.random() * uppLowChar.length));
      }
    }

    else if (includeUppercase === true && includeLowercase === false && includeNumbers === true && includeSpecialCharacters === true) {    
      for (var i = 0; i < passwordLength; i++) {
        passwordText += uppNumChar.charAt(Math.floor(Math.random() * uppNumChar.length));
      }
    }

    else if (includeUppercase === false && includeLowercase === true && includeNumbers === true && includeSpecialCharacters === true) {    
      for (var i = 0; i < passwordLength; i++) {
        passwordText += lowNumChar.charAt(Math.floor(Math.random() * lowNumChar.length));
      }
    }

    else if (includeUppercase === true && includeLowercase === true && includeNumbers === true && includeSpecialCharacters === true) {    
      for (var i = 0; i < passwordLength; i++) {
        passwordText += uppLowNumChar.charAt(Math.floor(Math.random() * uppLowNumChar.length));
      }
    } 
  }

  password.textContent = passwordText;

}



generateBtn.addEventListener("click", writePassword);
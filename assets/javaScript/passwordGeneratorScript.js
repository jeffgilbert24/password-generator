// An array of characters that will be the password
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var generateBtn = document.querySelector("#generate");

// The Var will be changed with the following.
var cfLength = "";
var cfCharacter;
var cfNumber;
var cfUpper;
var cfLower;

// Prompt user for lenght of password
function generatePassword() {
  var cfLength = (prompt("How many characters would you like your password to contain?"));

  // Check if answer is correct
  while(cfLength <= 8 || cfLength >= 128) {
      alert("Password length must be between 8-50 characters Try again");
      var cfLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // Repeat back how many charactes the user will have  
      alert("Your password will have"+ cfLength +"characters");

    // Determine parameters of password 
    var cfCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var cfNumCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
      // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && cfCharacter === false && cfNumCharacter === false) {
        alert("You must choose at least one parameter");
        var cfCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var cfNumCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
    } 

      // Assign an action to the password parameters NEED TO FIX THIS
      var wordCharacters = []
      
    if (cfCharacter) {
      wordCharacters = wordCharacters.concat(characters)
    }

    if (cfNumCharacter) {
      wordCharacters = wordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      wordCharacters = wordCharacters.concat(lower)
    }

    if (confirmUpperCase) {
      wordCharacters = wordCharacters.concat(upper)
    }

      console.log(wordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < cfLength; i++) {
        randomPassword = randomPassword + wordCharacters[Math.floor(Math.random() * wordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

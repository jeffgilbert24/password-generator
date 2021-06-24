
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   //Ask user for input on lenght
   var userInput = prompt("Enter a number between 8 and 128. This will be the password lenght");
   console.log(userInput);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Assignment Code
var generateBtn = document.querySelector("#generate");
var userInput;
function generatePassword(){
   //Ask user for input on lenght
   userInput = prompt("Enter a number between 8 and 128. This will be the password lenght");  

};
// Write password to the #password input
function writePassword() {   
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
} 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



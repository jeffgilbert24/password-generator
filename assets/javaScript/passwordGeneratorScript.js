// Assignment Code
var generateBtn = document.querySelector("#generate");
// store user answerS
var x; 
var numlet;
var generatePassword= [];
var symb;


// Write password to the #password input
function writePassword() {
  var userInput = prompt("Define the lenght of the password");
  x = prompt("you have entered "+ userInput +" Press button");
  userInput = prompt("Will this password contain both letters and numbers ? enter yes or no");
  numlet = prompt("you have entered "+ userInput + " Press button"); 
  userInput = prompt("Will this password contain special charaters ? enter yes or no");
  symb = prompt("you have entered "+ userInput +" press button");
  // Generate number password
var randomNum = Math.floor((Math.random() * x) +1);
generatePassword = document.getElementsByName("x");
generatePassword = prompt(randomNum);



}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




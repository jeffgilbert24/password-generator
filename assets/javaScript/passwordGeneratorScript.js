// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var upLowChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var smallSink = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
var kitchenSink = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&^?"

// Write password to the #password input
function writePassword() {
  var x = prompt("choose a number between 4 and 20, this will be the lenght of the password.")

  if(x < 4 || x >20){
    alert("pic a different number")
   }else{
     console.log(x);
   }

   
    
    var password = prompt("Your password contains lower case letters, if you want upper and lower click OK!");
    
    if (password !== true) {
      console.log("your password is upper and lower");
    } else {
      console.log("Lower it is!");
      
    }
    

 // var passwordText = document.querySelector("#password");
  
 // passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



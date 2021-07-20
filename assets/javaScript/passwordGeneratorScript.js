// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var upLowChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var smallSink = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
var kitchenSink = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&^?";
var lenght;
var x;
var pw;

// changing string to random 
String.prototype.shuffle = function () {
  var chop = this.split(""),
      n = chop.length;
  for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = chop[i];
      chop[i] = chop[j];
      chop[j] = tmp;
  }
  return chop.join("");
  
}




// ask the user to pick the size of the password
function writePassword() {
   lenght = prompt("choose a number between 4 and 20, this will be the lenght of the password.");
  if(lenght < 4 || lenght >20){
    alert("pic a different number")
   }else{
     shorten = prompt("You have chosen "+ lenght +" click ok button to continue.");
     console.log(lenght);          
   } 
   

// ask the user the makeup of the password.     
    x ===parseInt(length);
    var password = prompt("Your password contains lower case letters, if you want upper and lower click OK!");
    // return password   
    if (password !== true) {
      password = lowChar.shuffle();
      console.log(password.substring(0, x)); 
document.getElementById("password").innerHTML = password.substring(0, x);  
// provide a second choice 
} else {    
var secPass = prompt("Your password contains upper and lower characters, do you want numbers? click ok for yes.");
// return password
if (secPass !==true){
  secPass = upLowChar.shuffle();
  console.log(secPass.substring(0, 8));
document.getElementById("password").innerHTML = secPass.substring(0, x);
}
}
}
    
    

 // var passwordText = document.querySelector("#password");
  
 // passwordText.value = password;




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





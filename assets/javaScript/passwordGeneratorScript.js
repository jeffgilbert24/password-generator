// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowChar = "abcdefghijklmnopqrstuvwxyz";
//var lowChar = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
var upLowChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var smallSink = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
var kitchenSink = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&^?";
var x;

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

console.log(lowChar.shuffle());



// ask the user to pick the size of the password
function writePassword() {
  x = prompt("choose a number between 4 and 20, this will be the lenght of the password.")

  if(x < 4 || x >20){
    alert("pic a different number")
   }else{
     x = prompt("You have chosen "+ x +" click ok button to continue.");
     console.log(x);          
   }  
var number = x;
// ask the user the makeup of the password.     
    var shorten;
    var password = prompt("Your password contains lower case letters, if you want upper and lower click OK!");    
    if (password === true) {
      console.log("your password is upper and lower");      
    } else {    
      password = lowChar.shuffle();
     shorten = password.substring(0, 8);  
      console.log(shorten);
      console.log("Lower it is!");
    }
     
      
    }   
    
    

 // var passwordText = document.querySelector("#password");
  
 // passwordText.value = password;




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





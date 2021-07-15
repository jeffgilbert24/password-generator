// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//var lowChar = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
var upLowChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var smallSink = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
var kitchenSink = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&^?";

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
console.log(kitchenSink.shuffle());



// Write password to the #password input
function writePassword() {
  var x = prompt("choose a number between 4 and 20, this will be the lenght of the password.")

  if(x < 4 || x >20){
    alert("pic a different number")
   }else{
     x = prompt("You have chosen "+ x);
     console.log(x);
   }  
    var data1 = '';
    var password = prompt("Your password contains lower case letters, if you want upper and lower click OK!");
    
    if (password === true) {
      console.log("your password is upper and lower");
    } else {
      mixedChar = lowChar.length;
      for( var i = 0; i< x;i++) {
        data1 += lowChar.charAt(Math.floor(Math.random() * mixedChar));
      }
      console.log(mix);
      console.log("Lower it is!");
      
    }   
    

 // var passwordText = document.querySelector("#password");
  
 // passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





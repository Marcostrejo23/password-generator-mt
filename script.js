var alphabet = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["!","@","#","$","%","^","&","*"];
var capAlphabet =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["1","2","3","4","5","6","7","8","9","0"];
var response =["yes","no"]
var characterCount = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"];

var generateBtn = document.querySelector("#generate");

  generateBtn.addEventListener("click", writePassword);
    
    function writePassword() {
      var user = confirm("Would you like to make a password?");
      if (user == false){
        alert("okay closing window.")
        return false 
      }
      do{ 
        var passLength = parseInt(prompt("how many characters? 8-16."))
        if (passLength < 8){
          alert("password must be longer");
        }else if (passLength > 16){
          alert("password must be under 16 characters");
        } 
      } while (passLength < 8 || passLength > 16);
      var alpha = confirm("would you like lowercase letters?");
      var specialCharacters = confirm("would you like special characters?");
      var capAlpha = confirm("would you like uppercase characters?");
      var include = '';
      var total = '';

      if (!alpha &&!passLength && !specialCharacters && !capAlpha){
        alert("does not meet the criteria to generate a password");
  
      } else{
        if (specialCharacters) {
         total = total + special.join('');
      } if (capAlpha) {
        total = total + capAlphabet.join(''); 
      } if (alpha){
        total = total + alphabet.join('');
      }
      console.log(total)
      for (let i = 0; i < passLength; i++) {
        include += total.charAt(Math.floor(Math.random() * (total.length-1))); 
      } 
      console.log(include)
       var passwordText = document.querySelector("#password");
            passwordText.value = include;

    };
    };

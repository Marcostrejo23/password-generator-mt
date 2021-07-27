var alphabet = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["!","@","#","$","%","^","&","*"];
var capAlphabet =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["1","2","3","4","5","6","7","8","9","0"];
var response =["yes","no"]
var characterCount = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"];

var generateBtn = document.querySelector("#generate");


// function chooseChars(){
//   window.alert ('chooseChars')
//     var characters = window.prompt ("how many characters");
//     var lowerCase = window.confirm ("do you want lowerCase?");
// }
// function writePassword(){
//     window.alert('clicked')
//     var password = chooseChars();
//     console.log(password)
// }

  generateBtn.addEventListener("click", writePassword);
    
    function writePassword() {
      var user = confirm("Would you like to make a password?");
      if (user == false){
        alert("okay closing window.")
        return false 
      }
      do{ 
        var passLength = prompt("how many chracters? 8-16.")
        if (passLength < 8){
          alert("password must be longer");
        }else if (passLength > 16){
          alert("password must be under 16 characters");
        } 
      } while (passLength < 8 || passLength > 16);
      var specialCharacters = confirm("would you like special characters?");
      var capAlpha = confirm("would you like uppercase characters?");
      var include = '';
      var total = '';

      // var passInt = parseInt(passLength);

      if (!passLength && !specialCharacters && !capAlpha){
        result += "does not meet the criteria to generate a password";
        return include
      } else
        if (specialCharacters) {
         total = total + specialCharacters;
      } if (capAlpha) {
        total = total +capAlpha; 
      }
      for (let i = 0; i < passLength.length; i++) {
        include += total.charAt(Math.floor(Math.random() * total.length)); 
      } 
      return total;


 

  


      // var passwordText = document.querySelector("#password");
      
      // function randomGen(alphabet , special , capAlphabet , number){
      // var randIndex = Math.floor(Math.random() * Array.length);
      // var randElement = Array[randIndex];
    
      // return randElement;
    
      // }
      // passwordText.value = password;
    
      function createPassword() {
        var password = writePassword();
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
      };
      generateBtn.addEventListener("click", createPassword);
    };

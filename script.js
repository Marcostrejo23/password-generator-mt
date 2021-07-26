var alphabet = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["!","@","#","$","%","^","&","*"];
var capAlphabet =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["1","2","3","4","5","6","7","8","9","0"];
var response =["yes","no"]
var characterCount = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"];
var include = '';

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

  // if (user === "yes"){ 
  //   if (characterCount  < "8" && characterCount  > "16"); 
  //   window.prompt("that is not enough characters");
  // } else if (characterCount  = true); 
  // if (user === "yes"){
  //   else ()
    
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
     
      
      var passInt = parseInt(passLength)
      //how long?
      //do you want special characters?
      var specialcharacters = confirm("would you like special characters?");
      var passalphabetcap = confirm("would you like uppercase characters?");
      //do you want capital letters?
      //do you want capital letters?

      // var password = generatePassword();
      var passwordText = document.querySelector("#password");
      function randomGen(alphabet , special , capAlphabet , number){
      var randIndex = Math.floor(Math.random() * Array.length);
      var randElement = Array[randIndex];
    
      return randElement;
    
      }
      passwordText.value = password;
    
    };
var alphabet = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["!","@","#","$","%","^","&","*"];
var capalpha =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["1","2","3","4","5","6","7","8","9","0"];
var response =["yes","no"]
var charcount=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"];


var generateBtn = document.querySelector("#generate");


function chooseChars(){
  window.alert ('chooseChars')
    var characters = window.prompt ("how many characters");
    var lowerCase = window.confirm ("do you want lowerCase?");
}
function writePassword(){
    window.alert('clicked')
    var password = chooseChars();
    console.log(password)
}

  generateBtn.addEventListener("click", writePassword);

// var user =window.prompt("Would you like to make a password? Please answer yes or no.");
// if (user === "yes"){
//   window.prompt("how many characters?");
//   if (charcount < "8" && charcount > "16"); 
//   window.prompt("that is not enough characters");
// } else if (charcount = true); 
//     window.prompt("would you like special characters? Please answer yes or no.");
//   if (user === "yes"){
  
//     function writePassword() {
//       var password = generatePassword();
//       var passwordText = document.querySelector("#password");
//       function randomGen(alphabet , special , capalpha , number){
//       var randIndex = Math.floor(Math.random() * Array.length);
//       var randElement = Array[randIndex];
    
//       return randElement;
    
//       }
//       passwordText.value = password;
    
//     }


//   }

// Write password to the #password input

// Add event listener to generate button
 
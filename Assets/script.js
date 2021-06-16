// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for password criteria prompts
var pwNumber = "0123456789";
var pwSpecial = "!#$%&'()*+-./\:\;<=>?@[\\]^_`{|}~";
var pwUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pwLowercase = "abcdefghijklmnopqrstuvwxyz"; 
var chosenChars = "";


function enterpassword() {
  var password = generatepassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// Begin generating password function
function generatePassword(){
  var result = "";

  // Prompts to enter password length
  var length = prompt("Enter how many characters you would like your password to be. Your password must be between 8-128 characters.");
  
  // If nothing is entered when OK button is clicked then alert "Enter a number", and return to length prompt.
  if (length === "") {
    alert("Enter a number");
    return generatePassword()
  // If number entered is less than 8 or greater than 128 then alert "Password must have 8-128 characters", and return to length prompt.
  } else if (length<8 || length>128){
    alert("Password must have 8-128 characters.");
    return generatePassword()
  }

  // Prompts numbers confirmation
  var numberChoice = confirm("Confirm if you would like to include numbers in your password.");
  // Prompts special characters confirmation
  var specialChoice = confirm("Confirm if you would like to include special characters in your password.");
  // Prompts uppercase confirmation
  var uppercaseChoice = confirm("Confirm if you would like to include uppercase characters in your password.");
  // Prompts lowercase confirmation 
  var lowercaseChoice = confirm("Confirm if you would like to include lowercase characters in your password.");

  // If no characters are accepted then alert "You must confirm at least 1 character type.", and return to length prompt.
  if(!numberChoice&&!specialChoice&&!uppercaseChoice&&!lowercaseChoice){
    alert("You must confirm at least 1 character type.");
    return generatePassword()
  }
  
  // Begin including or excluding chosen characters.
  if (numberChoice) {
    chosenChars += pwNumber;
  } else {
    chosenChars != pwNumber;
  }

  if (specialChoice) {
    chosenChars += pwSpecial;
  } else {
    chosenChars != pwSpecial;
  }

  if (uppercaseChoice) {
    chosenChars += pwUppercase;
  } else {
    chosenChars != pwUppercase;
  }

  if (lowercaseChoice) {
    chosenChars += pwLowercase;
  } else {
    chosenChars != pwLowercase;
  }

  for (var i = 0; i < length; i++) {
    result += chosenChars.charAt(Math.floor(Math.random() * chosenChars.length));
  }
  return result;
  
  }

  var generateBtn = document.querySelector("#generate");
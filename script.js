// different characters
var special = "!@#$%^&*().;:?";
var nums = "0123456789";
var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lower = "qwertyuiopasdfghjklzxcvbnm";

//UI components
var numofchars = document.getElementById("numchars");
var upperchars = document.getElementById("uppercase");
var lowerchars = document.getElementById("lowercase");
var numchars = document.getElementById("numeric");
var specchars = document.getElementById("specialcharacters");

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var slideVal = document.getElementById("slid");
console.log(numofchars.value);
slideVal.innerText = numofchars.value;

numofchars.oninput = function() {
  slideVal.innerHTML = this.value;
};

console.log(typeof slideVal);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

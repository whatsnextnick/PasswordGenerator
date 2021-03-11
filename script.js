// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var numofchars = document.getElementById("numchars");
var slideVal = document.getElementById("slid");
console.log(numofchars.value);
slideVal.innerText = numofchars.value;

numofchars.oninput = function() {
  slideVal.innerHTML = this.value;
};

console.log(typeof slideVal);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

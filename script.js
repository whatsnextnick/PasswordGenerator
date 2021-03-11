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
var specchars = document.getElementById("specialchars");

//Generate password
var generater = document.getElementById('generate');
generater.addEventListener('click', criteria);


// user input handler
function criteria() {
  var checkbox = document.getElementsByClassName('form-check-input');
  var checked = false;
  var characters = '';

  // make sure user chose a criteria 
  for (var i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      checked = true;
    }
  }

  if (checked) {
    (specchars.checked) ? characters += special : '';
    (numchars.checked) ? characters += nums : '';
    (lowerchars.checked) ? characters += lower : '';
    (upperchars.checked) ? characters += upper : '';

    //pass the password to the textarea
    passwordText.value = createpass(characters);
  }
}


  var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// };

// password handler
function createpass(characters) {
  var password = '';
  // default password length is 8 characters
  var passwordLength = parseInt(numofchars.value);

  // get a unique value as many times as the length set by user
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random()*characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

// slider label update
var slideVal = document.getElementById("slid");
console.log(numofchars.value);
slideVal.innerText = numofchars.value;

numofchars.oninput = function() {
  slideVal.innerHTML = this.value;
};

console.log(typeof slideVal);

// // Add event listener to generate button
// generater.addEventListener("click", writePassword);

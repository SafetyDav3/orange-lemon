// Assignment code here

// ↓↓↓ Arrays to be concatenated | user input ↓↓↓
var alphaBig = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var alphaSmall = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharsList = ["!", "@", "#", "$", "%", "&", "*", "?"];

// →→→ User input storage ←←←
var passLength = null;
var useUpper = false;
var useNumbers = false;
var useSpecialChars = false;

// →→→ Array to receive other arrays to generate password from ←←←
var passwordAry = [];
var generatedPasswordItems = [];

// →→→ Empty string to hold generated password ←←←
var generatedPassword = "";

// ↓↓↓ User input / prompts ↓↓↓
// →→→ Getting desired password length ←←←
var getPassLength = function () {
  var userPassLength = window.prompt(
    "Welcome to RandPass!\nPlease enter a number between:\n8-128"
  );
  if (userPassLength >= 8 && userPassLength <= 128) {
    return (passLength = userPassLength);
  } else {
    window.alert("Must be between 8-128 characters long.");
    getPassLength();
  }
};

// →→→ Getting uppercase designation ←←←
var getUpperUse = function () {
  var userUpper = confirm(
    "Would you like to use uppercase characters in your password??"
  );
  if (userUpper == true) {
    passwordAry = passwordAry.concat(alphaBig);
  }
};

// →→→ Get number designation ←←←
var getNumberUse = function () {
  var userNumber = confirm("Would you like to use numbers in your password?");
  if (userNumber == true) {
    passwordAry = passwordAry.concat(numList);
  }
};

var getSpecCharUse = function () {
  var userSpecChar = confirm(
    "Would you like to use special characters in your password?"
  );
  if (userSpecChar == true) {
    passwordAry = passwordAry.concat(specialCharsList);
  }
};
// ↑↑↑ User input complete ↑↑↑

// ↓↓↓ Password generation ↓↓↓

var generatePassword = function () {
  passwordAry = passwordAry.concat(alphaSmall);
  for (let i = 1; i <= passLength; i++) {
    generatedPasswordItems.push(
      passwordAry[Math.floor(Math.random() * passwordAry.length)]
    );
  }
};

// ↓↓↓ Calling functions ↓↓↓
getPassLength();
console.log(passLength);
getUpperUse();
console.log(passwordAry);
getNumberUse();
console.log(passwordAry);
getSpecCharUse();
console.log(passwordAry);
generatePassword();
console.log(generatedPasswordItems);
console.log(generatedPasswordItems.join(""));

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

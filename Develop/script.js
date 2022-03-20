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
var specialChars = ["!", "@", "#", "$", "%", "&", "*", "?"];
var passLength = "";

// →→→ Array to receive other arrays to generate password from ←←←
var passwordAry = [];

// →→→ Empty string to hold generated password ←←←
var generatedPassword = "";

// ↓↓↓ User input / prompts ↓↓↓

var getPassLength = function () {
  var userPassLength = window.prompt(
    "Welcome to RandPass!\nPlease enter a number between:\n8-128"
  );
  return (passLength = userPassLength);
};

getPassLength();
console.log(passLength);

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

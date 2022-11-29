// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var askPassLength = 'Please enter the desired password length (from 10 to 64)';
var askIfLowercaseNeeded = 'Press OK to include lowercase characters';
var askIfUppercaseNeeded = 'Press OK to include uppercase characters';
var askIfNumbersNeeded = 'Press OK to include numbers in the password';
var askSpecialChar = 'Press OK to include special characters in the password, i.e. $,@,%,&,*, etc';
var errorLengthPassword = 'Please, ensure the value is between 10 and 64';
var errorOptionalSelection = 'Please select at least one character type to continue';

var minPassLength = 10;
var maxPasslength = 64;

var userPrompt;
var passLength;

// Function to prompt user for password options
function getPasswordOptions() {

  userPrompt = prompt(askPassLength);
  passLength = parseInt(userPrompt);
if (userPrompt === null) {
  return;
} else if (passLength < minPassLength || passLength > maxPasslength) {
  alert (errorLengthPassword);
  passLength = prompt(askPassLength);
}

// password character option selection

  var lowercaseChar = confirm(askIfLowercaseNeeded);
  var uppercaseChar = confirm(askIfUppercaseNeeded);
  var numericChar = confirm(askIfNumbersNeeded);
  var specialChar = confirm(askSpecialChar);
  
  // check is to ensure that the user input is a number.
  while (lowercaseChar === false && uppercaseChar === false && numericChar === false && specialChar === false) {
    alert(errorOptionalSelection);
    lowercaseChar = confirm(askIfLowercaseNeeded);
    uppercaseChar = confirm(askIfUppercaseNeeded);
    numericChar = confirm(askIfNumbersNeeded);
    specialChar = confirm(askSpecialChar);
  }
  return passLength;
}

// Function for getting a random element from an array
function getRandom(arr) {
   // get random index value
   var randomValueIndex = Math.floor(Math.random() * arr.length);
   // get random character
   var character = arr[randomValueIndex];
   return character;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
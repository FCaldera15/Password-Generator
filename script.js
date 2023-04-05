// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowercaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let uppercaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '+'];
let builtArray = []
let generatedLetterIndex = Math.floor(Math.random() * builtArray.length);
function generatePassword() {

    if (confirm("Do you want your password to contain lowercase letters?")) {

        builtArray = [...builtArray, ...lowercaseAlphabet]
    }




    if (confirm("Do you want your password to contain uppercase letters?")) {

        builtArray = [...builtArray, ...uppercaseAlphabet]

    }




    if (confirm("Do you want your password to contain numbers?")) {

        builtArray = [...builtArray, ...numbers]
    }




    if (confirm("Do you want your password to contain special characters?")) {

        builtArray = [...builtArray, ...specialCharacters]

    }


    let length = prompt("How long do you want the password? (must be between 8 and 128 characters)");

    if (length > 8 && length < 128) {
        // valid
    }
    else {
        alert("Invalid password length. Enter a number between 8 and 128, please and thank you!:)");
    }

    // builtArray = [generatedLetterIndex];
    return password = builtArray[generatedLetterIndex];
}

function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
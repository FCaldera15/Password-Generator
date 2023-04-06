// Assignment Code
let generateBtn = document.querySelector("#generate");


// The Arrays used to make the password
let lowercaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let uppercaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '+'];
let builtArray = []
let finalPassword = []

//This is the function that will generate the password.
function generatePassword() {
    // The confirms is what letting the user select what kind of passward they want.
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

    console.log(builtArray)

    //Lets user select how long they want the password to be, but be true in the if statement. Will send alert if the if statement is not true
    let length = prompt("How long do you want the password? (must be between 8 and 128 characters)");
    if (length > 8 && length < 128) {
        // valid
    }
    else {
        alert("Invalid password length. Enter a number between 8 and 128, please and thank you!:)");
    }


    // Gathers all the users options and randomizes 
    for (let i = 0; i < length; i++) {
        finalPassword.push(builtArray[Math.floor(Math.random() * builtArray.length)])

    }
    console.log(finalPassword)
    // Final password is pasted into the word box
    return finalPassword.join("")
}


function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
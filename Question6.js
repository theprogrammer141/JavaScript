let gameNum = 25;
let userNum = prompt("Enter the guessed number:");

while(userNum != gameNum)
{
    userNum = prompt("You guessed the wrong number!Guess again:");
}

console.log("You entered the correct number!");
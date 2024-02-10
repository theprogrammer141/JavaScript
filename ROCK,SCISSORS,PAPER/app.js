let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let message = document.querySelector("#message");
let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");

const generateComputerChoice = () =>
{
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = () =>
{
    
    message.innerText = "It's a draw. Play again!";
    message.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, computerChoice) =>
{
    if(userWin)
    {
        userScore++;
        userScorepara.innerText = userScore;
        message.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScorepara.innerText = compScore;
        message.innerText = `You lose! ${computerChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>
{
    //Generate Computer Choice  
    const computerChoice = generateComputerChoice();    

    if(userChoice === computerChoice)
    {
        //Draw Game
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            //paper , scissors
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            //rock ,scissors
            userWin = computerChoice === "scissors" ? false : true;
        }
        else
        {
            //rock , paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) =>
{
    choice.addEventListener("click", ()=>
    {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
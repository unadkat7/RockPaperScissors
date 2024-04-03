const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userSc = document.querySelector("#user-score");
const compSc = document.querySelector("#comp-score")

let userScore = 0;
let compScore = 0;

const reset = () =>
{
    userScore = 0;
    compScore = 0;
    userSc.innerText = userScore;
    compSc.innerText = compScore;
    msg.innerText = "Score have been reset. Play again! ";
    msg.style.backgroundColor = "black";
    msg.style.color = "white";
}
const showWinner = (userWin,Userchoice,compC) =>
{
    if(userWin)
    {
        userScore++;
        userSc.innerText = userScore;
        msg.innerText = `You win , your ${Userchoice} beats computers ${compC} !`;
        msg.style.backgroundColor = "green";
        if(userScore === 5)
        {
            alert("You are the ultimate winner!!");
            reset();
        }
    }
    else
    {
        compScore++
        compSc.innerText = compScore;
        msg.innerText = `You lose , computers ${compC} beats your ${Userchoice} !`;
        msg.style.backgroundColor = "red";
        if(compScore === 5)
        {
            alert("Computer is the ultimate winner!!");
            reset();
        }
    }
}
const drawGame = () =>
{
    console.log("Game was drawn");
    msg.innerText = "Game was drawn . Play again!";
    msg.style.backgroundColor = "blue";
}
const playGame = (Userchoice) => 
{
    console.log("User choice = ",Userchoice);
    //CompChoice
    const compC = genCompChoice();
    console.log("Computer choice = ",compC);

    if(Userchoice === compC)
    {
        //DrawGame;
        drawGame();
    }
    else
    {
        let userWin = true;
        if(Userchoice === "rock")
        {
            //paper,scissors
            userWin = compC === "paper" ? false : true; 
        }
        else if(Userchoice === "paper")
        {
            //rock,scissors
            userWin = compC === "rock" ? true : false;
        }
        else
        {
            //rock,paper
            userWin = compC === "paper" ? true : false; 
        }
        showWinner(userWin,Userchoice,compC);
    }
};

choices.forEach((choice) => 
{
    console.log(choice)
    choice.addEventListener("click",() =>
    {
        const Userchoice = choice.getAttribute("id");
        playGame(Userchoice);
    })
} );

const genCompChoice = () =>
{
    const options = ["rock","paper","scissors"];
    const randId = Math.floor(Math.random()*3);
    return options[randId];
}

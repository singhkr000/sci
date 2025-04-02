let user = 0;
let comp = 0;

let choicesAll = document.querySelectorAll(".choices");
let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#user");
let CompScore = document.querySelector("#Comp");
let msg = document.querySelector("#msg");

const genCompChoice = () => {
    const array = ["rock", "paper", "scissors"];
    let randomIndx = Math.floor(Math.random() * 3);
    return array[randomIndx];
}

const showWinner = (UserWin, userId, compChoice) => {
    if(UserWin){
        console.log("User Won");
        user += 1;
        userScore.innerText = user;
        msg.innerText = `You won! ${userId} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        console.log("Comp Won");
        comp += 1;
        CompScore.innerText = comp;
        msg.innerText = `You loose! ${compChoice} beats ${userId}` ;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userId) => {
    console.log("User choice =", userId);
    let compChoice = genCompChoice();
    console.log("Comp choice =", compChoice);
    if(userId === compChoice){
       console.log("Game was draw");
       msg.innerText = "Game Draw! Play Again.";
       msg.style.backgroundColor = "rgb(37, 161, 142)";
       return;
    }
    else { 
        UserWin = true;
        if (userId === "rock" ){
            // paper, scissors
        UserWin = compChoice === "paper" ? false : true;
    }
    else if(userId === "paper"){
        // rock, scissors
        UserWin = compChoice === "scissors" ? false : true;
    }
    else {
        // rock, paper
        UserWin = compChoice === "rock" ? false : true;
    }
    showWinner(UserWin, userId, compChoice);
  } 
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userId = choice.getAttribute("id");
        playGame(userId);
    });
});  

const updateScores = () => {
    userScore = user;
    CompScore = comp;
}

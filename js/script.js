
const results = ["Bear", "Ninja", "Hunter"]
const choices = ["bear", "ninja", "hunter"]


// get player name
let playerName = prompt('Welcome to Bear Hunter Ninja! Please enter your name to get started: ');
if (playerName === null || playerName === "") {
    document.getElementById("alert").style.display = "";
    document.getElementById("alert").innerHTML = "Please press F5 to play again.";
    throw "Please press F5 to play again.";
}
else if (!isNaN(playerName)) {
    document.getElementById("alert").style.display = "";
    document.getElementById("alert").innerHTML = "Invalid entry\nPlease press F5 to play again.";
    throw "Invalid entry\nPlease press F5 to play again.";
}
alert(`Hi ${playerName} Let's Play!`);


while (true) {
    // Set winner to invisible
    document.getElementById("alert").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("winner").style.display = "none";
    // Get computer choice and player Choice
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let playerChoice = prompt(`Who are you: Bear, Ninja, or Hunter?`);
    if (playerChoice === null) {
        document.getElementById("alert").style.display = "";
        document.getElementById("alert").innerHTML = "Please press F5 to play again.";
        console.log("Please press F5 to play again.");
        break;
    }
    else if (!choices.includes(playerChoice.toLowerCase())) {
        document.getElementById("alert").style.display = "";
        document.getElementById("alert").innerHTML = "Invalid Entry\nPlease press F5 to play again.";
        console.log("Invalid Entry\nPlease press F5 to play again.");
        break;
    }
    else {
        playerChoice = playerChoice.toLowerCase();
    }


    // Determine winner
    let winner = "";
    if (playerChoice === "ninja" && computerChoice === "hunter") {
        winner = "player";
    } else if (playerChoice === "hunter" && computerChoice === "bear") {
        winner = "player";
    } else if (playerChoice === "bear" && computerChoice === "ninja") {
        winner = "player";
    } else if (playerChoice === "ninja" && computerChoice === "bear") {
        winner = "computer";
    } else if (playerChoice === "hunter" && computerChoice === "ninja") {
        winner = "computer";
    } else if (playerChoice === "bear" && computerChoice === "hunter") {
        winner = "computer";
    } else {
        winner = "tie";
    }


    // PRINTING CHOICES TO SCREEN AND CONSOLE
    playerChoice = results[choices.indexOf(playerChoice)]
    computerChoice = results[choices.indexOf(computerChoice)]
    document.getElementById("result").style.display = "";
    document.getElementById("result").innerHTML = `${playerName} you chose ${playerChoice}!\nThe computer chose ${computerChoice}!`;
    console.log(playerName + " you chose " + playerChoice + "!");
    console.log("The computer chose " + computerChoice + "!");

    // PRINTING WINNER
    switch (winner) {
        case "player":
            document.getElementById("winner").style.display = "";
            document.getElementById("winner").innerHTML = `You Win!`;
            console.log(`You Win!`);
            break;
        case "computer":
            document.getElementById("winner").style.display = "";
            document.getElementById("winner").innerHTML = `You Lose!`;
            console.log(`You Lose!`);
            break;
        case "tie":
            document.getElementById("winner").style.display = "";
            document.getElementById("winner").innerHTML = `It's a Tie!`;
            console.log(`It's a Tie!`);
            break;
    }
    // PLAY AGAIN?
    let playAgain = prompt(`${playerName}, would you like to play again, Yes or No?`);
    if (playAgain === null || playAgain.toLowerCase() === "no") {
        document.getElementById("alert").style.display = "";
        document.getElementById("alert").innerHTML = "Please press F5 to play again.";
        console.log("Please press F5 to play again.");
        break;
    }
    else if (playAgain.toLowerCase() === "yes") {
        continue;
    }

    else {
        document.getElementById("winner").style.display = "none";
        document.getElementById("result").style.display = "none";
        document.getElementById("alert").style.display = "";
        document.getElementById("alert").innerHTML = "Invalid Entry\nPlease press F5 to play again.";
        console.log("Invalid Entry\nPlease press F5 to play again.");
        break;
        break;
    }
}

// get player name
let playerName = prompt('Welcome to Bear Hunter Ninja! Please enter your name to get started: ');
alert(`Hi ${playerName} Let's Play!`);

// get computer and player choices
let computerChoice = "Bear";
let playerChoice = prompt(`Who are you: Bear, Ninja, or Hunter?`);

// Determine winner
let winner = "";
if (playerChoice === "Ninja" && computerChoice === "Hunter") {
    winner = "player";
} else if (playerChoice === "Hunter" && computerChoice === "Bear") {
    winner = "player";
} else if (playerChoice === "Bear" && computerChoice === "Ninja") {
    winner = "player";
} else if (playerChoice === "Ninja" && computerChoice === "Bear") {
    winner = "computer";
} else if (playerChoice === "Hunter" && computerChoice === "Ninja") {
    winner = "computer";
} else if (playerChoice === "Bear" && computerChoice === "Hunter") {
    winner = "computer";
} else {
    winner = "tie";
}


// PRINT CHOICES TO SCREEN AND CONSOLE
document.getElementById("result").innerHTML = `${playerName} you chose ${playerChoice}!\nThe computer chose ${computerChoice}!`;
console.log(playerName + " you chose " + playerChoice + "!");
console.log("The computer chose " + computerChoice + "!");

// PRINTING WINNER
switch (winner) {
    case "player":
        document.getElementById("winner").innerHTML = `You Win!`;
        console.log(`You Win!`);
        break;
    case "computer":
        document.getElementById("winner").innerHTML = `You Lose!`;
        console.log(`You Lose!`);
        break;
    case "tie":
        document.getElementById("winner").innerHTML = `It's a Tie!`;
        console.log(`It's a Tie!`);
        break;
}

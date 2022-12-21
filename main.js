// used for tracking score
var wins = 0;
var losses = 0;
var ties = 0;

// used for validation and win checking.
var validChoices = ["R", "P", "S"];
var winStates = {
	R: "P",
	P: "S",
	S: "R",
};

do {
	var userChoice;
	do {
		userChoice = prompt("Please select one of (R)ock, (P)aper, or (S)cissors.");
	} while (!validChoices.includes(userChoice));

	var computerChoice =
		validChoices[Math.floor(Math.random() * validChoices.length)];

	var isWin = winStates[userChoice] === computerChoice;
	var isTie = userChoice === computerChoice;
	var isLoss = !isWin && !isTie;

	var statusMessage;
	if(isWin){
		statusMessage = "You won!";
		wins++;
	} else if(isTie){
		statusMessage = "You tied.";
		ties++;
	} else{
		statusMessage = "You lost!";
		losses++;
	}

	alert(`${statusMessage}\n\nwins: ${wins}
	losses: ${losses} \nties: ${ties}`);

	var playAgain;

	playAgain = confirm("Click OK to play again.");
} while (playAgain);
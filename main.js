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

var userChoice;
do {
	userChoice = prompt("Please select one of (R)ock, (P)aper, or (S)cissors.");
} while (!validChoices.includes(userChoice));

var computerChoice =
	validChoices[Math.floor(Math.random() * validChoices.length)];

var isWin = winStates[userChoice] === computerChoice;
var isTie = userChoice === computerChoice;
var isLoss = !isWin && !isTie;

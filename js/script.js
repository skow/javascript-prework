let roundNumber = Math.floor(Math.random() * 3 + 1);
let computerMove;


if(roundNumber == 1) {
	computerMove = 'kamień';
}
else if(roundNumber == 2) {
	computerMove = 'papier';
}
else if(roundNumber == 3) {
	computerMove = 'nożyce';
}
else {
	computerMove = 'nienznay ruch';
}

printMessage('Ruch komputera to: ' + computerMove);

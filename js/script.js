let roundNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = 'nieznany ruch';

if(roundNumber == 1) {
	computerMove = 'kamień';
}
else if(roundNumber == 2) {
	computerMove = 'papier';
}
else if(roundNumber == 3) {
	computerMove = 'nożyce';
}

console.log('Ruch komputera to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');
let playerMove = 'nieznany ruch';

if(playerInput == 1) {
	playerMove = 'kamień';
}
else if(playerInput == 2) {
	playerMove = 'papier';
}
else if(playerInput == 3) {
	playerMove = 'nożyce';
}

console.log('Twój ruch to: ' + playerMove);
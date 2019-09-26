
function playGame(playerInput){
	clearMessages();
	let roundNumber = Math.floor(Math.random() * 3 + 1);
	let computerMove = getMoveName(roundNumber);
	let playerMove = getMoveName(playerInput);
	printMessage(displayResult(computerMove, playerMove));	
}

	document.getElementById('play-rock').addEventListener('click', function(){
		playGame(1);
	});
	document.getElementById('play-papper').addEventListener('click', function(){
		playGame(2);
	});
	document.getElementById('play-scissors').addEventListener('click', function(){
		playGame(3);
	});


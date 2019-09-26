function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
	if(argMoveId == 1){
		return 'kamień';
	}
	else if(argMoveId == 2){
		return 'papier';
	}
	else if(argMoveId == 3){
		return 'nożyce';
	}
	else {
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
	}
}

function displayResult(argComputerMove, argPlayerMove){
	let winner = 'Nieznany zwyciężca';
	const infoComputerWin = 'Twój ruch to: <b>' + argPlayerMove + '</b>. Ruch komputera to: <b>' + argComputerMove + '</b>. Komputer wygrywa';
	const infoPlayerWin = 'Twój ruch to: <b>' + argPlayerMove + '</b>. Ruch komputera to: <b>' + argComputerMove + '</b>. Ty Wygrywasz';
	
	if(argComputerMove == argPlayerMove){
		winner = 'Padł remis. Oboje wybraliście: <b>' + argComputerMove + '</b>';
	}
	else if(
		(argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
		(argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
		(argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
			
		winner = infoPlayerWin;
	}
	else {
		winner = infoComputerWin;
	}
	return winner;
}


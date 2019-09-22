function printMessage(msg){
	var div = document.createElement('div');
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
	let infoComputerWin = 'Twój ruch to: <b>' + argPlayerMove + '</b>. Ruch komputera to: <b>' + argComputerMove + '</b>. Komputer wygrywa';
	let infoPlayerWin = 'Twój ruch to: <b>' + argPlayerMove + '</b>. Ruch komputera to: <b>' + argComputerMove + '</b>. Ty Wygrywasz';
	
	if((argComputerMove == 'kamień' && argPlayerMove == 'kamień') || (argComputerMove == 'papier' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')) {
		winner = 'Padł remis. Oboje wybraliście: <b>' + argComputerMove + '</b>';
	}
	else if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
		winner = infoPlayerWin;
	}
	else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
		winner = infoComputerWin;
	}
	else if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
		winner = infoComputerWin;
	}
	else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
		winner = infoPlayerWin;
	}
	else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
		winner = infoPlayerWin;
	}
	else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
		winner = infoComputerWin;
	}
	
	return winner;
}
if (typeof(bowlingChallange) == 'undefined') {
    var bowlingChallange = {};
}

(function(scope) {


	//Resets Board and Generates new Game.
    var createNewGame = function(numberOfPlayers) {
    	scope.players = [];
    	scope.currentPlayerIndex = 0;
        for (var i = 0; i < numberOfPlayers; i++) {
            scope.players.push(new scope.player(i));
        }
    }

    //Iniates new Game
    document.getElementById('btnNewGame').onclick  = function(){
    	var numberOfPlayers = document.getElementById('txtPlayerAmount').value;
    	var parsedValue  = parseInt(numberOfPlayers,10);
    	if(typeof(parsedValue) === "number"){
    		if(parsedValue < 1 || parsedValue > 6){
    			alert('Please choose between 1 to 6 players');
    		}
    		createNewGame(parsedValue);
    	}
    	else{
    		alert('Please enter a valid integer value');
    	}
    	
    };

    //Roll Ball for current player
    document.getElementById('btnRoll').onclick = function(){

    }

})(bowlingChallange || {})

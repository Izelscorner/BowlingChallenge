if (typeof(bowlingChallange) == 'undefined') {
    var bowlingChallange = {};
}

(function(scope) {
    var createNewGame = function(numberOfPlayers) {
    	scope.players = [];
        for (var i = 0; i < numberOfPlayers; i++) {
            scope.players.push(new scope.player(i));
        }
    }


    document.getElementById('btnNewGame').click(function(){
    	var numberOfPlayers = document.getElementById('txtPlayerAmount').value;
    	if(numberOfPlayers === parseInt(numberOfPlayers,10)){
    		createNewGame(parseInt(numberOfPlayers,10));
    	}
    	else{
    		alert('Please enter a valid integer value');
    	}
    	
    });

})(bowlingChallange || {})

if (typeof(bowlingChallange) == 'undefined') {
    var bowlingChallange = {};
}

(function(scope) {

    //Generates random number for the simulation of the game.
    scope.rollBallSimulator = function(remainingPins) {
        remainingPins = remainingPins || 10;
        return Math.floor(Math.random() * (remainingPins - 0 + 1)) + 0;
    }



    //Adds some animation to html to display remaining pins.
    scope.drawPinStates = function() {
    	var pinHolder = document.getElementById('pinHolder');
    	var scoreText = document.getElementById('scoreText');
        if (!scope.animation) {
        	pinHolder.innerHTML  = '';
        	scoreText.innerHTML  = '';
            return;
        }
        html = '';

        for (var i = 0; i < scope.remainingPins; i++) {
            if (i == 4) {
                html += '</br>'
            } else if (i == 7) {
                html += '</br>'
            } else if (i == 9) {
                html += '</br>'
            }
            html += '<span class="pins">O</span>';
        }
        scoreText.innerHTML = 10 - scope.remainingPins + ' Pins Downs';
        pinHolder.innerHTML = html;
    }
    scope.disableRollButtonForAnimation = function() {
        var but = document.getElementById("btnRoll");
        but.value = 'Collecting pins for next round :)';
        but.disabled = true;
    }
    scope.updateRollButton = function() {
        var but = document.getElementById("btnRoll");
        but.disabled = false;
        but.innerHTML = 'Player #' + scope.currentPlayerIndex + ' Roll your ball';
    }


})(bowlingChallange || {})

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

    }
    scope.updateRollButton = function() {
        document.getElementById('btnRoll').value = 'Player #' + scope.currentPlayerIndex + ' Rolls';
    }


})(bowlingChallange || {})

'use strict';

if (typeof(bowlingChallenge) == 'undefined') {
    var bowlingChallenge = {};
}

(function(scope) {

    //Generates random number for the simulation of the game.
    //For Testing you can pass result for required result
    scope.rollBallSimulator = function(result) {
        result = result || null;

        //Test Result
        if(result !== null) return result;

        //Random Result 

        //from 0 - 10 
        return randomNumberGeneratorInterval(0,10);

        //from 1 - 10 
        // return randomNumberGeneratorInterval(1,10);
    };


    var randomNumberGeneratorInterval = function(min,max){
        return Math.floor(Math.random() * (scope.remainingPins - min + 1)) + min;
    }


    //Adds some animation to html to display remaining pins.
    scope.drawPinStates = function(rollScore) {
        rollScore = rollScore || 0;
    	var pinHolder = document.getElementById('pinHolder');
    	var scoreText = document.getElementById('scoreText');
        if (!scope.animation) {
        	pinHolder.innerHTML  = '';
        	scoreText.innerHTML  = '';
            return;
        }
        var html = '';

        for (var i = 0; i < scope.remainingPins; i++) {
            if (i == 4) {
                html += '</br>';
            } else if (i == 7) {
                html += '</br>';
            } else if (i == 9) {
                html += '</br>';
            }
            html += '<span class="pins"></span>';
        }
        scoreText.innerHTML = rollScore + ' Pins Downs';
        pinHolder.innerHTML = html;
    };
    scope.disableRollButtonForAnimation = function() {
        var but = document.getElementById('btnRoll');
        but.innerHTML = 'Collecting pins for next round :)';
        but.disabled = true;
    };
    scope.updateRollButton = function() {
        var but = document.getElementById('btnRoll');
        but.disabled = false;
        but.innerHTML = 'Player #' + scope.currentPlayerIndex + '<br> Let\'s Bowl';
    };


})(bowlingChallenge || {});

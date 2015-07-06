'use strict';

if (typeof(bowlingChallenge) == 'undefined') {
    var bowlingChallenge = {};
}

(function(scope) {

    //Score Object for players 
    scope.score = function(index, playerIndex) {
            this.index = index;
            this.playerIndex = playerIndex;
            this.firstRoll = null;
            this.secondRoll = null;

            //Singly Linked Lists Property
            this.getNextScore = function() {
                if (typeof(scope.players[playerIndex].scores[index + 1]) !== 'undefined') {
                    return scope.players[playerIndex].scores[index + 1];
                } else {
                    return null;
                }
            };

            this.calculatePairSum = function() {
                if (this.getNextScore() === null) { //Last Hand no Additional frams 20 points bonus 
                    return 20;
                } else if (this.getNextScore().firstRoll !== null) { //Add Second Roll
                    return scope.maxNumOfPins + this.getNextScore().firstRoll;
                } else {
                    return '';
                }
            };

            this.calculateStrikeSum = function() {

                if (this.getNextScore() === null || (this.getNextScore().firstRoll === scope.maxNumOfPins && this.getNextScore().getNextScore() === null)) { //Last Hand No Additional Frames directly 30 points bonus
                    return 30;
                } else if (this.getNextScore().firstRoll === scope.maxNumOfPins && this.getNextScore().getNextScore().firstRoll !== null) { // two row in a strike 
                    return scope.maxNumOfPins + this.getNextScore().firstRoll + this.getNextScore().getNextScore().firstRoll;
                } else if (this.getNextScore().firstRoll !== scope.maxNumOfPins && this.getNextScore().secondRoll !== null) { // No following strike
                    return scope.maxNumOfPins + this.getNextScore().firstRoll + this.getNextScore().secondRoll;
                } else {
                    return '';
                }
            };
            this.total = function() {
                if (this.firstRoll == scope.maxNumOfPins) { // Strike
                    return this.calculateStrikeSum();
                } else if (this.firstRoll + this.secondRoll == scope.maxNumOfPins) { //  Pair
                    return this.calculatePairSum();
                } else { //No pair or Strike
                    return this.firstRoll + this.secondRoll;
                }
            };
            return true;
        };
        //Draws and Updates scoreboard for the game
    scope.drawScoreBoard = function() {
        var html = '<table class="scoreTable" cellpadding="10" cellspacing="10">';

        for (var i = 0; i < scope.players.length; i++) {
            html += '<tr>';
            html += '<td>';
            html += '<label>Player # ' + i + '</label>';
            html += '</td>';
            for (var j = 0; j < scope.players[i].scores.length; j++) {
                html += '<td>';
                if (scope.players[i].scores[j].firstRoll == scope.maxNumOfPins) {
                    html += '<span class="strike">X</span>';
                } else {
                    html += '<span class="frameScores">' + (scope.players[i].scores[j].firstRoll === null ? '-' : scope.players[i].scores[j].firstRoll) + ' <span class="seperator">|</span> </span>';
                    if (scope.players[i].scores[j].firstRoll + scope.players[i].scores[j].secondRoll === scope.maxNumOfPins) {
                        html += '<span>/</span>';
                    } else {
                        html += '<span>' + (scope.players[i].scores[j].secondRoll === null ? '-' : scope.players[i].scores[j].secondRoll) + '  </span>';
                    }
                }
                html += '<div class="frameTotal">' + scope.players[i].scores[j].total() + '</div>';
                html += '</td>';
            }
            html += '<td class="totalScore">';
            html += '<label>Total : ' + scope.players[i].getPlayerTotalScore() + '</label>';
            html += '</td>';
            html += '</tr>';
        }

        html += '</table>';

        document.getElementById('scoreBoard').innerHTML = html;
    };

})(bowlingChallenge || {});

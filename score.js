if (typeof(bowlingChallange) == 'undefined') {
    var bowlingChallange = {};
}

(function(scope) {

    //Score Object for players
    scope.score = function(index, playerIndex) {
            this.index = index;
            this.playerIndex = playerIndex;
            this.firstRoll = null;
            this.secondRoll = null;

            this.total = function() {
                if (this.firstRoll == 10) { //if Strike
                    if (typeof(scope.players[playerIndex].scores[index + 1]) === 'undefined') { //Last Hand
                        return 20;
                    } else if (scope.players[playerIndex].scores[index + 1].secondRoll != null) {
                        return 10 + scope.players[playerIndex].scores[index + 1].firstRoll + scope.players[playerIndex].scores[index + 1].secondRoll;
                    } else {
                        return '';
                    }
                } else if (this.firstRoll + this.secondRoll == 10) { // if Pair
                    if (typeof(scope.players[playerIndex].scores[index + 1]) === 'undefined') { //Last Hand}
                        return 10;
                    } else if (scope.players[playerIndex].scores[index + 1].firstRoll != null) {
                        return 10 + scope.players[playerIndex].scores[index + 1].firstRoll;
                    } else {
                        return '';
                    }
                } else {
                    return this.firstRoll + this.secondRoll;
                }
            }
            return true;
        }
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
                if (scope.players[i].scores[j].firstRoll == 10) {
                    html += '<span>X</span>';
                } else {
                    html += '<span class="frameScores">' + (scope.players[i].scores[j].firstRoll == null ? '-' : scope.players[i].scores[j].firstRoll) + ' <span class="seperator">|</span> </span>';
                    if (scope.players[i].scores[j].firstRoll + scope.players[i].scores[j].secondRoll == 10) {
                        html += '<span>/</span>'
                    } else {
                        html += '<span>' + (scope.players[i].scores[j].secondRoll == null ? '-' : scope.players[i].scores[j].secondRoll) + '  </span>'
                    }
                }
                html += '<div class="frameTotal">' + scope.players[i].scores[j].total() + '</div>'
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

})(bowlingChallange || {})

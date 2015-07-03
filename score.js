if (typeof(bowlingChallange) == 'undefined') {
    var bowlingChallange = {};
}

(function(scope) {

    //Score Object for players
    scope.score = function() {
        this.firstRoll = null;
        this.secondRoll = null;
        this.total = null;

        this.setFirstRoll = function(score) {
            this.firstRoll = score
        }
        this.setSecondRoll = function(score) {
            this.secondRoll = score
        }
        this.setTotal = function(score) {
            this.total = score;
        }
        return true;

    }

    //Draws and Updates scoreboard for the game
    scope.drawScoreBoard = function() {
        var html = '<table class="scoreTable" cellpadding="10">';

        for (var i = 0; i < scope.players.length; i++) {
            html += '<tr>';
            html += '<td>';
            html += '<label>Player # '+i+ '</label>';
            html += '</td>';
            for (var j = 0; j < scope.players[i].scores.length; j++) {
                html += '<td>';
                html += '<span>'+ (scope.players[i].scores[j].firstRoll == null ? '-' : scope.players[i].scores[j].firstRoll) +' | </span>'
                html += '<span>'+ (scope.players[i].scores[j].secondRoll == null ? '-' : scope.players[i].scores[j].secondRoll)+'  </span>'
                html += '</td>';
            }
            html += '</tr>';
        }

        html += '</table>';

        document.getElementById('scoreBoard').innerHTML = html;
    };

})(bowlingChallange || {})

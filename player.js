if (typeof(bowlingChallange) == 'undefined') {
    var bowlingChallange = {};
}

(function(scope) {


    scope.player = function(index) {
        this.index = index;
        this.frameIndex = 0;
        this.scores = [];


        //Create EmptyScore Array for 10 Frames
        for (var i = 0; i < 10; i++) {

            this.scores.push(new scope.score(i, this.index));
        }
        this.switchToNextPlayer = function() {
            if (scope.currentPlayerIndex + 2 > scope.numberOfPlayers) {
                scope.currentPlayerIndex = 0;
            } else {
                scope.currentPlayerIndex++;
            }
            scope.remainingPins = 10;

            scope.updateRollButton();
        };
        this.getPlayerTotalScore = function(){
            total = 0;
            for(var i = 0 ; i < this.scores.length ; i ++){
                var intTotal = parseInt(this.scores[i].total());
                if(!isNaN(intTotal)){
                        total += intTotal;
                }
                
            }

            return total;
        }
        this.rollBall = function(rollScore) {

            if (typeof(this.scores[this.frameIndex]) === 'undefined') {
                alert('Game Over! Start new game');
                return;
            }

            if (this.scores[this.frameIndex].firstRoll == null) { // First Roll
                this.scores[this.frameIndex].firstRoll = rollScore;
                scope.remainingPins = 10 - rollScore;
                if (rollScore == 10) { //  Check if it's a strike

                    this.scores[this.frameIndex].secondRoll = 0;
                    this.frameIndex++;
                    this.switchToNextPlayer();
                }
            } else { //Second Roll
                this.scores[this.frameIndex].secondRoll = rollScore;

                this.frameIndex++;
                this.switchToNextPlayer();
            }

            scope.drawScoreBoard();
        }

        return true;
    }

})(bowlingChallange || {})

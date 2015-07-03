if (typeof(bowlingChallange) == 'undefined') {
    var bowlingChallange = {};
}

(function(scope) {


    scope.player = function() {
        this.frameIndex = 0;
        this.scores = [];


            //Create EmptyScore Array for 10 Frames
        for (var i = 0; i < 10; i++) {

            this.scores.push(new scope.score());
        }
        this.switchToNextPlayer = function(){
            if( scope.currentPlayerIndex + 2 > scope.numberOfPlayers ){
                scope.currentPlayerIndex = 0;
            }
            else{
                 scope.currentPlayerIndex ++;
            }
            scope.remainingPins = 10; 

            scope.updateRollButton();          
        };
        this.rollBall = function(rollScore) {

            if (this.scores[this.frameIndex].firstRoll == null) { // First Roll
                this.scores[this.frameIndex].setFirstRoll(rollScore);
                scope.remainingPins = 10 - rollScore;
                if (rollScore == 10) { //  Check if it's a strike
                    this.frameIndex++;
                    this.switchToNextPlayer();
                }
            } else { //Second Roll
                this.scores[this.frameIndex].setSecondRoll(rollScore);
                this.frameIndex++;
                this.switchToNextPlayer();
            }

            scope.drawScoreBoard();
        }

        return true;
    }

})(bowlingChallange || {})

if (typeof(bowlingChallange) == 'undefined') {
    var bowlingChallange = {};
}

(function(scope) {


    scope.player = function(playerIndex) {
        this.playerIndex = playerIndex;
        this.frameIndex = 0;
        this.scores = [];


            //Create EmptyScore Array for 10 Frames
        for (var i = 0; i < 10; i++) {

            this.scores.push(new scope.score());
        }

        this.rollBall = function(rollScore) {

            if (this.scores[frameIndex].firstRoll == null) { // First Roll
                this.scores[frameIndex].setFirstRoll(rollScore);
                if (rollScore == 10) { //  Check if it's a strike
                    this.frameIndex++;
                }
            } else { //Second Roll
                this.scores[frameIndex].setSecondRoll(rollScore);
                this.frameIndex++;
            }
        }

        return true;
    }

})(bowlingChallange || {})

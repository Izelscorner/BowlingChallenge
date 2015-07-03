if (typeof(bowlingChallange) == 'undefined') {
    var bowlingChallange = {};
}

(function(scope) {

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


    var drawScoreBoard = function() {

    };

})(bowlingChallange || {})

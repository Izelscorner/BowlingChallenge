if (typeof(bowlingChallange) == 'undefined') {
    var bowlingChallange = {};
}

(function(scope) {

	var player = {name : '' , playerIndex : 0};
	var score =  {playerIndex  : 0 , totalPoints : 0};
	var roll = {rollIndex : 0 , previousScore : 0 , lastScore : 0}

	scope.players = [];
	scope.scores  = [];

	scope.iniateFrame = function(){

	}

	alert('test');



})(bowlingChallange || {})

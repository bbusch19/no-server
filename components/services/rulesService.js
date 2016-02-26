angular.module('pongBreak').service('rulesService', function() {

  var rules = [{name: 'Serving', descrip: 'Place the ball in the “serving trough” on top of the net. All players hold their pig up to the ball (facing it, but not above it). One player starts the round by saying “1-2-3-Oink!” After the oink, players squeeze their pigs at the ball until the ball is in play.'}, {name: 'Volleying', descrip: 'If the ball is on your side of the court, puff you pig at the ball to get it over the net onto the opponents side of the court. You can take as many puffs as you need, but don’t let the ball hit the ground.'}, {name: 'Fouls', descrip: 'There are two fouls that can occur: “Premature Pig Puffing” and “Court Hogging.“Premature Pig Puffing” is when a player blows their pig prior to the “Oink” squeal at the beginning of a round. “Court Hogging” occurs if a player moves their pig over the net during a volley. Think of it as off-sides. In the event of a foul, the ball is dead, and must be served again.'}, {name: 'Scoring', descrip: 'There are no side or rear boundaries—the only boundary is the net itself. Anytime the ball lands on the opponent’s side of playing area (or their side of the floor), you score a point. Keep track of your score using the sliding “Scoring Pig” on top of the net. Once a point has been scored, begin the next serve.'}, {name: 'Winning', descrip: 'The first player or team to reach 11 points wins the game.'}];

  this.returnRules = function() {
    return rules;
  }


})

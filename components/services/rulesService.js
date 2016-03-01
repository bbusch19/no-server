angular.module('pongBreak').service('rulesService', function() {

  var rules = [{name: 'Serving', descrip: 'The ball must rest on an open hand palm. Then it must be tossed up at least 6 inches and struck so the ball first bounces on the server\'s side and then the opponent\'s side.'}, {name: 'Flow of the Match', descrip: 'Each player serves two points in a row and then switch server. However, if a score of 10-10 is reached in any game, then each server serves only one point and then the server is switched. After each game, the players switch side of the table. In the final game (ie 5th game), the players switch side again after either player reaches 5 points.'}, {name: 'Scoring', descrip: 'A match is played best 3 of 5 games (or 4/7 or 5/9). For each game, the first player to reach 11 points wins that game, however a game must be won by at least a two point margin. A point is scored after each ball is put into play (not just when the server wins the point as in volleyball). The edges of the table are part of the legal table surface, but not the sides.'}];

  this.returnRules = function() {
    return rules;
  }


})

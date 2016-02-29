angular.module('pongBreak').controller('playCtrl', function($scope, $firebaseObject, $firebaseArray, seriesReference, gamesRef, scoresRef) {

  var series = $firebaseObject(seriesReference);

  series.$bindTo($scope, 'series');
  // console.log(series)

  var scoreboard = $firebaseObject(scoresRef);
  scoreboard.$bindTo($scope, 'scoreboard');

  $scope.showNewGameForm = false;
  $scope.toggleNewGameForm = function(showNewGameForm) {
    $scope.showNewGameForm = !showNewGameForm;

      }


    $scope.games = $firebaseArray(gamesRef);

    $scope.createGame = function(player1Score, player2Score) {
      $scope.showNewGameForm = false;
      if(player1Score > player2Score) {
        $scope.scoreboard.player1Wins++;
      } else {
        $scope.scoreboard.player2Wins++;
      }
      $scope.games.$add({
        player1Score: player1Score,
        player2Score: player2Score
      })
    }





})

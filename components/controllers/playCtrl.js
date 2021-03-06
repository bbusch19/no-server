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
      var thisDate = new Date().getTime();
      if(player1Score > player2Score) {
        $scope.scoreboard.player1Wins++;
      } else {
        $scope.scoreboard.player2Wins++;
      }
      $scope.games.$add({
        player1Score: player1Score,
        player2Score: player2Score,
        createdAt: thisDate
      })
    }

    $scope.deleteGame = function(game) {
      var conf = confirm("Are you sure you want to delete?");
      if (conf){
        if (game.player1Score > game.player2Score) {
        $scope.scoreboard.player1Wins--;
      } else {
        $scope.scoreboard.player2Wins--;
      }
        $scope.games.$remove(game);
     }
    }





})

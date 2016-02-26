angular.module('pongBreak').controller('playCtrl', function($scope, $firebaseObject, $firebaseArray, seriesReference, gamesRef) {

  var series = $firebaseObject(seriesReference);

  series.$bindTo($scope, 'series');

  $scope.showNewGameForm = false;
  $scope.toggleNewGameForm = function(showNewGameForm) {
    $scope.showNewGameForm = !showNewGameForm;

      }

    $scope.games = $firebaseArray(gamesRef);
    console.log($scope.games);

    $scope.createGame = function(player1Score, player2Score) {
      $scope.showNewGameForm = false;
      $scope.games.$add({
        player1Score: player1Score,
        player2Score: player2Score
      })
    }





})

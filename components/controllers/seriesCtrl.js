angular.module('pongBreak').controller('seriesCtrl', function($scope, $firebaseArray, seriesRef) {

  $scope.showSeriesForm = false;

  $scope.toggleSeriesForm = function(showSeriesForm) {
    $scope.showSeriesForm = !showSeriesForm;
  }

  $scope.series = $firebaseArray(seriesRef)

  $scope.createSeries = function(player1, player2) {
    $scope.showSeriesForm = false;
    $scope.series.$add({
      player1Name: player1,
      player2Name: player2,
      scoreboard: {
        player1Wins: 0,
        player2Wins: 0
      }
    });
  };

  $scope.deleteSeries = function(info) {
    $scope.series.$remove(info);
  }

});

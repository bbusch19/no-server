angular.module('pongBreak').controller('playCtrl', function($scope) {

  $scope.newGame = {};

  $scope.showNewGameForm = false;
  $scope.toggleNewGameForm = function(showNewGameForm) {
    $scope.showNewGameForm = !showNewGameForm;

  }

})

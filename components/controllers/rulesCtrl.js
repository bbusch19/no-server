angular.module('pongBreak').controller('rulesCtrl', function($scope, rulesService) {
  // $scope.descrip = false;

  $scope.rules = rulesService.returnRules();

  // $scope.toggleDescrip = function(descrip) {
  //   $scope.descrip = !descrip;
  // }

})

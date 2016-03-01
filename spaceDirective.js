angular.module('pongBreak').directive('spaceDirective', function() {

  return {
    restrict: 'E',
    template: "&nbsp"
  }

})

.directive('deleteDirective', function() {

  return {
    restrit: 'E',
    template: '<div class="delete-button"><p>Delete</p></div>'
  }
})

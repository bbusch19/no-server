angular.module('pongBreak').directive('slideDownAndUp', function() {

  function link(scope, elem, attrs) {
    elem.on('click', function() {
      elem.toggleClass('padding');
      elem.find('p').toggleClass('rule-descrip');
    })
  }

  return {
    restrict: 'A',
    link: link
  }

})

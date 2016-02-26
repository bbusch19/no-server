angular.module('pongBreak').directive('highlightDirective', function() {

  function link(scope, element, attrs) {
   element.on('mouseenter', function() {
     element.css('background', '#0de5e5');
   })
   element.on('mouseleave', function() {
     element.css('background', '#00CCCC')
   })
 }

  return {
    restrict: 'A',
    link: link

  }

})

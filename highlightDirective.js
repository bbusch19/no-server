angular.module('pongBreak').directive('highlightDirective', function() {

  function link(scope, element, attrs) {
   element.on('mouseenter', function() {
     element.css('background', 'white');
     element.css('color', '#063852');
     element.find('a').css('color', '#063852');
     element.find('a').css('transition', 'all 0.3s ease-in-out');
     element.css('box-shadow', '-2px 10px 30px -6px rgba(0,0,0,0.87)');
     element.css('transition', 'all 0.3s ease-in-out')
   })
   element.on('mouseleave', function() {
     element.css('background', '#063852');
     element.css('color', 'white');
     element.find('a').css('color', 'white');
     element.css('box-shadow', '-2px 3px 22px -6px rgba(0,0,0,0.87)');
     element.css('transition', 'all 0.3s ease-in-out')

   })
 }

  return {
    restrict: 'A',
    link: link

  }

})

angular.module('pongBreak', ['ui.router', 'firebase'])

.constant('fb', {
  url: 'https://pongbreak.firebaseio.com/'
})

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('landing', {
    url: '/',
    templateUrl: 'components/views/landingTmpl.html',
    controller: 'landingCtrl'
  })
  .state('home', {
    url: '/home',
    templateUrl: 'components/views/homeTmpl.html',
    controller: 'homeCtrl'
  })
  .state('rules', {
    url: '/rules',
    templateUrl: 'components/views/rulesTmpl.html',
    controller: 'rulesCtrl'
  })
  .state('series', {
    url: '/series',
    templateUrl: 'components/views/seriesTmpl.html',
    controller: 'seriesCtrl',
    resolve: {
      seriesRef: function(seriesService) {
        return seriesService.getSeries();
      }
    }
  })
  .state('play', {
    url: '/series/:seriesId',
    templateUrl: 'components/views/playTmpl.html',
    controller: 'playCtrl'
  })

})

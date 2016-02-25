angular.module('pongBreak', ['ui.router'])

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

})

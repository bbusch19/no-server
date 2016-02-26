angular.module('pongBreak').service('seriesService', function(fb) {

  this.getSeries = function() {
    return new Firebase(fb.url + '/series');
  }

})

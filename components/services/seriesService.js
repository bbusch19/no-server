angular.module('pongBreak').service('seriesService', function(fb) {

  this.getSeries = function() {
    return new Firebase(fb.url + '/series');
  }

  this.pullSeries = function(seriesId) {
    return new Firebase(fb.url + '/series/' + seriesId)
  }

  this.getGames = function(seriesId) {
    return new Firebase(fb.url + '/series/' + seriesId + '/games');
  }

  this.getScores = function(seriesId) {
    return new Firebase(fb.url + '/series/' + seriesId + '/scoreboard');
  }

})

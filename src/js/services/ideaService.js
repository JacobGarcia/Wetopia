angular.module('wetopiaApp')
.service('ideaDataService', function($http) {

  this.getIdeaInformation = function (username, ideaname, pivot, callback, errorCallback) {
    return $http.get(window.HOST + '/api/'+ username + '/' + ideaname + '/'+pivot)
    .then(callback, errorCallback)
  }

  this.updateIdeaInformation = function (username, ideaname, pivot, newInformation, callback) {
    return $http.put(window.HOST + '/api/'+ username + '/' + ideaname + '/' +pivot, newInformation)
    .then(callback)
  }

  this.deleteIdea = function (idea_id, pivot, comment, callback, errorCallback) {
    return $http.delete(window.HOST + '/api/ideas/'+ idea_id+'/'+pivot, comment)
    .then(callback, errorCallback)
  }

  this.getAllIdeas = function (callback) {
    return $http.get(window.HOST + '/api/ideas/all')
    .then(callback)
  }

  this.getTrendingIdeas = function (callback) {
    return $http.get(window.HOST + '/api/ideas/trending')
    .then(callback)
  }

  this.getIdeasByCategory = function (category, callback, errorCallback) {
    return $http.get(window.HOST + '/api/ideas/all/category/'+category)
    .then(callback, errorCallback)
  }

  this.getIdeaStats = function (idea_id, pivot_id, callback, errorCallback) {
    return $http.get(window.HOST + '/api/ideas/'+idea_id+'/'+pivot_id+'/stats')
    .then(callback, errorCallback)
  }

  this.giveFeedback = function (username, ideaname, pivot, text, callback, errorCallback) {
    return $http.post(window.HOST + '/api/idea/feedback' + username + '/' + ideaname + '/' + pivot, text)
    .then(callback, errorCallback)
  }

  this.deleteFeedback = function (feedback_id, callback, errorCallback){
    return $http.delete(window.HOST + '/api/feedback/'+feedback_id)
    .then(callback, errorCallback)
  }

  this.giveStarToFeedback = function (idea_id, feedback_id, callback, errorCallback) {
    return $http.post(window.HOST + '/api/ideas/'+idea_id+'/'+feedback_id+'/star')
    .then(callback, errorCallback)
  }

  this.giveLike = function (username, ideaname, pivot_id, like_type, callback, errorCallback) {
    return $http.post(window.HOST + '/api/idea/interest/'+ username + '/' + ideaname + '/'+ pivot_id, like_type)
    .then(callback, errorCallback)
  }

  this.getLike = function (username, ideaname, pivot_id, callback, errorCallback) {
      return $http.get(window.HOST + '/api/idea/interest/'+ username + '/' + ideaname + '/'+ pivot_id)
    .then(callback, errorCallback)
  }

  this.createNewPivot = function (username, ideaname, pivotInformation, callback, errorCallback) {
    return $http.post(window.HOST + '/api/idea/pivot/'+username+ '/' + ideaname, pivotInformation)
    .then(callback, errorCallback)
  }

})

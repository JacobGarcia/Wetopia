angular.module('wetopiaApp')
.service('profileDataService', function($http) {

  this.getProfileInfo = function(user_id, callback) {
    return $http.get(window.HOST + '/api/users/' + user_id ).then(callback);
  }

  this.getProfileMoments = function(user_id, callback) {
    $http.get(window.HOST + '/api/users/' + user_id + '/moments')
    .then(callback);
  }

  this.getProfileInboxMoments = function(user_id, callback) {
    console.log('Getting inbox moments')
    $http.get(window.HOST + '/api/users/' + user_id + '/inbox/moments')
    .then(callback);
  }


})

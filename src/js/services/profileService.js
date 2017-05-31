angular.module('wetopiaApp')
.service('profileDataService', function($http) {

  this.getProfileInfo = function(user_id, callback) {
    return $http.get(window.HOST + '/api/users/' + user_id ).then(callback);
  }

  this.updateProfileInfo = function(user_id, new_info, callback, errorCallback) {
    $http.put(window.HOST + '/api/users/' + user_id, new_info).then(callback, errorCallback);
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

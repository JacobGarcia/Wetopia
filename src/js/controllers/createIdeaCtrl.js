angular.module('musementApp')
    .controller('createIdeaCtrl', function($scope, $rootScope, $stateParams, createIdeaDataService, localStorageService, $http, Upload, $state, $window) {

        let user_id = localStorageService.get('user_id');
        $scope.idea = createIdeaDataService.idea;
        $scope.mySwitch = false;
        $scope.inputTeamMembers = false;
        $scope.tags = [];
        $scope.idea.members = [];
        $scope.showCategories = false;
        loadTags();
        $scope.errorTitle = false;
        $scope.errorTitleMessage = "";
        $scope.errorCategory = false;
        $scope.errorCategoryMessage = "";
        $scope.errorDescription = false;
        $scope.errorDescriptionMessage = "";
        $scope.errorSolution = false;
        $scope.errorSolutionMessage = "";
        $scope.errorOtherCategory = false;
        $scope.idea.categories = [];
        $scope.categories = [];
        $scope.categorySelected = {};


        $scope.selectCategory = function(category) {
            $scope.clearErrors();
            $scope.categorySelected = category;
            $scope.showCategories = false;
        }

        $scope.changeShowCategories = function() {
            $scope.showCategories = !$scope.showCategories;
        }

        // Load members when creating a project
        $scope.loadMembers = function($query) {
            return $http.get(HOST + '/api/members/' + user_id, {
                cache: true
            }).then(function(response) {
                var members = response.data;
                return members.filter(function(member) {
                    return member.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
                });
            });
        }

        // Load categories when creating a moment
        function loadTags($query) {
            return $http.get(HOST + '/api/tags', {
                cache: true
            }).then(function(response) {
                var tags = response.data;
                for (var i = 0; i < tags.length; i++) {
                    $scope.categories[i] = {
                      name : tags[i].name,
                      id : tags[i]._id
                    }
                }
            })
        }


        $scope.clearErrors = function() {
            $scope.errorTitle = false;
            $scope.errorTitleMessage = "";
            $scope.errorCategory = false;
            $scope.errorCategoryMessage = "";
            $scope.errorDescription = false;
            $scope.errorDescriptionMessage = "";
            $scope.errorSolution = false;
            $scope.errorOtherCategory = false;
            $scope.errorSolutionMessage = "";
        }



        $scope.goNext = function() {
            $scope.clearErrors();
            if (!$scope.idea.name) {
                $scope.errorTitleMessage = "Please enter a title for your idea. ";
                $scope.errorTitle = true;
            }
            if (!$scope.idea.description) {
                $scope.errorDescriptionMessage = "Please enter a description for your idea.";
                $scope.errorDescription = true;
            }
            if (!$scope.categorySelected.name) {
                $scope.errorCategoryMessage = "Please select a category for your idea. ";
                $scope.errorCategory = true;
            }
            if ($scope.categorySelected == 'Others' && ($scope.otherCategory == "" || $scope.otherCategory == undefined)) {
                $scope.errorCategoryMessage = "Please enter what's your project about.";
                $scope.errorOtherCategory = true;
            }
            if ($scope.idea.name && $scope.idea.description && $scope.categorySelected && ($scope.categorySelected != 'Others' || $scope.otherCategory)) {
                $state.go('createIdea.second');
            }
        }

        $scope.createIdea = function ( ){
          if ($scope.idea.banner){
            Upload.upload({
                    url: window.HOST + '/api/upload',
                    data: {
                        file: $scope.idea.banner
                    }
                })
                .then(function(res) { //upload function returns a promise
                  console.log(res.data.file_name+" ghrej");
                    $scope.submitIdea('/static/uploads/' + res.data.file_name);
                }, function(errRes) { //catch error
                    $window.alert('Error status: ' + errRes.status);
                });
          }
          else{
            $scope.submitIdea();
          }

        }


        $scope.submitIdea = function(banner) {
            console.log("sumbitIdea Execute");
            // if ($scope.categorySelected == 'Others') {
            //     $scope.idea.categories = $scope.otherCategory;
            // }

            // getCategoryId($scope.categorySelected);
            // console.log("categories"+$scope.idea.categories);
            $scope.idea.categories[0] = $scope.categorySelected.id;
            $scope.idea.banner = banner;

            createIdeaDataService.setIdea(user_id, function(res) {
                if (res.status == 201) {
                    // $scope.this_user.ideas.push(res.data.idea)
                    $state.go('idea');
                }
                else {
                  console.log('falle xq fui infiel');
                }
            });

        }

    })

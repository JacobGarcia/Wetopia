angular.module('musementApp')
    .controller('mainCtrl', function($scope, loginDataService, invitationDataService, localStorageService, $state, AuthService, $translate, $window) {

        $scope.segue = [{}];
        if (AuthService.isAuthenticated()) {
            $state.go('feed');
        }

        $scope.submit = function(guest) {
            if (guest != null) {
                let invitationInfo = {};
                invitationInfo.email = this.guest.email;
                invitationInfo.name = this.guest.name;
                invitationInfo.preference = this.guest.preference;

                invitationDataService.invitation(invitationInfo, function(res) {
                    if (res.status == 201)
                        $scope.message = $translate.instant('VALID_EMAIL');
                    $window.alert("Checa tu correo. ");
                });
            } else
                $window.alert("Por favor, ingresa un correo válido. ");
            $scope.message = $translate.instant('INVALID_EMAIL');
        }

    });

'use strict';

angular.module('frontendApp')
    .controller('MainmenuCtrl', function($scope, $location) {
        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    });
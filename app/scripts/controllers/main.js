'use strict';

angular.module('frontendApp')
    .controller('MainCtrl', ['$scope', 'MaquinaService',
        function($scope, MaquinaService) {
            $scope.maquinas = MaquinaService.listMaquinas()
        }
    ]);
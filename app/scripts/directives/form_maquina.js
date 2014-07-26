'use strict';

angular.module('frontendApp')
    .directive('formMaquina', function() {
        return {
            templateUrl: '/views/cadastro_maquina.html',
            restrict: 'E',
            controller: 'MaquinasCtrl'
        };
    });
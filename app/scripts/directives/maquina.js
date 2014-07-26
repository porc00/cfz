'use strict';

angular.module('frontendApp')
    .directive('maquina', function() {
        return {
            templateUrl: '/views/template_maquina.html',
            restrict: 'E',
            controller: "MaquinasCtrl",
            scope: {
                maquina: "=maquina"
            }
        };
    });
'use strict';

angular.module('frontendApp')
    .directive('selecionadorCliente', function() {
        return {
            templateUrl: '/views/selecionador_cliente_view.html',
            restrict: 'E',
            controller: 'SelecionadorClienteCtrl',
            scope: {
                entidade: "=entidade"
            }
        };
    });
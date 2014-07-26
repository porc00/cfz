'use strict';

angular.module('frontendApp')
    .controller('MaquinasCtrl', ['$scope', 'MaquinaService', 'MessageService',

        function($scope, MaquinaService, MessageService) {
            $scope.mostraForm = false;
            $scope.mostraFormHistorico = false;
            $scope.maquinas = MaquinaService.listMaquinas();
            MessageService.verificarSeTemMensagem('#mensagens');
        }
    ]);
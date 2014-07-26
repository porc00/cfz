'use strict';

angular.module('frontendApp')
    .controller('ClienteCtrl', ['$scope', '$location', '$alert', 'ClienteService', 'MessageService',

        function($scope, $location, $alert, ClienteService, MessageService) {

            MessageService.verificarSeTemMensagem('#mensagens');
            $scope.mostraBusca = true;
            $scope.clientes = ClienteService.listClientes();
            $scope.filterOptions = {
                filterText: ''
            }

            $scope.gridClientes = {
                filterOptions: $scope.filterOptions,
                data: 'clientes',
                multiSelect: false,
                afterSelectionChange: editarSelecionado,
                selectedItems: [],
                columnDefs: [{
                    field: 'nome',
                    displayName: 'Nome'
                }, {
                    field: 'email',
                    displayName: 'E-mail'
                }]
            }

            function editarSelecionado(row) {
                if (row.selected) {
                    var clienteID = $scope.gridClientes.selectedItems[0].id;
                    $location.path('/clientes/edicao/' + clienteID)
                }
            }

        }
    ]);
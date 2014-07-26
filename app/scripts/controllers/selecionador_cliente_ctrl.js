'use strict';

angular.module('frontendApp')
    .controller('SelecionadorClienteCtrl', ['$scope', 'ClienteService',
        function($scope, ClienteService) {

            $scope.clientes = ClienteService.listClientes();
            $scope.filterOptions = {
                filterText: ''
            }

            $scope.gridClientes = {
                filterOptions: $scope.filterOptions,
                data: 'clientes',
                multiSelect: false,
                afterSelectionChange: deposMudarSelecao,
                selectedItems: [],
            }

            function setaCliente(destino, propriedade, cliente) {
                if (destino == undefined) {
                    destino = {};
                }
                destino[propriedade] = cliente;
            }

            function deposMudarSelecao(row) {
                if (row.selected) {
                    if ($scope.entidade == undefined) {
                        $scope.entidade = {};
                    }
                    var cliente = $scope.gridClientes.selectedItems[0].nome;
                    setaCliente($scope.entidade, "cliente", cliente)
                }
            }

        }
    ]);
'use strict';

angular.module('frontendApp')
    .controller('CadastroClienteCtrl', ['$scope', '$routeParams', '$location', 'ClienteService', 'MessageService',

        function($scope, $routeParams, $location, ClienteService, MessageService) {

            if ($routeParams.clienteId != undefined) {
                abrirEdicaoCliente($routeParams);
                $scope.operacao = {
                    nome: 'Edição',
                    tipo: 'edicao'
                }
            } else {
                $scope.operacao = {
                    nome: 'Cadastro',
                    tipo: 'cadastro'
                }
            }

            function abrirEdicaoCliente(params) {
                var cliente = ClienteService.findClientePorID(params.clienteId)
                $scope.cliente = cliente;
            }

            $scope.salvarCliente = function(cliente) {
                ClienteService.salvarCliente(cliente);
                MessageService.adicionarMensagem('Cliente ' + cliente.nome + ' excluido com sucesso.');
                $location.path('/clientes')
            }

            $scope.excluirCliente = function(cliente) {
                ClienteService.excluirCliente(cliente);
                MessageService.adicionarMensagem('Cliente ' + cliente.nome + ' cadastrado com sucesso.');
                $location.path('/clientes')
            }
        }
    ]);
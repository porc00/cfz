'use strict';

angular.module('frontendApp')
    .controller('CadastroMaquinaCtrl', ['$scope', '$location', '$routeParams', 'MessageService', 'MaquinaService', 'TipoHistoricoService',

        function($scope, $location, $routeParams, MessageService, MaquinaService, TipoHistoricoService) {
            $scope.mostraFormHistorico = false;
            $scope.tiposHistorico = TipoHistoricoService.listTipoHistorico();

            if ($routeParams.maquinaId != undefined) {
                abrirEdicaoMaquina($routeParams);
                $scope.operacao = {
                    nome: 'Edição',
                    tipo: 'edicao'
                }
            } else {
                $scope.operacao = {
                    nome: 'Cadastro',
                    tipo: 'cadastro'
                }
                criarMaquina();
            }

            function abrirEdicaoMaquina(params) {
                var maquina = MaquinaService.findMaquinaPorID($routeParams.maquinaId)
                $scope.maquina = maquina;
            }

            function criarMaquina() {
                $scope.maquina = MaquinaService.criarMaquina();
            }

            $scope.formHistoricoTemErro = function($form) {
                return $form.data.$valid == false || $form.tipoHistorico.$valid == false;
            }

            $scope.formMaquinaTemErro = function($form) {
                return $form.modelo.$valid == false || $form.nuGarantia.$valid == false;
            }

            $scope.adicionarItemHistorico = function(itemHistorico) {
                $scope.maquina.historico = $scope.maquina.historico || [];
                $scope.maquina.historico.push(itemHistorico);
                ordenaArrayPorData($scope.maquina.historico, 'data');
                itemHistorico = null;
            }

            $scope.removerItemHistorico = function(itemHistorico) {
                if ($scope.maquina.historico) {
                    var index = $scope.maquina.historico.indexOf(itemHistorico);
                    $scope.maquina.historico.splice(index, 1);
                    ordenaArrayPorData($scope.maquina.historico, 'data');
                }
            }

            $scope.excluirMaquina = function(maquina) {
                MaquinaService.excluirMaquina(maquina);
                MessageService.adicionarMensagem('Maquina ' + $scope.maquina.nuGarantia + ' excluida com sucesso.')

                $location.path("/maquinas");
            }

            $scope.salvarMaquina = function() {
                MaquinaService.saveMaquina($scope.maquina);
                MessageService.adicionarMensagem('Maquina ' + $scope.maquina.nuGarantia + ' salva com sucesso.')
                $scope.maquina = null;
                $scope.historico = null;

                $location.path("/maquinas");
            }

            $scope.voltar = function() {
                $location.path("/maquinas");
            }

            function ordenaArrayPorData(array, nomeCampo) {
                array.sort(function(a, b) {
                    return new Date(a[nomeCampo]) - new Date(b[nomeCampo]);
                });
            }

        }
    ]);
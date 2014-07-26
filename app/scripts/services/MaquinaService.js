'use strict';

angular.module('frontendApp')
    .service('MaquinaService', [

        function maquinaService() {

            this.maquinas = [{
                id: "0",
                nuGarantia: "asx304",
                desc: "uma bela maquina"
            }];

            this.criarMaquina = function() {
                var maquina = {};
                var historico = [];

                var itemHistorico = {
                    tipoHistorico: "Registrado",
                    data: new Date(),
                    podeExcluir: false
                }
                historico.push(itemHistorico);
                maquina.historico = historico;

                return maquina;
            }

            this.listMaquinas = function() {
                return this.maquinas;
            }

            this.saveMaquina = function(maquina) {
                if (this.maquinas == undefined) {
                    this.maquinas = [];
                }

                if (maquina.id != undefined) {
                    var index = this.maquinas.indexOf(maquina);
                    this.maquinas[index] = maquina;
                } else {
                    maquina.id = this.maquinas.length;
                    this.maquinas.push(maquina);
                }
            }

            this.findMaquinaPorID = function(maquinaId) {
                return this.maquinas.filter(function(maquina) {
                    return maquina.id == maquinaId
                })[0];
            }

            this.excluirMaquina = function(maquina) {
                var index = this.maquinas.indexOf(maquina);
                this.maquinas.splice(index, 1);
            }
        }
    ]);
'use strict';

angular.module('frontendApp')
    .service('MessageService', ['$alert',
        function MessageService($alert) {
            this.messages = [];

            this.adicionarMensagem = function(mensagem) {
                this.messages.push(mensagem);
            }

            this.pegarUltimaMensagem = function() {
                return this.messages.pop();
            }

            this.temMensagem = function() {
                return this.messages.length > 0;
            }

            this.verificarSeTemMensagem = function(divMensagem) {
                if (this.temMensagem()) {
                    var mensagem = this.pegarUltimaMensagem();

                    var myAlert = $alert({
                        title: 'Sucesso!',
                        content: mensagem,
                        placement: 'top',
                        type: 'success',
                        keyboard: true,
                        show: true,
                        container: divMensagem,
                        duration: 3
                    });
                }
            }

        }
    ]);
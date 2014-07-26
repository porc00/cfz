'use strict';

angular.module('frontendApp')
    .service('TipoHistoricoService', function TiposHistoricoService() {
        var tiposHistorico = [{
            id: 0,
            value: "Retornado do cliente"
        }, {
            id: 1,
            value: "Enviado ao cliente"
        }]

        return {
            listTipoHistorico: listTipoHistorico
        }

        function listTipoHistorico() {
            return tiposHistorico;
        }

    });
'use strict';

angular.module('frontendApp')
    .service('ClienteService', function ClienteService() {
        var clientes = [{
            id: 0,
            nome: "maria",
            email: "maria@gmail.com"
        }, {
            id: 1,
            nome: "joana",
            email: "joana@hotmila.com"
        }];

        return {
            listClientes: listClientes,
            salvarCliente: salvarCliente,
            findClientePorID: findClientePorID,
            excluirCliente: excluirCliente,
            clientes: clientes
        }

        function listClientes() {
            return clientes;
        }

        function salvarCliente(cliente) {

            if (cliente.id != undefined) {
                var index = clientes.indexOf(cliente);
                clientes[index] = cliente;
            } else {
                cliente.id = clientes.length;
                clientes.push(cliente);
            }
        }

        function excluirCliente(cliente) {
            var index = clientes.indexOf(cliente);
            clientes.splice(index, 1)
        }

        function findClientePorID(id) {
            return clientes.filter(function(cliente) {
                return cliente.id == id
            })[0];
        }

    });
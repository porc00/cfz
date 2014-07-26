'use strict';

angular.module('frontendApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngGrid',
    'mgcrea.ngStrap'
])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/maquinas', {
                templateUrl: 'views/maquinas.html',
                controller: 'MaquinasCtrl'
            })
            .when('/clientes', {
                templateUrl: 'views/clientes_list_view.html',
                controller: 'ClienteCtrl'
            })
            .when('/clientes/novo', {
                templateUrl: 'views/clientes_form.html',
                controller: 'CadastroClienteCtrl'
            })
            .when('/clientes/edicao/:clienteId', {
                templateUrl: 'views/clientes_form.html',
                controller: 'CadastroClienteCtrl'
            })
            .when('/maquinas/edicao/:maquinaId', {
                templateUrl: 'views/cadastro_maquina.html',
                controller: 'CadastroMaquinaCtrl'
            })
            .when('/maquinas/novo', {
                templateUrl: 'views/cadastro_maquina.html',
                controller: 'CadastroMaquinaCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
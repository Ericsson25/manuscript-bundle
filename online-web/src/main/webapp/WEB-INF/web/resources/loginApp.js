angular.module('loginApp', [
    'ngRoute',
    'ui.bootstrap',
    'manuscript.frontendcore',
    'manuscript.login',
    'manuscript.registration'
]).constant('_', window._)

.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider.otherwise('/', {
            templateUrl: 'resources/login.html',
        })
    }
]);
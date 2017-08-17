angular.module('loginApp', [
    'ngRoute',
    'manuscript.login'
]).config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider.otherwise('/', {
            templateUrl: 'static/index.html',
        })
    }
]);
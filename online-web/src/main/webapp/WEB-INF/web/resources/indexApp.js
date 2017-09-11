angular.module('indexApp', [
    'ngRoute',
    'ui.bootstrap',
    'manuscript.frontendcore',
    'manuscript.author',
    'manuscript.personaldata'
]).constant('_', window._)

    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider.when('/logout', {
                resolve: {
                    preload: function ($http) {
                        return $http.post('logout').then(function successCallback(response) {
                            window.location = 'login.html';
                            console.log("success: ", response);
                        }, function errorCallback(response) {
                            console.log("error: ", response);
                        })
                    }
                }
            })
                .otherwise('/', {
                    templateUrl: 'resources/index.html',
                })
        }
    ]);
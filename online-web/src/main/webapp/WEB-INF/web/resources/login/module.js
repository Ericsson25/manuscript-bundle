angular.module('manuscript.login', [])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider.when('/', {
                templateUrl: 'resources/login/template/loginTemplate.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
        }

    ]);
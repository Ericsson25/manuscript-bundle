angular.module('manuscript.login', [])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider.when('/', {
                templateUrl: 'static/login/loginTemplate.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
        }

    ]);
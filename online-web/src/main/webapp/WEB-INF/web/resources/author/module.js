angular.module('manuscript.author', [])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider.when('/author', {
                templateUrl: 'resources/author/template/authorTemplate.html',
                controller: 'AuthorController',
                controllerAs: 'vm'
            })
        }

    ]);
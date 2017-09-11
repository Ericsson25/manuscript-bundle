angular.module('manuscript.registration', [])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider.when('/registration', {
                templateUrl: 'resources/registration/template/registrationTemplate.html',
                controller: 'RegistrationController',
                controllerAs: 'vm',
                resolve: {
                    preload: function ($http) {
                        return $http.post('registration/preload').then(successCallback).catch(failureCallback);

                        function successCallback(response) {
                            return response.data;
                        };

                        function failureCallback(error) {
                            return error.data;
                        };
                    }
                }
            })
        }

    ]);
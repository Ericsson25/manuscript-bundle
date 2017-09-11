angular.module('manuscript.personaldata', [])
.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider.when('/personaldata', {
            templateUrl: 'resources/personaldata/template/personalDataTemplate.html',
            controller: 'PersonalDataController',
            controllerAs: 'vm',
            resolve: {
                preload: function ($http) {
                    return $http.post('personaldatasettings/preload').then(successCallback).catch(failureCallback);

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
angular.module('manuscript.login').service('LoginService', LoginService);

LoginService.$inject = ['$http'];

function LoginService($http) {

    var service = {
        login: login
    }

    return service;

    function login(credentials) {

        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        return $http.post('j_spring_security_check', credentials, config).then(successCallback).catch(failureCallback);

        function successCallback(response) {
            return response.data;
        };

        function failureCallback(error) {
            return error.data;
        };
    }
};

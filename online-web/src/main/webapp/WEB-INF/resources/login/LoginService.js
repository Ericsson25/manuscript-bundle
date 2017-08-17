angular.module('manuscript.login').service('LoginService', LoginService);

LoginService.$inject = ['$http'];

function LoginService($http) {

    var service = {
        login: login
    }

    return service;

    function login(credentials) {

        return $http.post('j_spring_security_check', credentials).then(successCallback).catch(failureCallback);

        function successCallback(response){
            console.log('-----------RESPONSE LOGIN: ' + response);
        };

        function failureCallback(error){
            console.log('-----------RESPONSE LOGIN ERROR: ' + error);
        };
    }
};

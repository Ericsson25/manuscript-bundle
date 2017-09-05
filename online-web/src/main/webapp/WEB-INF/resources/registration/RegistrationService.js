angular.module('manuscript.registration').service('RegistrationService', RegistrationService);

RegistrationService.$inject = ['$http'];

function RegistrationService($http) {

    var service = {
        registration: registration
    }

    return service;

    function registration(registrationData) {

        return $http.post('registration/create', registrationData).then(successCallback).catch(failureCallback);

        function successCallback(response){
            return response;
        };

        function failureCallback(error){
            return error;
        };
    }
};

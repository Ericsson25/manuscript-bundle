angular.module('manuscript.registration').service('RegistrationService', RegistrationService);

RegistrationService.$inject = ['$http'];

function RegistrationService($http) {

    var service = {
        registration: registration
    };

    return service;

    function registration(registrationData) {

        var request = registrationData;
        return $http.post('registration/create', request).then(successCallback).catch(failureCallback);

        function successCallback(response) {
            return response.data;
        };

        function failureCallback(error) {
            return error.data;
        };
    };
};

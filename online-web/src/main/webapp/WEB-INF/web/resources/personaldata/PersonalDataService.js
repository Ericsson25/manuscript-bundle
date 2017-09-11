angular.module('manuscript.personaldata').service('PersonalDataService', PersonalDataService);

PersonalDataService.$inject = ['$http'];

function PersonalDataService($http) {

    var service = {
        changePassword: changePassword
    };

    return service;

    function changePassword(password) {
        var request = {
            oldPassword : password.oldPassword,
            password: {
                password: password.newPassword,
                passwordAgain: password.newPasswordAgain,
            }
        };

        debugger;
        return $http.post('personaldatasettings/changepassword', request).then(successCallback).catch(failureCallback);

        function successCallback(response) {
            return response.data;
        };

        function failureCallback(error) {
            return error.data;
        };
    };
};

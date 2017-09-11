angular.module('manuscript.registration').controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['_', '$scope', 'RegistrationService', 'preload', '$location'];

function RegistrationController(_, $scope, RegistrationService, preload, $location) {

    var vm = this;
    vm.messages = [];
    vm.preload = preload.academicDisciplines;
    vm.registrationData = {
        "user": {},
        "password": {},
        "academicDisciplines": []
    };
    vm.registration = registration;
    vm.go = go;
    vm.addSelectedDisciplines = addSelectedDisciplines;
    vm.removeSelectedDisciplines = removeSelectedDisciplines;

    function init() {
        vm.messages = [];
        vm.selectedDisc = null;
    };

    function addSelectedDisciplines(item) {
        init();
        if (vm.preload.indexOf(item) == -1 || vm.registrationData.academicDisciplines.indexOf(item) !== -1) {
            var message = { text: "You have selected an invalid Disciplines or the selected list has been already contains." };
            vm.messages.push(message);
        } else {
            vm.registrationData.academicDisciplines.push(item);
        };
    };

    function removeSelectedDisciplines(index) {
        init();
        vm.registrationData.academicDisciplines.splice(index, 1);
    };

    function registration(form) {
    	debugger;
    	if (form.$valid) {
			console.log("valid");
		}
    	
        RegistrationService.registration(vm.registrationData).then(function (reply) {

            if (reply.success === true) {
                console.log(reply);
                window.location = 'index.html';
            } else {
                _.each(reply.messages, function (message) {
                    console.log(reply);
                    init();
                    vm.messages.push(message);
                });
            }
        });
    };

    function go(path) {
        $location.path(path);
    };

};

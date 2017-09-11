angular.module('manuscript.personaldata').controller('PersonalDataController', PersonalDataController);

PersonalDataController.$inject = ['_', '$scope', 'preload', 'PersonalDataService'];

function PersonalDataController(_, $scope, preload, PersonalDataService) {

  var vm = this;
  vm.preload = preload;
  vm.user = preload.user;
  vm.disciplines = preload.academicDisciplines;
  vm.messages = [];

  vm.changePassword = changePassword;

  function changePassword(password) {
	  PersonalDataService.changePassword(password).then(function (reply) {

      if (reply.success === true) {
        console.log(reply);
      } else {
        _.each(reply.messages, function (message) {
          vm.messages.push(message);
        });
      }
    });
  };
};

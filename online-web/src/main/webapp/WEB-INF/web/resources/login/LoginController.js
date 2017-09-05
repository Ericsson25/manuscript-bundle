angular.module('manuscript.login').controller('LoginController', LoginController);

LoginController.$inject = ['_', '$scope', 'LoginService'];

function LoginController(_, $scope, LoginService) {

	var vm = this;
	vm.messages = [];
	vm.credentials = {};

	vm.authenticate = authenticate;

	function init() {
		vm.messages = [];
	};

	function authenticate() {
		var credentials = "username=" + vm.credentials.username + "&password=" + vm.credentials.password + "&submit=Login";

		LoginService.login(credentials).then(function (reply) {

			if (reply.success === true) {
				window.location = 'index.html';
			} else {
				_.each(reply.messages, function (message) {
					init();
					vm.messages.push(message);
				});
			}

		});
	};
};

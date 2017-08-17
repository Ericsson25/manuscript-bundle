angular.module('manuscript.login').controller('LoginController', LoginController); 

LoginController.$inject = ['$scope', 'LoginService'];

function LoginController($scope, LoginService){

	var vm = this;

	vm.authenticate = authenticate;

	function authenticate(username, password){
		var credentials = "username=" + username + "&password=" + password + "&submit=Login";

		LoginService.login(credentials);
	}

};

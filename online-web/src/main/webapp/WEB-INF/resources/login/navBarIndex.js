angular.module('manuscript.login').directive('navBarIndex', navBarIndex); 

navBarIndex.$inject = ['LoginController'];

function navBarIndex(LoginController){
	var directive = {
        restrict: 'E',
        link: link,
		templateUrl: 'static/login/navBarIndexTemplate.html',
		controller: LoginController
    };
    return directive;

	function link(scope, element, attrs){

	}
	
};

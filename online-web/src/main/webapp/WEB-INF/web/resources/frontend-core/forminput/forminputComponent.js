angular.module('manuscript.frontendcore.forminput').component('forminput', {
	templateUrl: 'resources/frontend-core/forminput/forminput.html',
	bindings: {
		input: '=',
		label: '@',
		type: '@',
		placeholder: '@',
		required: '@'
	},
	controller: MessagesController,
	controllerAs: 'vm'
}); 

function MessagesController() {
	  var vm = this;
	  vm.showLabel = false;
	  vm.isRequired = false;
	  
	  vm.$onInit = function() {
	    
	    if (angular.isDefined(vm.label)) {
	    	vm.showLabel = true;
		};
	    
	    if (!angular.isDefined(vm.type)) {
	    	vm.type = 'text';
		};
		
		if (!angular.isDefined(vm.placeholder)) {
	    	vm.placeholder = '';
		};
		
		if (angular.isDefined(vm.required)) {
			vm.isRequired = true;
		};
			  
	  };
	  
}
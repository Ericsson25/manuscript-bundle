angular.module('manuscript.author').controller('AuthorController', AuthorController);

AuthorController.$inject = ['_', '$scope'];

function AuthorController(_, $scope) {

    var vm = this;
    vm.tabs = [
        {
            title: 'tab1',
            templateUrl: 'resources/author/template/tab1.html'
        },
        {
            title: 'tab2',
            templateUrl: 'resources/author/template/tab2.html'
        }
    ];
};

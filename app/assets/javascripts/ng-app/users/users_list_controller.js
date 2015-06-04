klaseko.controller('UsersListController', ['$scope', '$location', '$stateParams', '$state', 'Restangular',
    function ($scope, $location, $stateParams, $state, Restangular) {
      
      Restangular.all('users').getList().then(function(data){
        $scope.users = data;
      })
  }]);
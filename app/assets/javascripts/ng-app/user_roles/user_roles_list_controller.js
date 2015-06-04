klaseko.controller('UserRolesListController', ['$scope', '$location', '$stateParams', '$state', 'Restangular',
    function ($scope, $location, $stateParams, $state, Restangular) {
      
      Restangular.all('user_roles').getList().then(function(data){
        $scope.roles = data;
      })
  }]);
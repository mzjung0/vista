klaseko.controller('UserRolesAddController', ['$scope', '$location', '$stateParams', '$state', 'Restangular',
    function ($scope, $location, $stateParams, $state, Restangular) {
      
      $scope.save = function(){
        console.log($scope.role);
        Restangular.all('user_roles').post({user_role: $scope.role}).then(function(){
          $state.go('user_roles_list');
          $.growl.notice({ title: 'Success', message: "User role successfully created!" });
        });
      }
  }]);
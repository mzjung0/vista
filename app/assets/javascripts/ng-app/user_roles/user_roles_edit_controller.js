klaseko.controller('UserRolesEditController', ['$scope', '$location', '$stateParams', '$state', 'Restangular',
    function ($scope, $location, $stateParams, $state, Restangular) {
            
      Restangular.one('user_roles', $stateParams.id).get().then(function(data){
        $scope.role = data;
      })

      $scope.save = function(){
        $scope.role.save();
        $state.go('user_roles_list');
        $.growl.notice({ title: 'Success', message: "User role successfully updated!" });
      }
  }]);
klaseko.controller('UsersChangePasswordController', ['$scope', '$location', '$stateParams', '$state', 'Restangular',
    function ($scope, $location, $stateParams, $state, Restangular) {
      
      Restangular.one('users', $stateParams.id).get().then(function(data){
        $scope.user = data;
        console.log(data);
      })

      $scope.save = function(){
        $scope.user.save();
        $state.go('users_list');
        $.growl.notice({ title: 'Success', message: "Password successfully updated!" });
      }
  }]);
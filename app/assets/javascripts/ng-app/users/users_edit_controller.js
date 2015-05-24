klaseko.controller('UsersEditController', ['$scope', '$location', '$stateParams', '$state', 'Restangular',
    function ($scope, $location, $stateParams, $state, Restangular) {
      
      Restangular.one('users', $stateParams.id).get().then(function(data){
        $scope.user = data;
        console.log(data);
      })

      $scope.save = function(){
        $scope.user.save();
        $state.go('users_list');
        $.growl.notice({ title: 'Success', message: "User successfully updated!" });
      }

      $scope.onSalesmanChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          $scope.user.salesman_id = item.originalObject.id;
        }
      }

      $scope.removeSalesman = function(){
        $scope.user.salesman_id = null;
        $scope.$broadcast('angucomplete-alt:clearInput', 'salesman_ac');        
      }
  }]);
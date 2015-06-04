klaseko.controller('UsersAddController', ['$scope', '$location', '$stateParams', '$state', 'Restangular',
    function ($scope, $location, $stateParams, $state, Restangular) {

      $scope.save = function(){
        Restangular.all('users').post({user: $scope.user}).then(function(){
          $state.go('users_list');
          $.growl.notice({ title: 'Success', message: "User successfully created!" });
        });
      }

      $scope.onUserRoleChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          $scope.user.user_role_id = item.originalObject.id;
        }
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
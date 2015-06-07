klaseko.controller('ReplenishmentsAddController', ['$scope', '$location', '$stateParams', '$state', 'Restangular',
    function ($scope, $location, $stateParams, $state, Restangular) {
      
      $scope.data = {};

      $scope.onVanCodeChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.van_id = item.originalObject.id;
        }
      }

      $scope.save = function(){
        Restangular.all('replenishment_headers').post({
          replenishment: $scope.data
        }).then(function(){
          $state.go('replenishments_list');
          $.growl.notice({ title: 'Success', message: "Replenishment transaction successfully created!" });
        });
      }
  }]);
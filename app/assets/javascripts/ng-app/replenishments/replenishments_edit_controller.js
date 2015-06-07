klaseko.controller('ReplenishmentsEditController', ['$scope', '$location', '$stateParams', '$state', 'Restangular',
    function ($scope, $location, $stateParams, $state, Restangular) {
            

      $scope.onVanCodeChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.van_id = item.originalObject.id;
        }
      }

      Restangular.one('replenishment_headers', $stateParams.id).get().then(function(data){
        $scope.data = data;
      })

      $scope.save = function(){
        $scope.data.save();
        $state.go('replenishments_list');
        $.growl.notice({ title: 'Success', message: "Replenishment transaction successfully updated!" });
      }
  }]);
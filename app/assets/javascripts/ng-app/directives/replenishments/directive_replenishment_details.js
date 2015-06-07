

klaseko.directive('replenishmentDetails', [function () {
    return {
      restrict: 'E',
      templateUrl: 'vista/replenishments/directive_details.html',
      controller: function ($scope) {

        $scope.onItemCodeChange = function(item){
          console.log($scope.data.details);

          if (item && item.originalObject.hasOwnProperty("id")){
            if (!$scope.data){
              $scope.data = {};
            }
            $scope.data.details[this.$parent.key].item_id = item.originalObject.id;
          }
        }

        $scope.onUomCodeChange = function(item){
          if (item && item.originalObject.hasOwnProperty("id")){
            if (!$scope.data){
              $scope.data = {};
            }
            $scope.data.details[this.$parent.key].uom_id = item.originalObject.id;
          }
        }

        $scope.addRow = function(){
          if (!$scope.data.details){
            $scope.data.details = [];
          }
          $scope.data.details.push({});
        }

        $scope.deleteRow = function(index){
          $scope.data.details.splice(index, 1)
        }
      }
    };
  }]);

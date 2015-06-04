
klaseko.directive('itemUomUpdate', ['Restangular', function(Restangular) {
  return {
    restrict: 'A',
    scope: {
      data: '=data'
    },
    controller: function($scope){
      $scope.buttonLabel = "Save";

      $scope.$watch('data', function(newVal, oldVal){
        $scope.isDirty = newVal != oldVal;
      }, true)

      $scope.click = function(){
        $scope.buttonLabel = "Updating...";
        $scope.data.put().then(function(result){
          $scope.buttonLabel = "Save";
          $scope.isDirty = false;
        })
      }

      $scope.onItemCodeChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.item_id = item.originalObject.id;
        }
      }

      $scope.onUomCodeChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.uom_id = item.originalObject.id;
        }
      }
    },

    template: '<td><span>{{data.id}}</span></td>' +
              '<td><angucomplete-alt id="item_code_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=items&field=item_code&value=" title-field="item_code" description-field="description" placeholder="Search Item Code" selected-object="onItemCodeChange" initial-value="{{data.item.label}}"></angucomplete-alt></td>' +
              '<td><angucomplete-alt id="uom_code_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=uoms&field=uom_code&value=" title-field="uom_code" description-field="description" placeholder="Search UOM Code" selected-object="onUomCodeChange" initial-value="{{data.uom.label}}"></angucomplete-alt></td>' +
              '<td><input type="text" ng-model=data.unit_conversion placeholder="Conversion" /></td>' +
              '<td><input type="text" ng-model=data.status placeholder="Status" /></td>' +
              '<td><button ng-show="isDirty" ng-click="click()">{{buttonLabel}}</button></td>'
  };
}]);

klaseko.directive('itemUomAdd', ['Restangular', function(Restangular) {
  return {
    restrict: 'A',
    scope: {
      endpoint: '@'
    },
    controller: function($scope, $rootScope){
      $scope.buttonLabel = "Add";

      $scope.onItemCodeChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.item_id = item.originalObject.id;
        }
      }

      $scope.onUomCodeChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.uom_id = item.originalObject.id;
        }
      }

      $scope.click = function(){
        $scope.buttonLabel = "Saving...";
        var service = Restangular.all($scope.endpoint);
        service.post($scope.data).then(function(result){
          $scope.buttonLabel = "Add";
          $scope.data = null;
          $scope.$broadcast('angucomplete-alt:clearInput', 'item_code_ac');
          $scope.$broadcast('angucomplete-alt:clearInput', 'uom_code_ac');
          $rootScope.$broadcast($scope.endpoint + 'Created');
        })
      }
    },
    link: function(scope, element){
      
    },

    template: '<td><span>{{data.id}}</span></td>' +
              '<td><angucomplete-alt id="item_code_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=items&field=item_code&value=" title-field="item_code" description-field="description" placeholder="Search Item Code" selected-object="onItemCodeChange" initial-value="{{data.item.label}}"></angucomplete-alt></td>' +
              '<td><angucomplete-alt id="uom_code_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=uoms&field=uom_code&value=" title-field="uom_code" description-field="description" placeholder="Search UOM Code" selected-object="onUomCodeChange" initial-value="{{data.uom.label}}"></angucomplete-alt></td>' +
              '<td><input type="text" ng-model=data.unit_conversion placeholder="Conversion" /></td>' +
              '<td><input type="text" ng-model=data.status placeholder="Status" /></td>' +
              '<td><button ng-click="click()">Add</button></td>'
  };
}]);
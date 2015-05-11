
klaseko.directive('itemUpdate', ['Restangular', function(Restangular) {
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

      $scope.onItemSegmentChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.item_segment_id = item.originalObject.id;
        }
      }

      $scope.onItemBrandChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.item_brand_id = item.originalObject.id;
        }
      }
    },
    template: '<td><span>{{data.id}}</span></td>' +       
              '<td><input type="text" ng-model=data.item_code /></td>' +       
              '<td><angucomplete-alt id="item_segment_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=item_segments&field=segment_code&value=" title-field="segment_code" description-field="description" placeholder="Search Item Segment Code" selected-object="onItemSegmentChange" initial-value="{{data.item_segment.label}}"></angucomplete-alt></td>' +
              '<td><angucomplete-alt id="item_brand_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=item_brands&field=brand_code&value=" title-field="brand_code" description-field="description" placeholder="Search Item Brand" selected-object="onItemBrandChange" initial-value="{{data.item_brand.label}}"></angucomplete-alt></td>' +
              '<td><input type="text" ng-model=data.description /></td>' +
              '<td><input type="text" ng-model=data.description2 /></td>' +
              '<td><input type="text" ng-model=data.status /></td>' +
              '<td><button ng-show="isDirty" ng-click="click()">{{buttonLabel}}</button></td>'
  };
}]);

klaseko.directive('itemAdd', ['Restangular', function(Restangular) {
  return {
    restrict: 'A',
    scope: {
      endpoint: '@'
    },
    controller: function($scope, $rootScope){
      $scope.buttonLabel = "Add";

      $scope.onItemSegmentChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.item_segment_id = item.originalObject.id;
        }
      }

      $scope.onItemBrandChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.item_brand_id = item.originalObject.id;
        }
      }

      $scope.click = function(){
        $scope.buttonLabel = "Saving...";
        var service = Restangular.all($scope.endpoint);
        service.post($scope.data).then(function(result){
          $scope.buttonLabel = "Add";
          $scope.data = null;
          $scope.$broadcast('angucomplete-alt:clearInput', 'item_segment_ac');
          $scope.$broadcast('angucomplete-alt:clearInput', 'item_brand_ac');
          $rootScope.$broadcast($scope.endpoint + 'Created');
        })
      }
    },
    link: function(scope, element){
      
    },

    template: '<td><span>{{data.id}}</span></td>' +
              '<td><input type="text" ng-model=data.item_code /></td>' +
              '<td><angucomplete-alt id="item_segment_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=item_segments&field=segment_code&value=" title-field="segment_code" description-field="description" placeholder="Search Item Segment Code" selected-object="onItemSegmentChange" initial-value="{{data.item_segment.label}}"></angucomplete-alt></td>' +
              '<td><angucomplete-alt id="item_brand_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=item_brands&field=brand_code&value=" title-field="brand_code" description-field="description" placeholder="Search Item Brand" selected-object="onItemBrandChange" initial-value="{{data.item_brand.label}}"></angucomplete-alt></td>' +
              '<td><input type="text" ng-model=data.description /></td>' +
              '<td><input type="text" ng-model=data.description2 /></td>' +
              '<td><input type="text" ng-model=data.status /></td>' +
              '<td><button ng-click="click()">Add</button></td>'
  };
}]);
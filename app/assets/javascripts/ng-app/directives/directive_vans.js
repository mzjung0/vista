
klaseko.directive('vanUpdate', ['Restangular', function(Restangular) {
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
        }, function(reason){
          $scope.buttonLabel = "Save";
        })
      }

      $scope.onChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          $scope.data.van_code = item.originalObject.id;
        }
      }
    },
    template: '<td><span>{{data.id}}</span></td>' +
              '<td><input type="text" ng-model=data.van_code /></td>' +
              '<td><input type="text" ng-model=data.van_type /></td>' +
              '<td><input type="text" ng-model=data.description /></td>' +
              '<td><input type="text" ng-model=data.load_limit_amount /></td>' +
              '<td><input type="text" ng-model=data.status /></td>' +
              '<td><button ng-show="isDirty" ng-click="click()">{{buttonLabel}}</button></td>'
  };
}]);

klaseko.directive('vanAdd', ['Restangular', function(Restangular) {
  return {
    restrict: 'A',
    scope: {
      endpoint: '@'
    },
    controller: function($scope, $rootScope){
      $scope.data = {};
      $scope.buttonLabel = "Add";

      $scope.click = function(){
        $scope.buttonLabel = "Saving...";
        var service = Restangular.all($scope.endpoint);        
        service.post($scope.data).then(function(result){
          $scope.buttonLabel = "Add";
          $scope.data = null;
          $rootScope.$broadcast($scope.endpoint + 'Created');
        }, function(reason){
          $scope.buttonLabel = "Save";
        })
      }
    },
    link: function(scope, element){
      
    },
    
    template: '<td><span>{{data.id}}</span></td>' +
              '<td><input type="text" ng-model=data.van_code /></td>' +
              '<td><input type="text" ng-model=data.van_type /></td>' +
              '<td><input type="text" ng-model=data.description /></td>' +
              '<td><input type="text" ng-model=data.load_limit_amount /></td>' +
              '<td><input type="text" ng-model=data.status /></td>' +
              '<td><button ng-click="click()">{{buttonLabel}}</button></td>'
  };
}]);
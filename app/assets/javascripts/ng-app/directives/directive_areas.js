
klaseko.directive('areaUpdate', ['Restangular', function(Restangular) {
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
    },
    link: function(scope, element){
      
    },
    template: '<td><span>{{data.id}}</span></td>' +
              '<td><input type="text" ng-model=data.area_code placeholder="Area Code" /></td>' +
              '<td><input type="text" ng-model=data.area_name placeholder="Area Name" /></td>' +
              '<td><input type="text" ng-model=data.status placeholder="Status" /></td>' +
              '<td><button ng-show="isDirty" ng-click="click()">{{buttonLabel}}</button></td>'
  };
}]);

klaseko.directive('areaAdd', ['Restangular', function(Restangular) {
  return {
    restrict: 'A',
    scope: {
      endpoint: '@'
    },
    controller: function($scope, $rootScope){
      $scope.buttonLabel = "Add";

      $scope.click = function(){
        $scope.buttonLabel = "Saving...";
        var service = Restangular.all($scope.endpoint);
        service.post($scope.data).then(function(result){
          $scope.buttonLabel = "Add";
          $scope.data = null;
          $rootScope.$broadcast($scope.endpoint + 'Created');
        })
      }
    },
    link: function(scope, element){
      
    },
    
    template: '<form>' +
              '<td><span>{{data.id}}</span></td>' +
              '<td><input type="text" ng-model=data.area_code placeholder="Area Code" /></td>' +
              '<td><input type="text" ng-model=data.area_name placeholder="Area Name" /></td>' +
              '<td><input type="text" ng-model=data.status placeholder="Status" /></td>' +
              '<td><button ng-click="click()">{{buttonLabel}}</button></td>' +
              '</form>'
  };
}]);
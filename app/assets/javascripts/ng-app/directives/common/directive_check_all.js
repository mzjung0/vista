klaseko.directive('checkAll', ['Restangular', function(Restangular) {
  return {
    restrict: 'E',
    scope: {
      class: '@'
    },
    controller: function($scope){
      $scope.checked = false
    },
    link: function($scope, elem){
      // elem.bind('click', function() {
      //   $scope.checked = !$scope.checked;
      //   $("input[class*='" + $scope.class + "']").
      //     each(function(index, elem){ 
      //       $(elem).prop('checked', $scope.checked);
      //     });
      //   $scope.$apply();
      // });
    },
    template: function(elem, attrs){
      return  '<input ng-click="click" type="checkbox" />'              
    }
  };
}]);
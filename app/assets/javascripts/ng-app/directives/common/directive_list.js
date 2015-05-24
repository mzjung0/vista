klaseko.directive('list', ['Restangular', function(Restangular) {
  return {
    restrict: 'E',
    scope: {
      template: '@',
      endpoint: '@'
    },
    controller: function($scope){
    },
    link: function(scope, element){
      scope.get = function(){
        Restangular.all(scope.endpoint).getList().then(function(data){
          scope.list = data;
        })
      }
      scope.get();

      scope.$on(scope.endpoint + 'Created', function(){
        scope.get();
      })
    },
    template: function(element, attrs){
      return  '<table class="table">' +
              '<thead ' + attrs.template + '-header></thead>' +
              '<tbody>' +
              '<tr class="add-row" ' + attrs.template + '-add endpoint="' + attrs.endpoint + '"></' + attrs.template + '-add></tr>' +
              '<tr ' + attrs.template + '-update data="item"' + 'ng-repeat="item in list"></tr>' +
              '</tbody>' +
              '</table>'              
    }
  };
}]);
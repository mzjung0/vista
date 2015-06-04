klaseko.directive('list', ['$rootScope', 'Restangular', function($rootScope, Restangular) {
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

      var template =
        '<table class="table">' +
        '<thead ' + attrs.template + '-header></thead>' +
        '<tbody>';

      if ($rootScope.hasOwnProperty('current_privileges') &&
          $rootScope.current_privileges.hasOwnProperty(attrs.endpoint)){
        if ($rootScope.current_privileges[attrs.endpoint].hasOwnProperty('create') &&
            $rootScope.current_privileges[attrs.endpoint]['create']){
          template += '<tr class="add-row" ' + attrs.template + '-add endpoint="' + attrs.endpoint + '"></' + attrs.template + '-add></tr>';
        }

        if ($rootScope.current_privileges[attrs.endpoint].hasOwnProperty('update') &&
            $rootScope.current_privileges[attrs.endpoint]['update']){
          template += '<tr ' + attrs.template + '-update data="item"' + 'ng-repeat="item in list"></tr>';
        }
      }
      
      template +=
        '</tbody></table>';

      return template;
    }
  };
}]);
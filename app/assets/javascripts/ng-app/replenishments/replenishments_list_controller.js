klaseko.controller('ReplenishmentsListController', ['$scope', '$location', '$stateParams', '$state', 'Restangular',
    function ($scope, $location, $stateParams, $state, Restangular) {
      
      Restangular.all('replenishment_headers').getList().then(function(data){
        $scope.replenishments = data;
      })
  }]);
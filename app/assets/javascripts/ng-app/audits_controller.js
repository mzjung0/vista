klaseko.controller('AuditsController', ['$scope', '$location', '$stateParams', '$state', 'Restangular',
    function ($scope, $location, $stateParams, $state, Restangular) {
      
      Restangular.all('audits').getList().then(function(data){
        $scope.audits = data;
      })
  }]);
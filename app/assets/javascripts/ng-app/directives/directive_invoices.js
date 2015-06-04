
klaseko.directive('invoiceUpdate', ['Restangular', function(Restangular) {
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

      $scope.onCustomerCodeChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.customer_id = item.originalObject.id;
        }
      }

      $scope.onSalesmanCodeChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.salesman_id = item.originalObject.id;
        }
      }
    },
    template: '<td><span>{{data.id}}</span></td>' +
              '<td><input type="text" ng-model=data.invoice_number placeholder="Invoice #" /></td>' +       
              '<td><angucomplete-alt id="salesman_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=salesmen&field=salesman_code&value=" title-field="salesman_code" description-field="salesman_name" placeholder="Search Salesman" selected-object="onSalesmanCodeChange" initial-value="{{data.salesman.label}}"></angucomplete-alt></td>' +
              '<td><angucomplete-alt id="customer_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=customers&field=customer_code&value=" title-field="customer_code" description-field="customer_name" placeholder="Search Customer" selected-object="onCustomerCodeChange" initial-value="{{data.customer.label}}"></angucomplete-alt></td>' +
              '<td><input type="text" ng-model=data.ship_to_code placeholder="Ship to Code" /></td>' +
              '<td><input type="text" ng-model=data.original_amount placeholder="Original Amount" /></td>' +
              '<td><input type="text" ng-model=data.balance_amount placeholder="Balance Amount" /></td>' +
              '<td><input type="text" class="date" ng-model=data.invoice_date placeholder="Invoice Date (YYYY-MM-DD)" /></td>' +
              '<td><input type="text" class="date" ng-model=data.invoice_due_date placeholder="Invoice Due Date (YYYY-MM-DD)"" /></td>' +
              '<td><input type="text" ng-model=data.document_type placeholder="Document Type" /></td>' +
              '<td><input type="text" ng-model=data.status placeholder="Status" /></td>' +
              '<td><button ng-show="isDirty" ng-click="click()">{{buttonLabel}}</button></td>'
  };
}]);

klaseko.directive('invoiceAdd', ['Restangular', function(Restangular) {
  return {
    restrict: 'A',
    scope: {
      endpoint: '@'
    },
    controller: function($scope, $rootScope){
      $scope.buttonLabel = "Add";


      $scope.onCustomerCodeChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.customer_id = item.originalObject.id;
        }
      }

      $scope.onSalesmanCodeChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.salesman_id = item.originalObject.id;
        }
      }

      $scope.click = function(){
        $scope.buttonLabel = "Saving...";
        var service = Restangular.all($scope.endpoint);
        service.post($scope.data).then(function(result){
          $scope.buttonLabel = "Add";
          $scope.data = null;
          $scope.$broadcast('angucomplete-alt:clearInput', 'salesman_ac');
          $scope.$broadcast('angucomplete-alt:clearInput', 'customer_ac');
          $rootScope.$broadcast($scope.endpoint + 'Created');
        })
      }
    },
    link: function(scope, element){
      
    },

    template: '<td><span>{{data.id}}</span></td>' +
              '<td><input type="text" ng-model=data.invoice_number placeholder="Invoice #" /></td>' +       
              '<td><angucomplete-alt id="salesman_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=salesmen&field=salesman_code&value=" title-field="salesman_code" description-field="salesman_name" placeholder="Search Salesman" selected-object="onSalesmanCodeChange" initial-value="{{data.salesman.label}}"></angucomplete-alt></td>' +
              '<td><angucomplete-alt id="customer_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=customers&field=customer_code&value=" title-field="customer_code" description-field="customer_name" placeholder="Search Customer" selected-object="onCustomerCodeChange" initial-value="{{data.customer.label}}"></angucomplete-alt></td>' +
              '<td><input type="text" ng-model=data.ship_to_code placeholder="Ship to Code" /></td>' +
              '<td><input type="text" ng-model=data.original_amount placeholder="Original Amount" /></td>' +
              '<td><input type="text" ng-model=data.balance_amount placeholder="Balance Amount" /></td>' +
              '<td><input type="text" class="date" ng-model=data.invoice_date placeholder="Invoice Date (YYYY-MM-DD)" /></td>' +
              '<td><input type="text" class="date" ng-model=data.invoice_due_date placeholder="Invoice Due Date (YYYY-MM-DD)"" /></td>' +
              '<td><input type="text" ng-model=data.document_type placeholder="Document Type" /></td>' +
              '<td><input type="text" ng-model=data.status placeholder="Status" /></td>' +
              '<td><button ng-click="click()">Add</button></td>'
  };
}]);
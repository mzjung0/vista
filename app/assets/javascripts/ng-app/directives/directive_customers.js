
klaseko.directive('customerHeader', ['Restangular', function(Restangular) {
  return {
    restrict: 'A',
    link: function(scope, element){
      
    },
    template: '<tr>' +
              '<th>Customer Code</th>' +
              '<th>Area</th>' +
              '<th>Customer Name</th>' +
              '<th>Customer Name 2</th>' +
              '<th>Store Type</th>' +
              '<th>VAT Posting Code</th>' +
              '<th>VAT Ex Flag</th>' +
              '<th>Address 1</th>' +
              '<th>Address 2</th>' +
              '<th>Address 3</th>' +
              '<th>Contact Name</th>' +
              '<th>Contact Number</th>' +
              '<th>Credit Limit</th>' +
              '<th>Discount Group Code</th>' +
              '<th>Warehouse Code</th>' +
              '<th>Ship to Code</th>' +
              '<th>Customer Price Group</th>' +
              '<th>Status</th>' +
              '<th></th>' +
              '</tr>'
  };
}]);


klaseko.directive('customerUpdate', ['Restangular', function(Restangular) {
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

      $scope.onAreaChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.area_id = item.originalObject.id;
        }
      }

      $scope.onStoreTypeChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.storetype_id = item.originalObject.id;
        }
      }

      $scope.onVATPostingChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.vat_posting_id = item.originalObject.id;
        }
      }

      $scope.onDiscountGroupChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.discount_group_id = item.originalObject.id;
        }
      }

      $scope.onCustomerPriceGroupChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.customer_price_group_id = item.originalObject.id;
        }
      }

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
    template: '<form>' +
              '<td><input type="text" ng-model=data.customer_code placeholder="Customer Code" /></td>' +
              '<td><angucomplete-alt id="area_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=areas&field=area_code&value=" title-field="area_code" description-field="area_name" placeholder="Search area" selected-object="onAreaChange" initial-value="{{data.area.label}}"></angucomplete-alt></td>' +
              '<td><input type="text" ng-model=data.customer_name placeholder="Customer Name" /></td>' +
              '<td><input type="text" ng-model=data.customer_name2 placeholder="Customer Name 2" /></td>' +
              '<td><angucomplete-alt id="storetype_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=storetypes&field=storetype_code&value=" title-field="storetype_code" description-field="storetype_name" placeholder="Search store type" selected-object="onStoreTypeChange" initial-value="{{data.storetype.label}}"></angucomplete-alt></td>' +
              '<td><angucomplete-alt id="vat_posting_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=vat_postings&field=vat_posting_code&value=" title-field="vat_posting_code" description-field="vat_posting_name" placeholder="Search VAT posting type" selected-object="onVATPostingChange" initial-value="{{data.vat_posting.label}}"></angucomplete-alt></td>' +
              '<td><input type="text" ng-model=data.vat_ex_flag placeholder="VAT Ex" /></td>' +
              '<td><input type="text" ng-model=data.address_1 placeholder="Address 1" /></td>' +
              '<td><input type="text" ng-model=data.address_2 placeholder="Address 2" /></td>' +
              '<td><input type="text" ng-model=data.address_3 placeholder="Address 3" /></td>' +
              '<td><input type="text" ng-model=data.contact_name placeholder="Contact Name" /></td>' +
              '<td><input type="text" ng-model=data.contact_num placeholder="Contact Number" /></td>' +
              '<td><input type="text" ng-model=data.credit_limit placeholder="Credit Limit" /></td>' +
              '<td><angucomplete-alt id="discount_group_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=discount_groups&field=discount_group_code&value=" title-field="discount_group_code" placeholder="Search Discount Group" selected-object="onDiscountGroupChange" initial-value="{{data.discount_group.label}}"></angucomplete-alt></td>' +
              '<td><input type="text" ng-model=data.warehouse_code placeholder="Warehouse Code" /></td>' +
              '<td><input type="text" ng-model=data.ship_to_code placeholder="Ship to Code" /></td>' +
              '<td><angucomplete-alt id="customer_price_group_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=customer_price_group&field=price_group_code&value=" title-field="price_group_code" placeholder="Search Customer Price Group" selected-object="onCustomerPriceGroupChange" initial-value="{{data.customer_price_group.label}}"></angucomplete-alt></td>' +
              '<td><input type="text" ng-model=data.status placeholder="Status" /></td>' +
              '<td><button ng-show="isDirty" ng-click="click()">{{buttonLabel}}</button></td>' + 
              '</form>'
  };
}]);

klaseko.directive('customerAdd', ['Restangular', function(Restangular) {
  return {
    restrict: 'A',
    scope: {
      endpoint: '@'
    },
    controller: function($scope, $rootScope){
      $scope.buttonLabel = "Add";

      $scope.onAreaChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.area_id = item.originalObject.id;
        }
      }

      $scope.onStoreTypeChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.storetype_id = item.originalObject.id;
        }
      }

      $scope.onVATPostingChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.vat_posting_id = item.originalObject.id;
        }
      }

      $scope.onDiscountGroupChange = function(item){
        if (item && item.originalObject.hasOwnProperty("id")){
          if (!$scope.data){
            $scope.data = {};
          }
          $scope.data.discount_group_id = item.originalObject.id;
        }
      }

      $scope.click = function(){
        $scope.buttonLabel = "Saving...";
        var service = Restangular.all($scope.endpoint);
        service.post($scope.data).then(function(result){
          $scope.buttonLabel = "Add";
          $scope.data = null;
          $scope.$broadcast('angucomplete-alt:clearInput', 'area_ac');
          $scope.$broadcast('angucomplete-alt:clearInput', 'storetype_ac');
          $scope.$broadcast('angucomplete-alt:clearInput', 'vat_posting_ac');
          $scope.$broadcast('angucomplete-alt:clearInput', 'discount_group_ac');
          $scope.$broadcast('angucomplete-alt:clearInput', 'customer_price_group_ac');
          $rootScope.$broadcast($scope.endpoint + 'Created');
        })
      }
    },
    link: function(scope, element){
      
    },

    template: '<form>' +
              '<td><input type="text" ng-model=data.customer_code placeholder="Customer Code" /></td>' +
              '<td><angucomplete-alt id="area_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=areas&field=area_code&value=" title-field="area_code" description-field="area_name" placeholder="Search area" selected-object="onAreaChange" initial-value="{{data.area.label}}"></angucomplete-alt></td>' +
              '<td><input type="text" ng-model=data.customer_name placeholder="Customer Name" /></td>' +
              '<td><input type="text" ng-model=data.customer_name2 placeholder="Customer Name 2" /></td>' +
              '<td><angucomplete-alt id="storetype_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=storetypes&field=storetype_code&value=" title-field="storetype_code" description-field="storetype_name" placeholder="Search store type" selected-object="onStoreTypeChange" initial-value="{{data.storetype.label}}"></angucomplete-alt></td>' +
              '<td><angucomplete-alt id="vat_posting_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=vat_postings&field=vat_posting_code&value=" title-field="vat_posting_code" description-field="vat_posting_name" placeholder="Search VAT posting type" selected-object="onVATPostingChange" initial-value="{{data.vat_posting.label}}"></angucomplete-alt></td>' +
              '<td><input type="text" ng-model=data.vat_ex_flag placeholder="VAT Ex" /></td>' +
              '<td><input type="text" ng-model=data.address_1 placeholder="Address 1" /></td>' +
              '<td><input type="text" ng-model=data.address_2 placeholder="Address 2" /></td>' +
              '<td><input type="text" ng-model=data.address_3 placeholder="Address 3" /></td>' +
              '<td><input type="text" ng-model=data.contact_name placeholder="Contact Name" /></td>' +
              '<td><input type="text" ng-model=data.contact_num placeholder="Contact Number" /></td>' +
              '<td><input type="text" ng-model=data.credit_limit placeholder="Credit Limit" /></td>' +
              '<td><angucomplete-alt id="discount_group_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=discount_groups&field=discount_group_code&value=" title-field="discount_group_code" placeholder="Search Discount Group" selected-object="onDiscountGroupChange" initial-value="{{data.discount_group.label}}"></angucomplete-alt></td>' +
              '<td><input type="text" ng-model=data.warehouse_code placeholder="Warehouse Code" /></td>' +
              '<td><input type="text" ng-model=data.ship_to_code placeholder="Ship to Code" /></td>' +
              '<td><angucomplete-alt id="customer_price_group_ac" override-suggestions=false field-required=true minlength="2" remote-url="/api/search?class=customer_price_group&field=price_group_code&value=" title-field="price_group_code" placeholder="Search Customer Price Group" selected-object="onCustomerPriceGroupChange" initial-value="{{data.customer_price_group.label}}"></angucomplete-alt></td>' +
              '<td><input type="text" ng-model=data.status placeholder="Status" /></td>' +
              '<td><button ng-click="click()">{{buttonLabel}}</button></td>' +
              '</form>'
  };
}]);
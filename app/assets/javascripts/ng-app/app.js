
var klaseko = angular
		.module('klaseko', [
				'templates',
				'ui.router',
				'restangular',
				'angucomplete-alt'
		]);

klaseko.config(['$httpProvider', '$stateProvider', '$locationProvider', '$urlRouterProvider', 'RestangularProvider',
	function ($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider, RestangularProvider) {

	RestangularProvider.setBaseUrl("/api");
	RestangularProvider.setErrorInterceptor(function(response, deferred, responseHandler) {
    if(response.status === 403) {
    	if (response.data.status == "NOT_LOGGED_IN"){
    		alert('Please login to access this page');
    		window.location = "/";
    	}
    	else if (response.data.status == "UNAUTHORIZED"){
    		alert('Insufficient privileges');
    	}
    	else {
    		alert('An error occurred, please try again');	
    	}
  		return false; // error handled
    }
  	else {
  		alert('An error occurred, please try again');	
  	}

    return true; // error not handled
	});

	$stateProvider
		// .state('notfound', {
		// 	url: "/notfound",
		// 	templateUrl: "common/404.html",
		// })
		.state('home', {
			url: '/app',
			templateUrl: "vista/home.html",
			controller: "AppController"
		})
		.state('areas', {
			url: '/app/areas',
			templateUrl: "vista/areas.html",
			controller: "AreasController"
		})
		.state('discount_groups', {
			url: '/app/discount_groups',
			templateUrl: "vista/discount_groups.html",
			controller: "DiscountGroupsController"
		})
		.state('item_brands', {
			url: '/app/item_brands',
			templateUrl: "vista/item_brands.html",
			controller: "ItemBrandsController"
		})
		.state('item_segments', {
			url: '/app/item_segments',
			templateUrl: "vista/item_segments.html",
			controller: "ItemSegmentsController"
		})
		.state('vans', {
			url: '/app/vans',
			templateUrl: "vista/vans.html",
			controller: "VansController"
		})
		.state('storetypes', {
			url: '/app/storetypes',
			templateUrl: "vista/storetypes.html",
			controller: "StoretypesController"
		})
		.state('salesmen', {
			url: '/app/salesmen',
			templateUrl: "vista/salesmen.html",
			controller: "SalesmenController"
		})
		.state('vat_postings', {
			url: '/app/vat_postings',
			templateUrl: "vista/vat_postings.html",
			controller: "VatPostingsController"
		})
		.state('customers', {
			url: '/app/customers',
			templateUrl: "vista/customers.html",
			controller: "CustomersController"
		})
		.state('customer_price_groups', {
			url: '/app/customer_price_groups',
			templateUrl: "vista/customer_price_groups.html",
			controller: "CustomerPriceGroupsController"
		})
		.state('items', {
			url: '/app/items',
			templateUrl: "vista/items.html",
			controller: "ItemsController"
		})
		.state('uoms', {
			url: '/app/uoms',
			templateUrl: "vista/uoms.html",
			controller: "UomsController"
		})
		.state('item_uoms', {
			url: '/app/item_uoms',
			templateUrl: "vista/item_uoms.html",
			controller: "ItemUomsController"
		})
		.state('item_prices', {
			url: '/app/item_prices',
			templateUrl: "vista/item_prices.html",
			controller: "ItemPricesController"
		})
		.state('salesman_customers', {
			url: '/app/salesman_customers',
			templateUrl: "vista/salesman_customers.html",
			controller: "SalesmanCustomersController"
		})
		.state('invoices', {
			url: '/app/invoices',
			templateUrl: "vista/invoices.html",
			controller: "InvoicesController"
		})
		.state('users_list', {
			url: '/app/users_list',
			templateUrl: "vista/users/users_list.html",
			controller: "UsersListController"
		})
		.state('users_edit', {
			url: '/app/users_edit/:id',
			templateUrl: "vista/users/users_edit.html",
			controller: "UsersEditController"
		})
		.state('users_add', {
			url: '/app/users_add',
			templateUrl: "vista/users/users_add.html",
			controller: "UsersAddController"
		})
		.state('users_change_password', {
			url: '/app/users_change_password/:id',
			templateUrl: "vista/users/users_change_password.html",
			controller: "UsersChangePasswordController"
		})
		.state('user_roles_list', {
			url: '/app/user_roles_list',
			templateUrl: "vista/user_roles/list.html",
			controller: "UserRolesListController"
		})
		.state('user_roles_add', {
			url: '/app/user_roles_add',
			templateUrl: "vista/user_roles/add.html",
			controller: "UserRolesAddController"
		})
		.state('user_roles_edit', {
			url: '/app/user_roles_edit/:id',
			templateUrl: "vista/user_roles/edit.html",
			controller: "UserRolesEditController"
		})

		.state('replenishments_list', {
			url: '/app/replenishments',
			templateUrl: "vista/replenishments/list.html",
			controller: "ReplenishmentsListController"
		})

		.state('replenishments_add', {
			url: '/app/replenishments_add',
			templateUrl: "vista/replenishments/add.html",
			controller: "ReplenishmentsAddController"
		})
		.state('replenishments_edit', {
			url: '/app/replenishments_edit/:id',
			templateUrl: "vista/replenishments/edit.html",
			controller: "ReplenishmentsEditController"
		})
		.state('audits', {
			url: '/app/audits',
			templateUrl: "vista/audits.html",
			controller: "AuditsController"
		})
		// .state('backoffice', {
		// 	url: '/backoffice',
		// 	controller: "BackOfficeHomeCtrl",
		// 	templateUrl: "backoffice/home/home.html",
		// 		resolve: {
		// 			currentUser: function($q, DataService){
		// 				var user = DataService.CurrentUser.get();
		// 				return $q.when(user).then(function(result){
		// 					return result
		// 				});
		// 			}
		// 		}
		// })


		// Holidays Directive

		// Display Holiday List and Infos (note: based on institution)
		.state('backoffice.holidays', {
			url: "/institutions/:institutionid/holidays",
			controller: "BackOfficeInstitutionHolidaysCtrl",
			templateUrl: "backoffice/institution-holidays/list.html",
			resolve: {
				initialData: function($q, $stateParams, DataService, $rootScope){
					var institution = DataService.Institutions.get($stateParams.institutionid);
					var holidays = DataService.HolidaysList.get({InstitutionId: $stateParams.institutionid});
					return $q.all([institution, holidays]).then(function(results){
						return {
							institution: results[0],
							holidays: results[1]
						};
					});
				}
			}
		})

	// $urlRouterProvider
	// 	.when("/", "/")
	// 	.otherwise("/notfound");

	$locationProvider.html5Mode(true);
}]);

klaseko.run(function($rootScope, Restangular) {
	Restangular.one('current_user', null).get().then(function(data){
		$rootScope.current_user = data;
		$rootScope.current_privileges = data.user_role.privileges;
	});

	$rootScope.$on('$locationChangeSuccess', function(evt) {
		Restangular.one('current_user', null).get().then(function(data){
			$rootScope.current_user = data;
			$rootScope.current_privileges = data.user_role.privileges;
		});
	});
});

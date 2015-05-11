
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
		.state('brands', {
			url: '/app/brands',
			templateUrl: "vista/brands.html",
			controller: "BrandsController"
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
		.state('store_types', {
			url: '/app/store_types',
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

klaseko.run(function($rootScope, $location, $timeout) {

});

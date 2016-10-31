var app = angular.module('app', ['ui.router']);


app.config(function($urlRouterProvider, $stateProvider){
	
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/app/templates/home_template.html',
			controller: 'ListController'
		})
		.state('details', {
			url: '/details/:detailId',
		  templateUrl: '/app/templates/details_template.html',
			controller: 'DetailsController'
		})
})
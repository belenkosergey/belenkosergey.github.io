var app = angular.module('myApp', [
		'ngRoute',
	])
	.config([
		'$routeProvider',
		function ($routeProvider) {
			'use strict';

			$routeProvider
				.when('/', {
					redirectTo: '/home'
				})
				.when('/home', {
					controller: 'homeCtrl',
					templateUrl: 'views/home.html'
				});
		}
	]);

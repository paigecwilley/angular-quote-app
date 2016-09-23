
	var app = angular.module('quoteApp', ['ngRoute']);
		


		app.config(function($routeProvider){
			$routeProvider
				.when('/', {
					controller: 'addQuotesController',
					templateUrl: 'views/quotes.html'
				})
				.when('/:sortBy', {
					controller: 'authorController',
					templateUrl: 'views/authors.html'
				})





		});



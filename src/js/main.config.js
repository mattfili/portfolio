angular.module('portfolio', ['ui.router','foundation', 'foundation.common', 'ngAnimate'])

.constant('FIRE_URL', 'https://filifamfotos.firebaseIO.com')

.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.when('', '/');
	$urlRouterProvider.otherwise('/landing');

	$locationProvider.html5Mode({
		enabled: false,
		requireBase: false
	});

	$stateProvider
	.state('start', {
	    abstract: true,
	    templateUrl: 'assets/landing.html',
  	})
	.state('start.dash', {
		url: '/landing',
	    views: {
	      	'bDash': {
	        templateUrl: 'assets/bDash.html',
	        controller: 'bDashController',
	        controllerAs: 'bCtrl'
	      },
	      	'nav-content': {
	        templateUrl: 'assets/home.html',
	        controller: 'nav',
	        controllerAs: 'nav'
	      }
	    }
	})
	.state('start.contact', {
		url: '/contact',
	    views: {
	    	'bDash': {
	        templateUrl: 'assets/bDash.html',
	        controller: 'bDashController',
	        controllerAs: 'bCtrl'
	      },
	      	'contact@start': {
	        templateUrl: 'assets/contact.html',
	        controller: 'contact',
	        controllerAs: 'contact'
	      }
	    }
	})
	.state('start.about', {
		url: '/about',
	    views: {
	    	'bDash': {
	        templateUrl: 'assets/bDash.html',
	        controller: 'bDashController',
	        controllerAs: 'bCtrl'
	      },
	      'about@start': {
	        templateUrl: 'assets/about.html',
	        controller: 'about',
	        controllerAs: 'about'
	      }
	    }
	})
	.state('start.projects', {
		url: '/projects',
	    views: {
	    	'bDash': {
	        templateUrl: 'assets/bDash.html',
	        controller: 'bDashController',
	        controllerAs: 'bCtrl'
	      },
	      'projects@start': {
	        templateUrl: 'assets/projects.html',
	        controller: 'projects',
	        controllerAs: 'projects'
	      }
	    }
	})
})

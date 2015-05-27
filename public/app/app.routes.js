angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'app/views/pages/home.html'
		})
		.when('/login', {
			templateUrl: 'app/views/pages/login.html'
		})
		.when('/signup',{
			templateUrl: 'app/views/pages/signup.html'
		})
		.when('/users', {
			templateUrl: 'app/views/pages/users.html',
			controller: "userController",
			controllerAs: "allUsers"
		})
		.when('/stories', {
			templateUrl: 'app/views/pages/stories.html',
			controller: "allStoriesController",
			controllerAs: "story",
			resolve: {
				stories: function(Story){
					return Story.allStories();
				}
			}
		})
		


	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
});
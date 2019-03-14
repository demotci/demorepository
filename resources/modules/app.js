var app=angular.module('myApp', ['ngMaterial','ui.router','ui.bootstrap','smart-table','ngSanitize']);

app.config(function($stateProvider, $urlRouterProvider) 
{

	$urlRouterProvider.otherwise('/first');
 	$stateProvider

 	
 	.state('first', {

 		url : '/first',

 		templateUrl : 'resources/modules/First/first.html'

 		})
 	
 	
 });
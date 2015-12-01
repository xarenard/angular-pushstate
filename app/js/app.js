'use strict'

console.log("ok");
var contactApp = angular.module('contactApp',['ngRoute']);

contactApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  console.log("ok2");
    $routeProvider.
	when('/contacts', {
	    templateUrl:'modules/contacts/partials/contact_list.html',
	    controller: 'ContactListCtrl'
	}).
	when('/contacts/:contactId',{
	    templateUrl:'modules/contacts/partials/contact_details.html',
	    controller: 'ContactDetailsCtrl'
	}).
	otherwise({
	    redirectTo:'/contacts'
	});

} ]);

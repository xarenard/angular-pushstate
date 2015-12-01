var contacts = [
	{id:1,firstName:'Xavier',lastName:'Renard',address: {streetNumber:1,streetName:'mystreet'}}
];


contactApp.controller('ContactListCtrl',['$scope',function($scope){
    $scope.contacts = contacts
    
}]);

contactApp.controller('ContactDetailsCtrl',['$scope','$routeParams','$location', function($scope,$routeParam,$location) {
    var contactId = $routeParam.contactId;
    console.log(contacts[contactId -1]);
    $scope.contact = contacts[contactId - 1];
}]);

/*@author: Sanjul */

var encApp = angular.module('encApp', []);

encApp.controller('HashController', ['$scope', function($scope) {
	$scope.message = 'password';
	$scope.addlDetail = "<nothing>";
	$scope.addlDetailVisible = false;
	$scope.base64Hashed = '<nothing>';
	
	$scope.getHash = function(msg){

		var hashed = CryptoJS.SHA1(msg);
		$scope.base64Hashed = hashed.toString(CryptoJS.enc.Base64);
		$scope.addlDetail= JSON.stringify(hashed, null, 4).trim();
		$scope.hashed = hashed.toString();
		return hashed.toString();
	};
	

	$scope.toggleAddlDetail = function(){
		$scope.addlDetailVisible = !$scope.addlDetailVisible;
	}
	$scope.clearInput = function(){
		$scope.message = "";
	}
}]);

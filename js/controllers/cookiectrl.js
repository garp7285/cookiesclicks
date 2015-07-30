angular.module('mainApp')
	.controller('cookieCtrl', ['$scope', 'cookies', function ($scope, cookies) {
		$scope.cookies = cookies
		$scope.incrementaCookie = function (){

			cookies.cookies= cookies.cookies + 1;
		}

}])
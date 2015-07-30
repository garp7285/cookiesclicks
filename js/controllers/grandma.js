angular.module('mainApp')
	.controller('grandmaCtrl', ['$scope', 'cookies', function ($scope, cookies) {
		$scope.cookies = cookies
		$scope.grandmas = 0
		$scope.speed = 2000
		$scope.cost = 10
		$scope.advice=""



		setInterval(function(){ 
			cookies.cookies = parseInt(cookies.cookies) + 1 * $scope.grandmas;
			console.log(cookies.cookies)
			$scope.$apply();
			
		}, $scope.speed);


		$scope.buyGrandma = function (){

			if (cookies.cookies < $scope.cost){

				$scope.advice = "you can't buy BITCH!"
			}
			else {

				cookies.cookies = cookies.cookies - $scope.cost;
				$scope.grandmas = $scope.grandmas + 1;
				$scope.advice=""
			}


		}

	
}])
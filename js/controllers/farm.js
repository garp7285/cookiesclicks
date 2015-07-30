angular.module('mainApp')
	.controller('farmCtrl', ['$scope', 'cookies', function ($scope, cookies) {
		$scope.cookies = cookies
		$scope.farms = 0
		$scope.speed = 1000
		$scope.cost = 200
		$scope.advice=""



		setInterval(function(){ 
			cookies.cookies = parseInt(cookies.cookies) + 10 * $scope.farms;
			$scope.$apply();
			
		}, $scope.speed);


		$scope.buyFarm = function (){

			if (cookies.cookies < $scope.cost){

				$scope.advice = "you can't buy farms BITCH!"
			}
			else {

				cookies.cookies = cookies.cookies - $scope.cost;
				$scope.farms = $scope.farms + 1;
				$scope.advice=""
				$scope.cost= $scope.cost + $scope.farms * 30;

			}


		}

	
}])
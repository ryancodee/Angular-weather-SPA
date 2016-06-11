//controllers
weatherForecastApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {

	$scope.city = cityService.city;

	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	});

	$scope.submit = function() {
		$location.path('/forecast');
	}
}]);

weatherForecastApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService',  function($scope, $routeParams, cityService, weatherService) {

	$scope.city = cityService.city;

	//set query params as number of days i.e /4
	$scope.days = $routeParams.days || '2';

	//get weather result from service, pass scope variables
	$scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

	// todo: convert to celcius
	$scope.convertToFahrenheit = function(degK) {
		return Math.round(1.8 * (degK - 273) + 32);
	}

	$scope.convertToCelsius = function(degK) {
		return Math.round(degK - 273.15);
	}

	$scope.convertToDate = function(dt) {
		return new Date(dt * 1000);
	}
}]);

// services
weatherForecastApp.service('cityService', function() {
	this.city = 'New York, NY'
});


weatherForecastApp.service('weatherService', ['$resource', function($resource) {
	
	this.GetWeather = function(city, days) {
		//resource (HTTP service)
		var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', 
		{
			callback: "JSON_CALLBACK"
		}, 
		{
			get: { method: "JSONP"}
		});

		return weatherAPI.get({
			q: city,
			cnt: days,
			appid: '99cb746e1ff54d053e10704bd1c4c6bd'
		});		
	};

}]);
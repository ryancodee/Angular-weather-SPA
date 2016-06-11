//directive
weatherForecastApp.directive('weatherReport', function(){
	return {
		templateUrl: 'directives/weatherReport.html',
		restrict: 'E',
		replace: true,
		scope: {
			weatherDay: "=",
			convertToStandard: "&",
			convertToDate: "&",
			dateFormat: "@"
		}
	}
});
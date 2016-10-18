app.controller('authorController', function($scope, $routeParams, $timeout, $route){

var sortBy = $routeParams.sortBy;

$scope.sortedQuotes = [];




function init(sort){
	for(var i = 0; i < $scope.quotes.length; i++){
	 if($scope.quotes[i][sort] === sortBy){
	 		console.log($scope.quotes[i].saying);
	 		$scope.sortedQuotes.push($scope.quotes[i].saying);
	 }
	}

}

init("fullName");
init("type");



$scope.clearSearch = function(){
	$route.updateParams({sortBy: ''});
}









});
app.controller('addQuotesController', function($scope){

$scope.quotesList = [];

/*Get a quote on the "Get quote" button 
	*1: 
*/
	$scope.sayQuote = function(){

		
		// var randomIndex = Math.floor(Math.random()* $scope.quotes.length);



		//createQuote takes a random index, gets a quote from the quotes array, then pushes it to the quotesList
		var createQuote = function(index){
			var randomSliceIndex = index + 1;
			var randomQuote = $scope.quotes.slice(index, randomSliceIndex)[0];
			console.log('random')
			return $scope.quotesList.push(randomQuote);
		}
		

/*Checks to see if the quotesList array is empty if it is
Creates a quote with a random index
If quotesList not empty, creates a var clearToCreate at true
Checks each item in quotesList.saying to see if it matches quotes (if in quotesList, it will)
If the same quotes are found, clearToCreate is false
Run deDupe again
If clearToCreate is true then create the quote and return true
Otherwise, deDupe() runs again
If the length of both arrays is the same, add a new quote. Otherwise, deDupe();*/

var deDupe = function(){
			
			var randomIndex = Math.floor(Math.random()* $scope.quotes.length);
			
			if($scope.quotesList.length === 0)
			{
				createQuote(randomIndex);
			}

			else
			{
				var clearToCreate = true;
				for(var i = 0; i < $scope.quotesList.length; i++){
					if($scope.quotesList[i].saying === $scope.quotes[randomIndex].saying)
					{
						clearToCreate = false;
					}
				}

				if(clearToCreate) 
				{
					createQuote(randomIndex);
					return true;
				}
				else
				{
					deDupe();
				}

			}

}



		if ($scope.quotes.length === $scope.quotesList.length){
			alert("No more quotes! Add one!");
		} else {
			console.log("quotes length: ", $scope.quotes.length);
			console.log("quotesList length: ", $scope.quotesList.length);
			deDupe();
		}

		// var randomIndex = Math.floor(Math.random()* $scope.quotes.length);
		// var randomSliceIndex = randomIndex + 1;
		// var randomQuote = $scope.quotes.slice(randomIndex, randomSliceIndex)[0];
		// $scope.quotesList.push(randomQuote);


	}

//Hiding the form--showing on click
$scope.showForm = false;


$scope.submitQuote = function(){
	// $scope.quoteModel.push($scope.quoteModel.saying).push($scope.quoteModel.firstName).push($scope.quoteModel.lastName);
	console.log($scope.quoteModel);
	$scope.quoteModel.fullName = $scope.quoteModel.firstName;
	$scope.quotes.push($scope.quoteModel);
	console.log($scope.quotes);

}

});
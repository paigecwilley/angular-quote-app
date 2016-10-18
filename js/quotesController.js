app.controller('quotesController', function($scope){

//Adding a quote model
$scope.quoteModel = {};
$scope.quoteModel.saying;
$scope.quoteModel.firstName;
$scope.quoteModel.lastName;
$scope.quoteModel.fullName = "";

	
/* This controller is for the main index.html code (not the view). It contains
 *1: Quotes for the entire app
 *2: Logic for creating the searchable lists--the author list and the genre list
 *3: Logic for getting a random quote

*/


	$scope.authorsList = [];
	$scope.genresList = [];

$scope.quotes = [
		{saying:"All the world's a stage, and all the men and women mearly players.", firstName: "William", lastName:"Shakespeare", fullName: "William Shakespeare", type:"Literary"},
		{saying: "The greatest pleasure in life is doing what people say you cannot do.", firstName: "Walter", lastName: "Bagehot", fullName:"Walter Bagehot", type:"Motivational"},
		{saying: "Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence.", firstName: "Franz", lastName:"Kafka", fullName: "Franz Kafka", type:"Motivational"},
		{saying:"A creative man is motivated by the desire to achieve, not by the desire to beat others.", firstName:"Ayn", lastName:"Rand", fullName:"Ayn Rand", type:"Motivational"},
		{saying:"You can't cross the sea merely by standing and staring at the water.", firstName:"Rabindranath", lastName:"Tagore", fullName: "Rabindranath Tagore", type:"Motivational"},
		{saying:"Don't watch the clock. Do what it does. Keep going.", firstName:"Sam", lastName:"Levenson", fullName: "Sam Levenson", type:"Motivational"},
		{saying:"He is no fool who gives what he cannot keep to gain what he cannot lose.", firstName: "Jim", lastName: "Elliot", fullName: "Jim Elliot", type:"Inspirational"},
		{saying:"The more you like yourself, the less you are like anyone else, which makes you unique", firstName:"Walt", lastName:"Disney", fullName: "Walt Disney", type:"Inspirational"},
		{saying:"In every walk with nature one receives far more than he seeks", firstName:"John", lastName:"Muir", fullName: "John Muir", type:"Inspirational"},
		{saying:"We are here on earth to help others; what on earth the others are here for I don't know", firstName:"W.H.", lastName:"Auden", fullName: "W.H. Auden", type:"Funny"},
		{saying:"People who think they know everything are a great annoyance to those of us who do", firstName:"Isaac", lastName:"Asimov", fullName: "Isaac Asimov", type:"Funny"},
		{saying:"Procrastination is the art of keeping up with yesterday.", firstName:"Don", lastName:"Marquis", fullName: "Don Marquis", type:"Funny"},
		{saying:"The best thing to hold onto in life is each other.", firstName:"Audrey", lastName:"Hepburn", fullName: "Audrey Hepburn", type:"Romantic"},
		{saying:"Poetry is when an emotion has found its thought and the thought has found words.", firstName:"Robert", lastName:"Frost", fullName: "Robert Frost", type:"Poetic"},
		{saying: "If music be the food of love, play on.", firstName:"William", lastName: "Shakespeare", fullName: "William Shakespeare", genre: "Romantic"}
	];




	//Create de-duped author and genre lists for the search

	var searchLists = function(authorFirstName, authorLastName, authorFullName, genre){
		function onlyUnique(value, index, arr, prop){
			for(var i = 0; i < arr.length; i++) {
				if(value[prop] === arr[i][prop]) {
					if(i !== index)
					{
						return false;
					}
					else
					{
						return true;
					}
				}
			}
			// console.log(value.fullName);
			// 	return arr.indexOf(value.fullName) === index;
			// for(var i = 0; i < arr.length; i++){
			// 	// if(value.fullName === arr[index].fullName){
			// 	// 	return i === index;	
			// 	// }
			// 	console.log(value.fullName, " : ", arr[index].fullName);
			// }
		}


		/* Create authorlist and genre list*/
		for(var i = 0; i < $scope.quotes.length; i++){ //Go through the quotes list
			var tempAuthor = {};
			var tempGenre = {};
			tempAuthor.firstName = $scope.quotes[i][authorFirstName]; // Create a temporary Author with all info
			tempAuthor.lastName = $scope.quotes[i][authorLastName];
			tempAuthor.fullName = $scope.quotes[i][authorFullName];
			tempGenre.genre = $scope.quotes[i][genre];

						
			$scope.authorsList.push(tempAuthor); //push temorary author or genre into list
			$scope.genresList.push(tempGenre);
		}


		// $scope.authorsList = $scope.authorsList.filter(onlyUnique);
		$scope.authorsList = $scope.authorsList.filter(function(v, i, a){ // remove duplicate author listings w/ onlyUnique
			return onlyUnique(v, i, a, 'fullName');
		});//This controller houses the current quotes. 

		

		$scope.genresList = $scope.genresList.filter(function(v, i, a){
			return onlyUnique(v, i, a, 'genre')
		})
		console.log($scope.genresList);
	}

searchLists('firstName', 'lastName', 'fullName', 'type');



	






	var getRandomIndex = function(){
		return Math.floor(Math.random()* $scope.quotes.length);
	}









});

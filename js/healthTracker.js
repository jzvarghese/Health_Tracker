
var app = app || {};

// The Application
// ---------------

$(function () {

  app.appID = '&appId=f7ab287a';
  app.appKey = '&appKey=a64652c63332043aa517fe6b7ecf4287';


  // enable both tooltips and popovers throughout the page
  $('[data-toggle="tooltip"]').tooltip();

  app.myFirebaseRef = new Firebase("https://fiery-inferno-1074.firebaseio.com/");

  app.view = new app.SearchView();


  // load the data from the data base
  app.myFirebaseRef.once("value", function(data) {

  	// data.val() is an object that contains the objects that
  	// we stored
  	var food;
  	var model;

  	data.forEach(function(obj) {
  		food = obj.val();

  		// create model with the food data
        model = new app.Food({
          id:       food.id,
          foodID:   food.foodID,
          name:     food.name,
          brand:    food.brand,
          calories: food.calories,
          protein:  food.protein,
          carbs:    food.carbs,
          fiber:    food.fiber,
          vitaminA: food.vitaminA,
          vitaminC: food.vitaminC,
          calcium:  food.calcium,
          iron:     food.iron
        });

        app.foodList.add(model);
  	});

  	console.log('load');
  });


});


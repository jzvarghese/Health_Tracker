// js/models/Food.js

var app = app || {};

// Food Model
// ----------
// The Food Model contains all the nutritional information for a given food item

app.Food = Backbone.Model.extend({


  // Food will have the following attributes

  //  ID - number corresponding to it's ID in the health api
  //  Name - the name of the food item. E.g. Amy's Chewy Candy Bar Creamy
  //  Calories - the number of calories in the food item
  //  Protein - grams of protein in food item
  //  Carbs - grams of carbs
  //  Fiber - grams of fiber
  //  Vitamin A - percent of daily value (dv)
  //  Vitamin C - percent of dv
  //  Calcium - percent of dv
  //  Iron - percent of dv


  // Default attributes ensure that each todo created has `title` and
  // `completed` keys.
  defaults: {
    //title of todo item
    foodID: '',
    userID: '',
    name: '',
    calories: 0,
    protein: 0,
    carbs: 0,
    fiber: 0,
    vitaminA: 0,
    vitaminC: 0,
    calcium: 0,
    iron: 0

  },


  initialize: function(argument) {
  	// body...
  },
  // These getters seem to make things cleaner but I'm not entirely
  // sure if I even need them
  getFoodName: function() {
  	return this.get('name');
  },

  getFoodCalories: function() {
  	return this.get('calories');
  },

  getFoodProtein: function() {
  	return this.get('protein');
  },

  getFoodFiber: function() {
  	return this.get('fiber');
  },

  getFoodVitaminA: function() {
  	return this.get('vitaminA');
  },

  getFoodVitaminC: function() {
  	return this.get('vitaminC');
  },

  getFoodCalcium: function() {
  	return this.get('calcium');
  },

  getFoodIron: function() {
  	return this.get('iron');
  }


});
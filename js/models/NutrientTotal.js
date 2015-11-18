// js/models/Food.js

var app = app || {};

// Food Model
// ----------
// The Food Model contains all the nutritional information for a given food item

app.NutrientTotal = Backbone.Model.extend({


  // NutrientTotal will have the following attributes

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

    userID: '',
    name: '',
    brand: '',
    calorieTotal: 0,
    proteinTotal: 0,
    carbTotal: 0,
    fiberTotal: 0,
    vitaminATotal: 0,
    vitaminCTotal: 0,
    calciumTotal: 0,
    ironTotal: 0,

  },


  initialize: function() {

    // listen for additions to the foodList collection
  	this.listenTo(app.foodList, 'add', this.addNutrients);

    // listen for deletions from the foodList collection
    this.listenTo(app.foodList, 'remove', this.removeNutrients);
  },

  addNutrients: function(model) {

    this.set({
      calorieTotal: this.get('calorieTotal') + model.get('calories'),
      proteinTotal: this.get('proteinTotal') + model.get('protein'),
      carbTotal: this.get('carbTotal') + model.get('carbs'),
      fiberTotal: this.get('fiberTotal') + model.get('fiber'),
      vitaminATotal: this.get('vitaminATotal') + model.get('vitaminA'),
      vitaminCTotal: this.get('vitaminCTotal') + model.get('vitaminC'),
      calciumTotal: this.get('calciumTotal') + model.get('calcium'),
      ironTotal: this.get('ironTotal') + model.get('iron'),

    });
  },

  removeNutrients: function(model) {
    this.set({
      calorieTotal: this.get('calorieTotal') - model.get('calories'),
      proteinTotal: this.get('proteinTotal') - model.get('protein'),
      carbTotal: this.get('carbTotal') - model.get('carbs'),
      fiberTotal: this.get('fiberTotal') - model.get('fiber'),
      vitaminATotal: this.get('vitaminATotal') - model.get('vitaminA'),
      vitaminCTotal: this.get('vitaminCTotal') - model.get('vitaminC'),
      calciumTotal: this.get('calciumTotal') - model.get('calcium'),
      ironTotal: this.get('ironTotal') - model.get('iron'),

    });
  }


});

app.nutrientTotal = new NutrientTotal();

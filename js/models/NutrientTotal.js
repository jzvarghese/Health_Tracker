// js/models/Food.js

var app = app || {};

// Food Model
// ----------
// The Food Model contains all the nutritional information for a given food item

app.NutrientTotal = Backbone.Model.extend({


  // NutrientTotal will have the following attributes

  //  calorieTotal - sum of all the calories for the foods in foodList
  //  proteinTotal - sum of all the protein for the foods in foodList
  //  carbTotal - sum of all the carbs for the foods in foodList
  //  Fiber - sum of all the fiber for the foods in foodList
  //  Vitamin A - sum of all the vitamin a for the foods in foodList
  //  Vitamin C - sum of all the vitamin c for the foods in foodList
  //  Calcium - sum of all the calcium for the foods in foodList
  //  Iron - sum of all the iron for the foods in foodList


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

    // listen for deletions from the foodList collection
    this.listenTo(app.foodList, 'change:quantity', this.addNutrients);
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

    var scalar = model.get('quantity');
    this.set({
      calorieTotal: this.get('calorieTotal') - scalar * model.get('calories'),
      proteinTotal: this.get('proteinTotal') - scalar * model.get('protein'),
      carbTotal: this.get('carbTotal') - scalar * model.get('carbs'),
      fiberTotal: this.get('fiberTotal') - scalar * model.get('fiber'),
      vitaminATotal: this.get('vitaminATotal') - scalar * model.get('vitaminA'),
      vitaminCTotal: this.get('vitaminCTotal') - scalar * model.get('vitaminC'),
      calciumTotal: this.get('calciumTotal') - scalar * model.get('calcium'),
      ironTotal: this.get('ironTotal') - scalar * model.get('iron'),

    });

    // set the quantity back to one in case we add it back later
    // and supress the change event so it's not added to the
    // nutrientTotal model
    model.set({'quantity': 1}, {silent: true});
  },


});

app.nutrientTotal = new app.NutrientTotal();

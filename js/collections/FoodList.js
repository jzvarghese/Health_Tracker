// js/collections/FoodList.js

var app = app || {};

// FoodList Collection
// ---------------
// is a collection of Foods that have been
// consumed at some point

app.FoodList = Backbone.Collection.extend({

  // Reference to this collection's model.
  model: app.Food,

});

// create an instance of the Days list
app.foodList = new app.FoodList();
// js/collections/Days.js

var app = app || {};

// Days Collection
// ---------------
// is unsurprisingly a collection of Day models

app.Days = Backbone.Collection.extend({

  // Reference to this collection's model.
  model: app.Day,


});

// create an instance of the Days list
app.dayList = new app.Days();

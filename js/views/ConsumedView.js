var app = app || {};

// ConsumedView
// --------------

// view associated with the search results
app.ConsumedView = Backbone.View.extend({

  //... is a list tag.
  el: '#foods-consumed',

  //Cache the template function for a single item.
  template: Handlebars.compile( $("#consumed-item-template").html() ),

  // The DOM events specific to an item.
  events: {
    'click #delete-food': 'deleteFood',
  },

  initialize: function() {

    // listen for the add event for the foodList collection
    this.listenTo(app.foodList, 'add', this.render);

    // re-render the element when the model has changed
    this.listenTo(app.foodList, 'change:quantity', this.update);


  },



  // render the Food model that was just added to the searchResults collection
  render: function(model) {
    console.log('rendering food...');

    // pass the model to the template
    var temp = this.template(model.toJSON());

    // append it to the page
    this.$el.append(temp);

  },

  // the actual model gets passed in, awesome
  update: function(model) {
    console.log('something');
  },

  deleteFood: function (event) {
    // body...
  },
  // reset the list of search results so we can display the new results
  reset: function() {
    this.$el.html('');
  }

});

app.consumedView = new app.ConsumedView();
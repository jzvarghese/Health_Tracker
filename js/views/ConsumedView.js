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


  },

  initialize: function() {

    // listen for the add event for the foodList collection
    this.listenTo(app.foodList, 'add', this.render);

  },

  // render the Food model that was just added to the searchResults collection
  render: function() {
    console.log('rendering food...');

    // get the newest model
    var latestModel = app.foodList.last();

    // pass it to the template
    var temp = this.template(latestModel.toJSON());

    // append it to the page
    this.$el.append(temp);

  },

  // reset the list of search results so we can display the new results
  reset: function() {
    this.$el.html('');
  }

});

app.consumedView = new app.ConsumedView();
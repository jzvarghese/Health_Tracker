var app = app || {};

// ResultsView
// --------------

// view associated with the search results
app.ResultsView = Backbone.View.extend({

  //... is a list tag.
  el: '#search-results',

  //Cache the template function for a single item.
  template: Handlebars.compile( $("#result-item-template").html() ),

  // The DOM events specific to an item.
  events: {

    // whenever we click on the plus icon, add that model to the foodlist
    'click #add-food': 'addFood',

  },


  // The TodoView listens for changes to its model, re-rendering. Since there's
  // a one-to-one correspondence between a **Todo** and a **TodoView** in this
  // app, we set a direct reference on the model for convenience.
  initialize: function() {

    // listen for the add event for the searchResults collection
    this.listenTo(app.searchResults, 'add', this.render);

    // listen for the 'reset' event when the collection is emptied
    this.listenTo(app.searchResults, 'reset', this.reset);
  },

  // render the Food model that was just added to the searchResults collection
  render: function() {
    console.log('rendering...');

    // get the newest model
    var latestModel = app.searchResults.last();

    // pass it to the template
    var temp = this.template(latestModel.toJSON());

    // append it to the page
    this.$el.append(temp);

  },

  // reset the list of search results so we can display the new results
  reset: function() {
    this.$el.html('');
  },

  // add food to the foodList
  addFood: function(event) {
    console.log('adding...');

    // get the id from the DOM element
    var element = $(event.currentTarget);
    var id = element.data('id');

    // first check and see whether the food is in the foodList
    var model = app.foodList.get(id);
    var quan;

    if(!model) {
      // add the model to the list of foods we've eaten
      app.foodList.add(app.searchResults.get(id));

    } else {
      // increase the quantity of the food that's already in the foodList

      quan = model.get('quantity');
      quan++;

      model.set({quantity: quan});

      console.log('model quantity increased');
    }

  }

});

app.resultsView = new app.ResultsView();
var app = app || {};

// ResultsView
// --------------

// view associated with the search results
app.ResultsView = Backbone.View.extend({

  //... is a list tag.
  el: '#searchResults',

  //Cache the template function for a single item.
  template: Handlebars.compile( $("#result-item-template").html() ),

  // The DOM events specific to an item.
  events: {
    // whenever a new model is added to the searchResults collection,
    // we should render the model

  },


  // The TodoView listens for changes to its model, re-rendering. Since there's
  // a one-to-one correspondence between a **Todo** and a **TodoView** in this
  // app, we set a direct reference on the model for convenience.
  initialize: function() {

    // listen for the add event for the searchResults collection
    this.listenTo(app.searchResults, 'add', this.render);
  },

  // render the Food model that was just added to the searchResults collection
  render: function() {
    console.log('rendering...');

    // get the newest model
    var latestModel = app.searchResults.last();

    var temp = this.template(latestModel.toJSON());

    this.$el.append(temp);

  }

});

app.resultsView = new app.ResultsView();
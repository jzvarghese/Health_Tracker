var app = app || {};

// ResultsView
// --------------

// view associated with the search results
app.ResultsView = Backbone.View.extend({

  el: '#search-results',

  //Cache the template function for a single item.
  template: Handlebars.compile( $("#result-item-template").html() ),

  events: {
    // whenever we click on the plus icon, add that model to the foodlist
    'click #add-food': 'addFood',
  },


  initialize: function() {

    // listen for the add event for the searchResults collection
    this.listenTo(app.searchResults, 'add', this.render);

    // listen for the 'reset' event when the collection is emptied
    this.listenTo(app.searchResults, 'reset', this.reset);
  },

  // render the Food model that was just added to the searchResults collection
  render: function(model) {

    // pass it to the template
    var temp = this.template(model.toJSON());

    // append it to the page
    this.$el.append(temp);

  },

  // reset the list of search results so we can display the new results
  reset: function() {
    this.$el.html('');
  },

  // add food to the foodList and the database
  addFood: function(event) {

    // get the id from the DOM element
    var element = $(event.currentTarget);
    var id = element.data('id');

    // first check and see whether the food is in the foodList
    var model = app.foodList.get(id);
    var quan;

    if(!model) {
      // add the model to the list of foods we've eaten
      model = app.searchResults.get(id);
      app.foodList.add(model);

      //add the food to the database
      app.myFirebaseRef.child(id).set({

        id: model.get('id'),
        foodID: model.get('foodID'),
        name: model.get('name'),
        brand: model.get('brand'),
        calories: model.get('calories'),
        protein: model.get('protein'),
        carbs: model.get('carbs'),
        fiber: model.get('fiber'),
        vitaminA: model.get('vitaminA'),
        vitaminC: model.get('vitaminC'),
        calcium: model.get('calcium'),
        iron: model.get('iron'),
        quantity: model.get('quantity')

      });

    } else {

      // increase the quantity of the food that's already in the foodList
      quan = model.get('quantity');
      quan++;

      model.set({quantity: quan});

      var dbItem = new Firebase('https://fiery-inferno-1074.firebaseio.com/' + id);
      dbItem.update({"quantity": quan});

    }

  }

});

app.resultsView = new app.ResultsView();
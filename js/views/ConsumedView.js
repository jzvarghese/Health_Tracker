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

    // get the html element that corresponds to this model, and just change the
    // quantity
    var id = model.attributes.id;
    var quantity = model.attributes.quantity;

    // select the paragraph that contains the quantity text
    var p = $('p[data-id="' + id + '"]');

    // update the html with the new quantity
    p.html('Quantity: ' + quantity);

  },

  // delete a food from the foodList
  deleteFood: function (event) {

    // get the id from the DOM element
    var element = $(event.currentTarget);
    var id = element.data('id');

    // now that we know what model is going to be removed, we can
    // remove it from foodList and the DOM

    // get the list item that corresponds to the food model and remove
    // it from the DOM completely.
    var li = $('li[data-id="' + id + '"]');
    li.remove();

    //remove item from database
    var dbItem = new Firebase('https://fiery-inferno-1074.firebaseio.com/' + id);
    dbItem.remove();

    //remove the food item from the collection
    app.foodList.remove(id);
  },

  // reset the list of search results so we can display the new results
  reset: function() {
    this.$el.html('');
  }

});

app.consumedView = new app.ConsumedView();
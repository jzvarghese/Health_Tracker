var app = app || {};

// ConsumedView
// --------------

// view associated with the consumed foods
app.ConsumedView = Backbone.View.extend({

  el: '#foods-consumed',

  //Cache the template function for a single item.
  template: Handlebars.compile( $("#consumed-item-template").html() ),

  events: {
    'click #delete-food': 'deleteFood',
  },

  initialize: function() {

    var self = this;

    // listen for the add event for the foodList collection
    this.listenTo(app.foodList, 'add', this.render);

    // re-render the element when the quantity has changed
    this.listenTo(app.foodList, 'change:quantity', this.update);

    // create reference to the database
    app.myFirebaseRef = new Firebase("https://fiery-inferno-1074.firebaseio.com/");

    // load loading icon
    this.$el.html('<h1 class="text-center m-y-lg"><i class="fa fa-spinner fa-pulse">' +
      '</i></h1>');

    // load the data from the database
    app.myFirebaseRef.once("value", function(data) {

      // remove the loading icon
      self.reset();

      var food;
      var model;

      data.forEach(function(obj) {
        food = obj.val();

        // create model with the food data
          model = new app.Food({
            id:       food.id,
            foodID:   food.foodID,
            name:     food.name,
            brand:    food.brand,
            calories: food.calories,
            protein:  food.protein,
            carbs:    food.carbs,
            fiber:    food.fiber,
            vitaminA: food.vitaminA,
            vitaminC: food.vitaminC,
            calcium:  food.calcium,
            iron:     food.iron
          });

          // add the model to the collection
          app.foodList.add(model);
      });

    });

  },

  // render the Food model that was just added to the searchResults collection
  render: function(model) {

    // pass the model to the template
    var temp = this.template(model.toJSON());

    // append it to the page
    this.$el.append(temp);

    // enable the popover
    $('[data-toggle="popover"]').popover();

  },

  // update the view because the quantity increased
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

  // delete a food from the foodList, DOM, and database
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
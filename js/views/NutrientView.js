var app = app || {};

// NutrientView
// --------------

// view associated with the nutrient totals
app.NutrientView = Backbone.View.extend({

  //... is a list tag.
  el: '#nutrient-total',

  //Cache the template function for a single item.
  template: Handlebars.compile( $("#nutrient-total-template").html() ),

  // The DOM events specific to an item.
  events: {

  },

  initialize: function() {

    // listen for when the nutrientModel changes
    this.listenTo(app.nutrientTotal, 'change', this.render);

    this.render(app.nutrientTotal);

  },


  // render the Food model that was just added to the searchResults collection
  render: function(model) {
    console.log('rendering totals...');

    // pass the model to the template
    var temp = this.template(model.toJSON());

    // append it to the page
    this.$el.html(temp);

  },

  // reset the list of search results so we can display the new results
  reset: function() {
    this.$el.html('');
  }

});

app.nutrientView = new app.NutrientView();
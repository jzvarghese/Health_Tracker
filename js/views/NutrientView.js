var app = app || {};

// NutrientView
// --------------

// view associated with the nutrient totals
app.NutrientView = Backbone.View.extend({

  el: '#nutrient-total',

  //Cache the template function for a single item.
  template: Handlebars.compile( $("#nutrient-total-template").html() ),

  initialize: function() {

    // listen for when the nutrientModel changes
    this.listenTo(app.nutrientTotal, 'change', this.render);

    this.render(app.nutrientTotal);

  },

  // render the Food model that was just added to the searchResults collection
  render: function(model) {

    // pass the model to the template
    var temp = this.template(model.toJSON());

    // append it to the page
    this.$el.html(temp);

  }

});

app.nutrientView = new app.NutrientView();
var app = app || {};

// SearchView
// --------------

// view associated with text input element which is the search bar
app.SearchView = Backbone.View.extend({

  el: '#search',

  events: {
    'change': 'search'
  },

  // base URL for Nutrionix v1.1
  searchEndPoint: 'https://api.nutritionix.com/v1_1/search/',

  // search fields, we are returning up to 10 results, have no real calorie limit
  // and ...
  searchFields: '?results=0%3A10&cal_min=0&cal_max=50000&fields=item_name%2Cb' +
    'rand_name%2Citem_id%2Cbrand_id%2Cnf_calories%2Cnf_protein%2Cnf_total_car' +
    'bohydrate%2Cnf_dietary_fiber%2Cnf_vitamin_a_dv%2Cnf_vitamin_c_dv%2Cnf_cal'+
    'cium_dv%2Cnf_iron_dv',

  initialize: function() {

  },

  // search the health databased based on the users query
  search: function() {

    // load loading icon
    $('#search-results').html('<h1 class="text-center m-y-lg"><i class="fa ' +
      'fa-spinner fa-pulse"></i></h1>');

    var self = this;

    // get the value and make sure it's nonzero
    var query = this.$el.val().trim();

    if(query.length === 0) {
      console.log('no search');
      return 0;
    }

    var queryURL = this.searchEndPoint + encodeURIComponent(query) +
      this.searchFields + app.appID + app.appKey;

    $.ajax({
      url: queryURL,
      dataType: 'json'
    })
    .done(function(data) {

      // the search was a success, so remove the loading icon
      $('#search-results').html('');

      // we have new search results, so get rid of the ones
      // we currently have

      // empty the current collection
      app.searchResults.reset(null);

      var results = data.hits;
      var food = null;
      var model = null;

      // iterate over the search results
      for(var i = 0; i < results.length; i++) {

        // the fields object contains all the data we want, such as
        // name, number of calories, etc
        food = results[i].fields;

        // create model with the food data
        model = new app.Food({
          // this user ID will be obtained when the
          // app loads
          //userID: app.userID,

          id:       food.item_id,
          foodID:   food.item_id,
          name:     food.item_name,
          brand:    food.brand_name,
          calories: Math.round(food.nf_calories),
          protein:  Math.round(food.nf_protein),
          carbs:    Math.round(food.nf_total_carbohydrate),
          fiber:    Math.round(food.nf_dietary_fiber),
          vitaminA: Math.round(food.nf_vitamin_a_dv),
          vitaminC: Math.round(food.nf_vitamin_c_dv),
          calcium:  Math.round(food.nf_calcium_dv),
          iron:     Math.round(food.nf_iron_dv)
        });

        // add the model to the searchResults collection
        app.searchResults.add(model);

      }

      $('[data-toggle="popover"]').popover();

    })
    .fail(function() {
      console.log('error');
      $('#search-results').html('<p class="text-blue">Failed to load the' +
        ' search results. Please try again.</p>');
    });

  }

});
var app = app || {};

// SearchView
// --------------

// view associated with text input element which is the search bar
app.SearchView = Backbone.View.extend({

  //... is a list tag.
  el: '#search',

  // Cache the template function for a single item.
  //template: _.template( $('#item-template').html() ),

  // The DOM events specific to an item.
  events: {
    'change': 'autoComplete'
  },

  // base URL for Nutrionix v1.1
  searchEndPoint: 'https://api.nutritionix.com/v1_1/search/',
  searchFields: '?results=0%3A10&cal_min=0&cal_max=50000&fields=item_name%2Cb' +
    'rand_name%2Citem_id%2Cbrand_id%2Cnf_calories%2Cnf_protein%2Cnf_total_car' +
    'bohydrate%2Cnf_dietary_fiber%2Cnf_vitamin_a_dv%2Cnf_vitamin_c_dv%2Cnf_cal'+
    'cium_dv%2Cnf_iron_dv',



  // The TodoView listens for changes to its model, re-rendering. Since there's
  // a one-to-one correspondence between a **Todo** and a **TodoView** in this
  // app, we set a direct reference on the model for convenience.
  initialize: function() {

  },

  // Whenever the user types in a new letter to the search input,
  // this function will send off a GET request to the Nutrionix v2 beta
  // API for list of possible search terms
  autoComplete: function() {
    var self = this;
    //console.log('changed');
    //console.log(this.$el.val());

    // get the value and make sure it's nonzero
    var query = this.$el.val().trim();

    if(query.length === 0) {
      console.log('no search');
      return 0;
    }
    // note .trim() removes the whitespace at the beginning and end
    // of the string
    var queryURL = this.searchEndPoint + encodeURIComponent(query) +
      this.searchFields + app.appID + app.appKey;

    // get the auto complete terms
    $.ajax({
      url: queryURL,
      dataType: 'json'
    })
    .done(function(data) {
      // populate the auto complete list with the data
      //data.forEach(self.renderGuesses);
      console.log('success');
    })
    .fail(function() {
      console.log(error);
    });

  },

  renderGuesses: function (el, index, array) {
    console.log(el.text);
  },

  // Re-render the titles of the todo item.
  render: function() {

  }

});
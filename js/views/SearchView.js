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
    'input': 'autoComplete'
  },

  // base URL for Nutrionix v2 beta
  baseURL: 'https://apibeta.nutritionix.com',

  // auto-complete end point
  autoCompleteEndPoint: '/v2/autocomplete?q=',



  // The TodoView listens for changes to its model, re-rendering. Since there's
  // a one-to-one correspondence between a **Todo** and a **TodoView** in this
  // app, we set a direct reference on the model for convenience.
  initialize: function() {

  },

  // Whenever the user types in a new letter to the search input,
  // this function will send off a GET request to the Nutrionix v2 beta
  // API for list of possible search terms
  autoComplete: function() {
    console.log('changed');
    console.log(this.$el.val());

    // note .trim() removes the whitespace at the beginning and end
    // of the string
    var autoCompleteQuery = baseURL + autoCompleteEndPoint +
      encodeURIComponent(this.$el.val().trim()) + app.appID + app.appKey;

    // get the auto complete terms
    $.ajax({


    })
    .done(function() {
        alert( "success" );
    })
    .fail(function() {
        alert( "error" );
    });

  },

  // Re-render the titles of the todo item.
  render: function() {

  }

});
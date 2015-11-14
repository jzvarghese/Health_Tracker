
var app = app || {};

// The Application
// ---------------

$(function () {

  // enable both tooltips and popovers throughout the page
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  app.view = new app.SearchView();

});


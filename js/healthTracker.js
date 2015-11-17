
var app = app || {};

// The Application
// ---------------

$(function () {

  app.appID = '&appId=f7ab287a';
  app.appKey = '&appKey=a64652c63332043aa517fe6b7ecf4287';


  // enable both tooltips and popovers throughout the page
  $('[data-toggle="tooltip"]').tooltip();


  app.view = new app.SearchView();

});


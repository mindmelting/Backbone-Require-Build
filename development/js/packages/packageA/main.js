define(function(require){

  "use strict";

  var $ = require('jquery'),
      LibraryCollection = require('packageA/collections/libraryCollection'),
      LibraryView = require('packageA/views/libraryView');

  var libView = new LibraryView({el:$('.installed-libraries')});

  var initialize = function(){
    LibraryCollection.fetch();
  };

  return{
    initialize:initialize
  };

});
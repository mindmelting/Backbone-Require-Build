define(function(require){

  "use strict";
  var $ = require('jquery'),
      Backbone = require('backbone'),
      LibraryModel = require('packageA/models/libraryModel');

  var LibraryCollection = Backbone.Collection.extend({

    url: 'js/sample.json',
    model: LibraryModel,
    initialize : function(){

    },
    parse : function(data){
      return data.installedPackages;
    }

  });

  return new LibraryCollection();

});
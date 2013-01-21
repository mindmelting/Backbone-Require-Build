define(function (require) {

  "use strict";

  var $ = require('jquery'),
      Backbone = require('backbone'),
      _ = require('underscore'),
      LibraryCollection = require('packageA/collections/libraryCollection'),
      LibraryTemplate = require('text!packageA/templates/libraryTemplate.html'),
      Locale = require('i18n!packageA/nls/locale');

  var LibraryView = Backbone.View.extend({

    initialize:function (options) {
      LibraryCollection.on('reset', this.render, this);
      LibraryCollection.on('change', this.render, this);
      this.template = _.template(LibraryTemplate);
    },
    events:{

    },
    render:function () {
      var compiledHtml = this.template({
          locale:Locale,
          collection:LibraryCollection.toJSON()
      });

      this.$el.html(compiledHtml);
    }

  });

  return LibraryView;

});
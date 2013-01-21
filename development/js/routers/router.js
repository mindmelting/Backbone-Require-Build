define(function(require){

    "use strict";
    
    var $ = require('jquery'),
        Backbone = require('backbone'),
        PackageA = require('packageA');

    var Router = Backbone.Router.extend({

        initialize: function(){
        
            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();

        },

        // All of your Backbone Routes (add more)
        routes: {

            // When there is no hash bang on the url, the home method is called
            "": "home"

        },

        home: function() {
            PackageA.initialize();
        }
    });

    // Returns the Router class
    return Router;

});
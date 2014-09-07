define([
    'marionette',
    'app',
    'pages/home/views/HomeView'
], function(Marionette, App, HomeView) {
    'use strict';

    return Marionette.Controller.extend({

        showHome: function() {
           App.content.show(new HomeView()); 
        }

    });
});
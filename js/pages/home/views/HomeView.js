define([
    'marionette',
    'hbs!../templates/home'
], function(Marionette, Template) {
    'use strict';

    return Marionette.ItemView.extend({

        template: Template

    });
});
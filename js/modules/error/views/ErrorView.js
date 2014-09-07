define([
    'marionette',
    'hbs!../templates/error'
], function(Marionette, Template) {
    'use strict';

    return Marionette.ItemView.extend({

        template: Template

    });
});
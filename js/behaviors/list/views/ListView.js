define([
    'marionette',
    'jquery',
    'hbs!../templates/list'
], function(Marionette, $, Template) {
    'use strict';

    return Marionette.ItemView.extend({

        tagName: 'li',

        className: 'checkbox text-left',

        template: Template,

        ui: {
            'checkbox': 'input[type="checkbox"]',
            'listAdd': '[data-action="listAdd"]'
        },

        events: {
            'change @ui.checkbox': 'onCheckboxChange',
            'click @ui.listAdd': 'onNameClicked'
        },

        modelEvents: {
            'change:memberCount': 'render'
        },

        onCheckboxChange: function(e) {
            this.model.set('checked', $(e.currentTarget).is(':checked'));
            this.model.save();
        },

        onNameClicked: function() {
            this.model.save();
        }
    });
});
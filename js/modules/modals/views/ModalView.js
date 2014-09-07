define([
    'marionette',
    'backbone',
    'hbs!../templates/modal',
    'bootstrap'
], function(Marionette, Backbone, Template) {
    'use strict';

    return Marionette.LayoutView.extend({

        template: Template,

        regions: {
            content: '.modal-body'
        },

        events: {
            'hidden.bs.modal .modal': 'close'
        },

        initialize: function(options) {
            this.model = new Backbone.Model(options);
        },

        onRender: function() {
            var ViewClass = this.model.get('view'),
                params = this.model.get('viewParams') || {},
                model = this.model.get('model'),
                paramsModel,
                view;

            if (ViewClass) {
                paramsModel = model || new Backbone.Model(params);
                view = new ViewClass({
                    model: paramsModel
                });
                this.content.show(view);
                this.listenTo(view, 'close', this.closeModal);
                this.openModal();
            }
        },

        openModal: function() {
            this.$('.modal').modal();  
        },

        closeModal: function() {
            this.$('.modal').modal('hide');
        }

    });
    
});
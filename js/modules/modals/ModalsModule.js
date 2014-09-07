define([
    'marionette',
    'jquery',
    './views/ModalView'
], function(Marionette, $, ModalView) {
    'use strict';

    return Marionette.Module.extend({

        startWithParent: false,

        initialize: function(Module, app) {
            this.app = app;
        },

        onStart: function() {
            this.app.vent.on('modal:show', this.showModal, this);
        },

        showModal: function(options) {
            var modalView = new ModalView(options);
            $(this.app.modalWrapper.el).append(modalView.render().el);
        }

    });
});
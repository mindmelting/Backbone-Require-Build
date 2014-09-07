define([
    'marionette',
    'underscore',
    'jquery',
    'app',
    './views/ContactView'
], function(Marionette, _, $, App, ContactView) {
    'use strict';

    return Marionette.Behavior.extend({

        events: {
            'click @ui.openContact': 'checkAuthentication'
        },

        checkAuthentication: function(e) {
            e.preventDefault();

            App.request('authorise:twitter').done(_.bind(function() {
                this.toggleOpenContact(e);
            }, this));
        },

        toggleOpenContact: function() {

            if (!this.childView) {
                this.openContact();
            } else {
                this.closeContact();
            }

        },

        openContact: function() {
            var contactsView = new ContactView({
                twitterId: this.view.model.get('twitterId'),
                twitterName: this.view.model.get('twitter')
            });
            this.view.ui.openContact.after(contactsView.render().el);
            this.childView = contactsView;

            _.defer(_.bind(function() {
                $('body').on('click', {
                    context: this
                }, this._checkGlobalClick);
            }, this));
        },

        closeContact: function() {
            $('body').off('click', this._checkGlobalClick);
            this.childView.remove();
            delete this.childView;
        },

        _checkGlobalClick: function(e) {
            if (!$(e.target).closest(e.data.context.childView.el).length){
                e.data.context.closeContact();
            }
        },

    });
});
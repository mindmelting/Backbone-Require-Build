define([
    'marionette',
    'backbone',
    'underscore',
    'app',
    'AppDomainModel',
    '../models/ContactModel',
    'hbs!../templates/contactView'
], function(Marionette, Backbone, _, app, AppDomainModel, ContactModel, Template) {
    'use strict';

    return Marionette.Layout.extend({

        className: 'open',

        template: Template,

        model: new ContactModel(),

        regions: {
            modal: '.modal-container'
        },

        modelEvents: {
            'sync': 'render',
            'change:follow': 'render'
        },

        events: {
            'click [data-action="follow"]': 'onFollowClick',
            'click [data-action="displayModal"]': 'onDisplayTweetModal',
            'click [data-action="linkedin"]': 'onOpenLinkedIn'
        },

        initialize: function(options) {
            this.twitterId = options.twitterId;
            this.twitterName = options.twitterName;
            
            this.model.fetch({
                data: {
                    screenName: this.twitterName
                },
                context: this
            }).done(function() {
                this.showFollowAction();
            });
        },

        showFollowAction: function() {
            this.$('li.hidden').removeClass('hidden');  
        },

        onFollowClick: function(e) {
            e.preventDefault();

            this.model.save({
                follow: !this.model.get('follow')
            }, {
                wait: true
            }).done(_.bind(function() {
                this.showFollowAction();
            }, this));
        },

        onDisplayTweetModal: function(e) {
            e.preventDefault();

            var name = AppDomainModel.get('userModel').get('session').ownedCommunity.displayName;

            app.vent.trigger('tweet', {
                title: 'Tweet @' + this.twitterName + ' from the @' + name + ' Twitter Account',
                defaultText: 'Hello @{twitterName} !'.supplant({
                    twitterName: this.twitterName
                })
            });
        },

        onOpenLinkedIn: function() {
            app.vent.trigger('track', 'SEARCH_LINKEDIN', {
                personviewed: this.model.get('screenName'),
                page: Backbone.history.fragment
            });
        }

    });
    
});
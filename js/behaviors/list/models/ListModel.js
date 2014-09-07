define([
    'backbone',
    'jquery',
    'underscore',
    'app'
], function(Backbone, $, _, App) {
    'use strict';

    return Backbone.Model.extend({

        defaults: {
            checked: false,
            memberCount: 0
        },

        sync: function(method, model) {
            switch (method) {
                case 'update':
                    var data,
                        url = this.url();

                    if (this.collection.ids.length >= 1) {
                        data = {
                            checked: model.get('checked'),
                            twitterIds: JSON.stringify(this.collection.ids)
                        };
                    } else {
                        url = url + '/search';
                        data = {
                            checked: true,
                            query: this.collection.searchModel.getSearchQuery(),
                            sortBy: this.collection.searchModel.getSortQuery(),
                            offset: 0,
                            limit: this.collection.searchModel.getMaxNumberToAddToList()
                        };
                    }
                    return $.ajax(url, {
                        type: 'PUT',
                        data: data
                    }).done(_.bind(function(result) {
                        this.set(result);
                        this.track(this.getTrackingEventName(), this.getTrackingData());
                    }, this));

                case 'create':
                    return $.ajax(this.url(), {
                        type: 'POST',
                        data: {
                            name: model.get('name')
                        }
                    }).done(_.bind(function(result) {
                        this.set(result);
                        this.track('CREATE_NEW_LIST', this.getTrackingData());
                    }, this));
                default:
                    return Backbone.sync.apply(this, arguments);
            }
        },

        getTrackingEventName: function() {
            var eventName,
                added = this.get('checked'),
                multiple = this.collection.ids.length !== 1;

            if (added && multiple) {
                eventName = 'ADD_PEOPLE_TO_LIST';
            } else if (added && !multiple) {
                eventName = 'ADD_PERSON_TO_LIST';
            } else if (!added && multiple) {
                eventName = 'REMOVE_PEOPLE_FROM_LIST';
            } else if (!added && !multiple) {
                eventName = 'REMOVE_PERSON_FROM_LIST';
            }

            return eventName;
        },

        getTrackingData: function() {
            var data = {};

            data.list = this.get('name');
            if (this.collection.ids.length === 1) {
                data.person = "@" + this.collection.twitterModel.get('twitter');
            }

            return data;
        },

        track: function(eventName, data) {
            App.vent.trigger('track', eventName, data);
        }

    });
});
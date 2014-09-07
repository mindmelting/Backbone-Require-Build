define([
    'backbone',
    'underscore',
    'AppDomainModel',
    'constants',
    '../models/ListModel'
], function(Backbone, _, AppDomainModel, CONSTANTS, ListModel) {
    'use strict';

    return Backbone.Collection.extend({

        url: CONSTANTS.URL.LIST,

        model: ListModel,

        initialize: function(models, options) {
            this.ids = options.ids;
            this.searchModel = options.searchModel;
            this.twitterModel = options.twitterModel;

            if (_.isArray(this.ids) && this.ids.length > 1) {
                this.fetch();
            } else {
               this.fetch({
                    data: {
                        twitterId: _.isArray(this.ids) ? this.ids[0] : this.ids
                    }
                }); 
            }
        },

        canAddNewList: function() {
            var userModel = AppDomainModel.getUserModel(),
                tierConfig = userModel.get('tierConfig');

            return this.length < tierConfig.numberOfLists;
        }

    });
});
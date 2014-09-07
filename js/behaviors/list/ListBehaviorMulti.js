define([
    'underscore',
    './ListBehaviorCore'
], function(_, ListBehaviorCore) {
    'use strict';

    return ListBehaviorCore.extend({

        events: {
            'click @ui.openLists': 'toggleOpenLists'
        },

        _getIds: function() {
            return this.view.model.getTwitterIds();
        },

        _getData: function() {
            var data = {
                ids: this._getIds()
            };

            if (this._getIds().length === 0) {
                _.extend(data, {
                    searchModel: this.view.model
                });
            } else if (this._getIds().length === 1){
                _.extend(data, {
                    twitterModel: this.view.model
                });
            }

            return data;
        }

    });
});
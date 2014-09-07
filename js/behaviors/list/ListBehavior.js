define([
    './ListBehaviorCore'
], function(ListBehaviorCore) {
    'use strict';

    return ListBehaviorCore.extend({

        events: {
            'click @ui.openLists': 'toggleOpenLists'
        },

        _getData: function() {
            return {
                ids: [this.view.model.id],
                twitterModel: this.view.model
            };
        }

    });
});
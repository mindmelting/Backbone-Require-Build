define([
    'backbone',
    'jquery',
    'constants'
], function(Backbone, $, CONSTANTS) {
    'use strict';

    return Backbone.Model.extend({

        idAttribute: 'screenName',

        url: CONSTANTS.URL.CONTACT

    });
});
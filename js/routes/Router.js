define([
    'marionette'
], function(Marionette) {
    'use strict';

    return Marionette.AppRouter.extend({
        appRoutes: {
            "*path": "showHome"
        }
    });
});
define([
    'marionette',
    'underscore',
    './views/ErrorView',
    'nls!./nls/errors'
], function(Marionette, _, ErrorView, nls) {
    'use strict';

    return Marionette.Module.extend({

        startWithParent: true,

        initialize: function(Module, app) {
            this.app = app;
        },

        onStart: function() {
            this.app.vent.on('error:show', this.displayError, this);
        },

        onStop: function() {
            this.app.vent.off('error:show', this.displayError);  
        },

        displayError: function(options) {
            options = options || {};
            _.extend(options, {
                errorMessage: this.getErrorMessage(options.errorCode),
                showCode: this.showCode(options.errorCode)
            });

            this.app.vent.trigger('modal:show', {
                title: 'Error',
                view: ErrorView,
                viewParams: options
            });
        },

        getErrorMessage: function(errorCode) {
            return (errorCode && nls[errorCode]) || nls.DEFAULT;
        },

        showCode: function(errorCode) {
            return !!!nls[errorCode];
        }

    });
}); 
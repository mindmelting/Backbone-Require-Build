require.config({

    deps: ['main'],

    shim: {
        'bootstrap': {
            deps: ['jquery']
        }
    },

    paths: {
        jquery: 'libs/jquery/dist/jquery',
        backbone: 'libs/backbone/backbone',
        underscore: 'libs/underscore/underscore',
        marionette: 'libs/marionette/lib/backbone.marionette',
        nls: 'libs/requirejs-i18n/i18n',
        hbs: 'libs/require-handlebars-plugin/hbs',
        bootstrap: 'libs/bootstrap-sass/assets/javascripts/bootstrap',
        AppDomainModel: 'models/AppDomainModel'
    },

    hbs: {
        helpers: false
    }
});
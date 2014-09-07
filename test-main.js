var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
    return path.replace(/^\/base\/js\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
      if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/js',

    // dynamically load all test files
    deps: allTestFiles,

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
    },

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});

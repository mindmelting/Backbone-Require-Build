// Karma configuration
// Generated on Tue May 27 2014 12:29:05 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],

    // list of files / patterns to load in the browser
    files: [
      {pattern: 'js/libs/sinonjs/sinon.js', included: true},
      {pattern: 'js/**/*.js', included: false},
      {pattern: 'js/**/*.hbs', included: false},
      'test-main.js'
    ],


    // list of files to exclude
    exclude: [
      'js/main.js',
      'js/init.js',
      'js/main.min.js',
      'js/libs/**/*.spec.js',
      'js/libs/**/*Spec.js',
      'js/libs/**/spec/**',
      'js/libs/**/spec.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'js/modules/**/*.js': 'coverage'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['coverage','progress'],

    coverageReporter: {
      type : 'cobertura',
      file : 'cobertura.xml'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};

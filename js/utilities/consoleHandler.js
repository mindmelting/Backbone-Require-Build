define([
    'underscore'
], function(_) {
    'use strict';

    var bindConsoleLogging = function(loggingEnabled) {
        var customConsole = {},
            noop = function() {},
            methods = ('assert,count,debug,dir,dirxml,error,exception,group,' +
            'groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,' +
            'time,timeEnd,trace,warn,memory').split(',');

        _.each(methods, function(method) {
            customConsole[method] = noop;

            if ((typeof window.console !== 'undefined') && (loggingEnabled && _.isFunction(window.console[method]))) {
                customConsole[method] = _.bind(function() {
                    window.console[method].apply(window.console, arguments);
                }, customConsole);
            }
        });

        return customConsole;
    };

    var ConsoleHandler = function() {
        return ({
            init: function(loggingEnabled) {
                _.extend(this, bindConsoleLogging(loggingEnabled || false));
            }
        });
    };

    return new ConsoleHandler();
});
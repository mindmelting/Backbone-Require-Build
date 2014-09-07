require([
    'backbone',
    'jquery',
    'app',
    'AppDomainModel',
    'routes/Router',
    'routes/RouteController',
    'modules/modals/ModalsModule',
    'modules/error/ErrorModule',
    'utilities/consoleHandler',
    'config'
],
function (  Backbone,
            $,
            App,
            AppDomainModel,
            Router,
            RouteController,
            ModalsModule,
            ErrorModule,
            console,
            config) {
    'use strict';

    console.init(config.LOGGING);

    var router = new Router({
        controller: new RouteController()
    });

    AppDomainModel.set({
        router: router
    });

    App.addRegions({
        modalWrapper: '[data-container="modals"]',
        content: '[data-container="content"]'
    });

    App.module('Modals', ModalsModule);
    App.module('Error', ErrorModule);

    App.start();
    
    Backbone.history.start({
        pushState: true
    });
});

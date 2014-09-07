define([
    'modules/error/ErrorModule',
    'nls!modules/error/nls/errors',
    'underscore',
    'marionette'
], function(ErrorModule, nls, _, Marionette) {
    'use strict';

    describe('ErrorModule / ', function() {

        beforeEach(function() {
            this.app = new Marionette.Application();
            this.app.module('Error', ErrorModule);
        });

        describe('Basics / ', function() {
            it('Should expose start and stop methods', function() {
                expect(this.app.Error.start).toBeDefined();
                expect(this.app.Error.stop).toBeDefined();         
            });
        });

        describe('Errors / ', function() {

            beforeEach(function() {
               this.app.Error.start(); 
               this.ventSpy = sinon.spy(this.app.vent, 'trigger');
            });

            afterEach(function() {
               this.app.Error.stop(); 
               this.ventSpy.restore();
            });

            it('Should trigger correct event with valid errorMessage', function() {
                var errorCode = _.keys(nls)[1];

                this.app.vent.trigger('error:show', {
                    errorCode: errorCode
                });

                expect(this.ventSpy.calledTwice).toBe(true);
                expect(this.ventSpy.getCall(1).args[1].viewParams.errorMessage).toBe(nls[errorCode]);
            });

            it('Should trigger correct event with invalid errorMessage', function() {
                var errorCode = 'NOPE';

                this.app.vent.trigger('error:show', {
                    errorCode: errorCode
                });

                expect(this.ventSpy.calledTwice).toBe(true);
                expect(this.ventSpy.getCall(1).args[1].viewParams.errorMessage).toBe(nls.DEFAULT);
                expect(this.ventSpy.getCall(1).args[1].viewParams.showCode).toBe(true);
            });

        });
    });
    
});
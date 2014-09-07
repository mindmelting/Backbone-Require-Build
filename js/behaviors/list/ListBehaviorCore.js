define([
    'marionette',
    'underscore',
    'jquery',
    './collections/ListCollection',
    './views/ListsView'
], function(Marionette, _, $, ListCollection, ListsView) {
    'use strict';

    return Marionette.Behavior.extend({

        events: {

        },

        toggleOpenLists: function(e) {
            e.preventDefault();

            if (!this.childView) {
                this.openLists();
            } else {
               this.closeLists();
            }
        },

        openLists: function() {
            var listsView = new ListsView({
                collection: new ListCollection([], this._getData())
            });
            this.view.ui.openLists.after(listsView.render().el);
            this.childView = listsView;

            _.defer(_.bind(function() {
                $('body').on('click', {
                    context: this
                }, this._checkGlobalClick);
            }, this));
        },

        closeLists: function() {
            $('body').off('click', this._checkGlobalClick);
            this.childView.remove();
            delete this.childView;
        },

        _checkGlobalClick: function(e) {
            if (!$(e.target).closest(e.data.context.childView.el).length){
                e.data.context.closeLists();
            }
        },

        /**
            @override
        **/
        _getData: function() {
            
        }

    });
});
define([
    'marionette',
    'underscore',
    'app',
    './ListView',
    'hbs!../templates/lists'
], function(Marionette, _, App, ListView, Template) {
    'use strict';

    return Marionette.CompositeView.extend({

        className: 'open',

        template: Template,

        itemViewContainer: 'ul',

        itemView: ListView,

        ui: {
            'controls': '.controls',
            'newListLink': '.createNewList', 
            'newContainer': '.newListNameContainer',
            'nameInput': 'input[type="text"]',
            'createButton': 'input[type="submit"]'
        },

        events: {
            'click @ui.newListLink': 'onCreateNewList',
            'click @ui.createButton': 'submitNewList'
        },

        collectionEvents: {
            'add': 'updateAddListVisibility'
        },

        templateHelpers: function() {
            return {
                canAddNewList: _.bind(function() {
                    return this.collection.canAddNewList();
                }, this)
            };
        },

        onBeforeItemAdded: function(view) {
            var ids = this.collection.ids;

            view.model.set({
                'checkboxEnabled': !_.isArray(ids) || ids.length === 1
            });
        },

        updateAddListVisibility: function() {
            this.ui.controls.toggleClass('hidden', !this.collection.canAddNewList());
        },

        showCreateNewListInput: function() {
            this.ui.newContainer.slideDown();
            this.ui.newListLink.slideUp();
        },

        hideCreateNewListInput: function() {
            this.ui.newContainer.slideUp();
            this.ui.newListLink.slideDown();
        },

        onCreateNewList: function(e) {
            e.preventDefault();

            this.showCreateNewListInput();
            App.vent.trigger('track', 'CREATE_NEW_LIST');
        },

        submitNewList: function(e) {
            e.preventDefault();

            var listName = this.ui.nameInput.val();

            if (listName && this.collection.canAddNewList()) {
                this.collection.add({
                    name: listName
                }).save();
                this.hideCreateNewListInput();

            }
        }

    });
    
});
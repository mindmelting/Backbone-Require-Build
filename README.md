Backbone/Marionette/Require Boilerplate project
==========

[![Build Status](https://travis-ci.org/mindmelting/Backbone-Require-Build.svg?branch=master)](https://travis-ci.org/mindmelting/Backbone-Require-Build) [![Coverage Status](https://img.shields.io/coveralls/mindmelting/Backbone-Require-Build.svg)](https://coveralls.io/r/mindmelting/Backbone-Require-Build?branch=master)

An opinionated structure to a Marionette web project.

Uses Karma/Jasmine/Sinon for unit testing (and code coverage)

Includes bootstrap

Includes a modal and error module for Marionette (uses bootstrap)

Uses CSSComb and JSHint for linting and reporting

# Building and Deploying

```javascript
sudo gem install sass
sudo npm install -g grunt-cli
sudo npm install -g bower
npm install
bower install
```

To build the project

```javascript
grunt
```

To serve the project locally

```javascript
grunt connect
```

To watch and compile the sass files
```javascript
grunt watch
```

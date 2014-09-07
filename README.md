Backbone/Marionette/Require Boilerplate project
==========

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

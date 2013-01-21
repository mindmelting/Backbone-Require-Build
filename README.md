Backbone-Require-Build
======================

A boilerplate for backbone/require front-end which incorporates Bower to load latest libraries, and Grunt.js as a build script to execute tests and build a production ready set of files.

You will need the following:
[node.js](http://nodejs.org/), 
[PhantomJS](http://phantomjs.org/), 
[Compass](http://compass-style.org/install/)

Install Grunt and Bower globally:

```
npm install grunt -g
```

```
npm install bower -g
```

You should now have all the tools you need to setup the boilerplate.

Running
```
npm install
```
will fetch the grunt libs needed to execute tests and compile the compass stylesheets.

Running
```
bower install
```
will download the latest JS libraries as specified in component.json

Running
 ```
grunt
```
will copy the JS libs to inside development, compile stylesheets and build/minimise the require/backbone app.

The Noun Project
================
[![npm version](https://badge.fury.io/js/the-noun-project.svg)](http://badge.fury.io/js/the-noun-project)
[![Build Status](https://travis-ci.org/rosshettel/the-noun-project.svg?branch=master)](https://travis-ci.org/rosshettel/the-noun-project)


Node.js wrapper for The Noun Project's API

Installation
------------
Simply add to your project with
````bash
npm install --save the-noun-project
````

In your project file:
````javascript
var NounProject = require('the-noun-project'),
nounProject = new NounProject({
    key: 'foo',
    secret: 'bar'
});
````
You can get your keys from [The Noun Project developer's page](https://thenounproject.com/developers/).

Usage
-----
See [The Noun Project API Explorer](http://api.thenounproject.com/explorer) for more information on the endpoints available.

The query string `options` object is optional and can be omitted. See the tests for more information.


````javascript
nounProject.GetIconsByTerm('goat', {limit: 5}, function (err, data) {
    if (!err) {
        console.log(data.icons);
    }
});
````
**or**
````javascript
nounProject.GetIconsByTerm('goat', function (err, data) {
    if (!err) {
        console.log(data.icons);
    }
});
````

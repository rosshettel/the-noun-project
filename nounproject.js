"use strict";

var Client = module.exports = function (config) {
    var request = require('request'),
        interpolate = require('interpolate'),
        Util = require('./util'),
        baseUrl = 'http://api.thenounproject.com',
        oauth = {
            consumer_key: config.key || '',
            consumer_secret: config.secret || ''
        },
        self = this;

    //collection: Operations on collection endpoints
    this.GetCollectionIconsById = function (id, options, callback) {
        var path = ['/collection/', id, '/icons'].join('');
        self.get(path, options, callback);
    }

    this.GetCollectionIconsBySlug = function (slug, options, callback) {
        var path = ['/collection/', slug, '/icons'].join('');
        self.get(path, options, callback);
    }

    this.GetCollectionById = function (id, callback) {
        var path = ['/collection/', id].join('');
        self.get(path, callback);
    }

    this.GetCollectionBySlug = function (slug, callback) {
        var path = ['/collection/', slug].join('');
        self.get(path, callback);
    }

    //icon : Operations on icon endpoints
    this.GetIconById = function (id, callback) {
        var path = ['/icon/', id].join('');
        self.get(path, callback);
    }

    this.GetIconByTerm = function (term, callback) {
        var path = ['/icon/', term].join('');
        self.get(path, callback);
    }

    //oauth : Operations on oauth endpoints
    this.GetUsage = function (callback) {
        self.get('/oauth/usage', {}, callback);
    }


    this.get = function(path, options, callback) {
        var url;
        //no options provided
        if (Util.isFunction(options)) {
            callback = options;
            options = {};
        }

        url = baseUrl + path + Util.objectToQueryString(options);
        // console.log('url', url);

        request.get({
            url: encodeURI(url),
            oauth: oauth
        }, function (err, response, body) {
            if (err) {
                callback(new Error('Noun Project API Error'));
            } else if (response.statusCode !== 200) {
                callback(response.statusCode + ' HTTP response code');
            } else {
                callback(null, JSON.parse(body));
            }
        });
    }
}

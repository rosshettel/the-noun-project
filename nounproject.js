"use strict";

var Client = module.exports = function (config) {
    var request = require('request'),
        Util = require('./util'),
        baseUrl = 'https://api.thenounproject.com',
        oauth = {
            consumer_key: config.key || '',
            consumer_secret: config.secret || ''
        },
        self = this;

    //collection: Operations on collection endpoints
    this.getCollectionIconsById = function (id, options, callback) {
        var path = ['/collection/', id, '/icons'].join('');
        self.get(path, options, callback);
    }

    this.getCollectionIconsBySlug = function (slug, options, callback) {
        var path = ['/collection/', slug, '/icons'].join('');
        self.get(path, options, callback);
    }

    this.getCollectionById = function (id, callback) {
        var path = ['/collection/', id].join('');
        self.get(path, callback);
    }

    this.getCollectionBySlug = function (slug, callback) {
        var path = ['/collection/', slug].join('');
        self.get(path, callback);
    }

    //icon : Operations on icon endpoints
    this.getIconById = function (id, callback) {
        var path = ['/icon/', id].join('');
        self.get(path, callback);
    }

    this.getIconByTerm = function (term, callback) {
        var path = ['/icon/', term].join('');
        self.get(path, callback);
    }

    //icons : Operations on icons endpoints
    this.getRecentIcons = function (options, callback) {
        self.get('/icons/recent_uploads', options, callback);
    }

    this.getIconsByTerm = function (term, options, callback) {
        var path = ['/icons/', term].join('');

        //this argument 500's if not an int
        if (options.limit_to_public_domain === true) {
            options.limit_to_public_domain = '1';
        }

        self.get(path, options, callback);
    }

    //oauth : Operations on oauth endpoints
    this.getUsage = function (callback) {
        self.get('/oauth/usage', callback);
    }

    //user : Operations on user endpoints
    this.getUserCollection = function (userId, slug, callback) {
        var path = ['/user/', userId, '/collections/', slug].join('');
        self.get(path, callback);
    }

    this.getUserCollections = function (userId, callback) {
        var path = ['/user/', userId, '/collections'].join('');
        self.get(path, callback);
    }

    this.getUserUploads = function (username, options, callback) {
        var path = ['/user/', username, '/uploads'].join('');
        self.get(path, options, callback);
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
                callback(new Error('Noun Project API: ' + err));
            } else if (response.statusCode !== 200) {
                callback(response.statusCode + ' HTTP response code');
            } else {
                callback(null, JSON.parse(body));
            }
        });
    }
}

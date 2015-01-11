"use strict";

var Client = module.exports = function (config) {
    var request = require('request'),
        interpolate = require('interpolate'),
        baseUrl = 'http://api.thenounproject.com',
        oauth = {
            consumer_key: config.key || '',
            consumer_secret: config.secret || ''
        },
        self = this;

    //collection: Operations on collection endpoints
    this.GetCollectionIconsById = function(id, options, callback) {
        var path = ['/collection/', id, '/icons'].join('');
        self.get(path, options, function (err, data) {
            callback(err, data);
        });
    }

    this.oauthUsage = function (callback) {
        self.get('/oauth/usage', {}, function (err, data) {
            console.log(data);
            callback(err, data);
        });
    }


    this.get = function(path, options, callback) {
        var url = baseUrl + path;

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

    //should probably go to a util file
    this.isFunction = function (obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    }

    //maybe not needed
    this.toQueryString = function (obj) {
        var parts = [],
            i;

        for (i in obj) {
            if (obj.hasOwnProperty(i)) {
                parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
            }
        }

        return '?' + parts.join('&');
    }
}

"use strict";

var isFunction = function (obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    },
    objectToQueryString = function (obj) {
        var parts = [],
        i;

        for (i in obj) {
            if (obj.hasOwnProperty(i)) {
                parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
            }
        }

        if (parts.length > 0) {
            return '?' + parts.join('&');
        } else {
            return '';
        }
    };

module.exports = {
    isFunction: isFunction,
    objectToQueryString: objectToQueryString
};

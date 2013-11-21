define([
    "dojo/_base/declare"
], function(declare){
    return declare([], {
        imdb: null,
        title: null,
        year: null,

        constructor: function(json) {
            this.imdb = json.imdb;
            this.title = json.title;
            this.year = json.year;
        }
    });
});
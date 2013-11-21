// app/movieWidget/MovieWidget.js
define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin",
    "dojo/text!./templates/MovieWidget.html", "dojo/text!./css/movieWidget.css", "dojo/i18n!./nls/MovieWidget", "dojo/domReady!"],
    function (declare, _WidgetBase, _TemplatedMixin, movieWidgetTemplate, movieWidgetStyle, movieWidgetNls) {
        return declare([_WidgetBase, _TemplatedMixin], {
            templateString: movieWidgetTemplate,
            movie: null,
            baseClass: "movieWidget",

            constructor: function (params) {
                this.movie = params.movie;
            },

            postCreate: function () {
                this.inherited(arguments);
                console.log("postCreate");
                this.movieWidgetLegend.textContent = movieWidgetNls.movieWidgetLegend;
                this.imdbLabel.textContent = movieWidgetNls.imdbLabel + ':';
                this.titleLabel.textContent = movieWidgetNls.titleLabel + ':';
                this.yearLabel.textContent = movieWidgetNls.yearLabel + ':';
            },

            startup: function () {
                this.inherited(arguments);
                console.log("startup");
            }
        });
    });
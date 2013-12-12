define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin",
    "dojo/text!./templates/AppWidget.html", "dojo/i18n!./nls/app",
    "app/movieWidget/MovieWidget", "app/musicWidget/MusicWidget",

    "dojox/mobile/TabBar", "dojox/mobile/TabBarButton", "dojox/mobile/ScrollableView",
    "dojox/mobile/RoundRect",
    "xstyle/css!./css/appWidget.css"
],
    function (declare, _WidgetBase, _TemplatedMixin, template, nls) {
        return declare([_WidgetBase, _TemplatedMixin], {
            templateString: template,
            baseClass: "AppWidget",
            labels: nls,
            movieWidget: null,
            musicWidget: null,

            constructor: function (params) {
                this.inherited(arguments);
                console.log(this.baseClass + ": main.constructor");
            },

            postCreate: function () {
                this.inherited(arguments);
                console.log(this.baseClass + ": main.postCreate");
            },

            startup: function () {
                this.inherited(arguments);
                console.log(this.baseClass + ": main.startup");
            }
        });
    });
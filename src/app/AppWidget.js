// app/main.js
define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin",
    "dojo/text!./templates/AppWidget.html", "dojo/i18n!./nls/app",

    "dojox/mobile/parser", "dojox/mobile", "dojox/mobile/TabBar", "dojox/mobile/TabBarButton", "dojox/mobile/View",
    "xstyle!./css/app.css",
    "dojo/domReady!"
],
    function (declare, _WidgetBase, _TemplatedMixin,
              template, nls) {
        return declare([_WidgetBase, _TemplatedMixin], {
            templateString: template,
            baseClass: "AppWidget",
            labels: nls,
            appWidgetNode: null,

            constructor: function (params) {
                this.inherited(arguments);
                console.log("main.constructor");
            },

            postCreate: function () {
                this.inherited(arguments);
                console.log("main.postCreate");
            },

            startup: function() {
                this.inherited(arguments);
                console.log("main.startup");
            }
        });
    });
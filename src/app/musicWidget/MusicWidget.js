define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/MusicWidget.html", "dojo/i18n!./nls/MusicWidget",
    "dojox/mobile/ListItem", "dojo/Stateful",

    "xstyle/css!./css/musicWidget.css",

    "dojox/mobile/RoundRectCategory", "dojox/mobile/RoundRectList"],
    function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, musicWidgetTemplate, musicWidgetNls, ListItem, StateFul) {
        var MusicCollection = declare([StateFul], {
            collection: [],

            _collectionGetter: function() {
                return this.collection;
            },

            _collectionSetter: function(value) {
                this.collection = value;
            }

        });

        var musicCollection = new MusicCollection();

        return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, StateFul], {
            templateString: musicWidgetTemplate,
            baseClass: "musicWidget",
            labels: musicWidgetNls,

            _albumListNode: null,

            constructor: function (params) {
            },

            postCreate: function () {
                var self = this;
                self.inherited(arguments);
                console.log(self.baseClass+": postCreate");
                self.own(musicCollection.watch("collection", function() {
                    self._updateMusicCollectionList();
                }));
                musicCollection.set("collection", [
                    {artist: "AC/DC", album: "Live", year: "1990"},
                    {artist: "Biohazard", album: "Urban Discipline", year: "1999"},
                    {artist: "CCR", album: "The best of", year: "1970"},
                    {artist: "Dire Straits", album: "Sultans Of Swing", year: "1991"},
                    {artist: "Elvis Presley", album: "Aloha From Hawaii", year: "1960"},
                    {artist: "Fleedwood Mack", album: "Best Of", year: "1971"}
                ]);
            },

            startup: function () {
                this.inherited(arguments);
                console.log(this.baseClass+": startup");
            },

            _updateMusicCollectionList: function() {
                var self = this;
                musicCollection.collection.forEach(function(album) {
                    var li = new ListItem();
                    li.set("label", album["artist"] + ": " + album["album"]);
                    self._albumListNode.addChild(li);
                });
            }
        });
    });
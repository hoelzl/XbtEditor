/**
 * Created by tc on 02.12.14.
 */

var TOP_LOCATOR = new draw2d.layout.locator.TopLocator();
var BOTTOM_LOCATOR = new draw2d.layout.locator.BottomLocator();

xbtEditor.Start = draw2d.shape.basic.Circle.extend({
    NAME: "xbtEditor.Start",

    init: function (attr) {
        this._super($.extend({bgColor: "#aaaaff"}, attr));
        //noinspection JSCheckFunctionSignatures
        this.createPort("output", BOTTOM_LOCATOR);
    }});

xbtEditor.Task = draw2d.shape.basic.Rectangle.extend({
     NAME: "xbtEditor.Task",

    init: function (attr) {
        this._super($.extend({bgColor: "#3f51b5"}, attr));
        //noinspection JSCheckFunctionSignatures
        this.createPort("input", TOP_LOCATOR);
    }});

xbtEditor.Choice = draw2d.shape.basic.Circle.extend({
    NAME: "xbtEditor.Choice",

    init: function (attr) {
        this._super(attr);
        //noinspection JSCheckFunctionSignatures
        this.createPort("input", TOP_LOCATOR);
        //noinspection JSCheckFunctionSignatures
        this.createPort("output", BOTTOM_LOCATOR);
    }});

xbtEditor.Sequence = draw2d.shape.basic.Rectangle.extend({
    NAME: "xbtEditor.Sequence",

    init: function (attr) {
        this._super(attr);
        //noinspection JSCheckFunctionSignatures
        this.createPort("input", TOP_LOCATOR);
        //noinspection JSCheckFunctionSignatures
        this.createPort("output", BOTTOM_LOCATOR);
    }});

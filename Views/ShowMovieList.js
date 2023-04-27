"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowMovieList = void 0;
var ShowModelList_1 = require("./ShowModelList");
var ShowMovieList = /** @class */ (function (_super) {
    __extends(ShowMovieList, _super);
    function ShowMovieList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseUrl = "https://image.tmdb.org/t/p/original";
        _this.template = function (movieAttr) {
            var title = movieAttr.title, date = movieAttr.date, poster_path = movieAttr.poster_path;
            var posterUrl = _this.baseUrl + poster_path;
            return "\n      <h3>".concat(title, "</h3>\n      <h4>").concat(date, "</h4>\n      <img src=").concat(posterUrl, ">\n    ");
        };
        return _this;
    }
    return ShowMovieList;
}(ShowModelList_1.ShowModelList));
exports.ShowMovieList = ShowMovieList;

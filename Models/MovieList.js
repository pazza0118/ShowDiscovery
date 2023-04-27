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
exports.MovieList = void 0;
var axios_1 = require("axios");
var ModelList_1 = require("./ModelList");
var MovieList = /** @class */ (function (_super) {
    __extends(MovieList, _super);
    function MovieList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.apiKey = 'a09edf864e37d1e63cdc3a23482da11d';
        _this.getPopularMovies = function (pageNum) {
            axios_1.default
                .get("https://api.themoviedb.org/3/movie/popular?api_key=".concat(_this.apiKey, "&language=en-US&page=").concat(pageNum))
                .then(function (res) {
                for (var i = 0; i < 20; i++) {
                    var _a = res.data.results[i], original_title = _a.original_title, release_date = _a.release_date, poster_path = _a.poster_path;
                    _this.attr.push({
                        title: original_title,
                        date: release_date,
                        poster_path: poster_path,
                    });
                }
                _this.event['callback']();
            })
                .catch(function (err) {
                console.log("failure");
                throw new Error(err);
            });
        };
        return _this;
    }
    return MovieList;
}(ModelList_1.ModelList));
exports.MovieList = MovieList;

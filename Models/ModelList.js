"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelList = void 0;
var ModelList = /** @class */ (function () {
    function ModelList() {
        this.event = {};
        this.attr = [];
        this.seed = function (numPages, getModels) {
            for (var i = 1; i <= numPages; i++) {
                getModels(i);
            }
        };
    }
    return ModelList;
}());
exports.ModelList = ModelList;

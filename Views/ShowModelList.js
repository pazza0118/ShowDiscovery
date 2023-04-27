"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowModelList = void 0;
var ShowModelList = /** @class */ (function () {
    function ShowModelList(parentElement, modelList) {
        var _this = this;
        this.parentElement = parentElement;
        this.modelList = modelList;
        this.renderModel = function (modelAttr) {
            var modelElement = document.createElement("div");
            modelElement.innerHTML = _this.template(modelAttr);
            _this.parentElement.append(modelElement);
        };
        this.renderModelList = function () {
            _this.modelList.attr.forEach(function (modelAttr) {
                _this.renderModel(modelAttr);
            });
        };
    }
    return ShowModelList;
}());
exports.ShowModelList = ShowModelList;

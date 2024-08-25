"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module1 = void 0;
var Module1 = /** @class */ (function () {
    function Module1() {
    }
    Module1.prototype.print = function () {
        localPrint("Module1.print() called");
    };
    return Module1;
}());
exports.Module1 = Module1;
function localPrint(text) {
    console.log("localPrint: ".concat(text));
}

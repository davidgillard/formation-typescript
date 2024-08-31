var LogClass = /** @class */ (function () {
    function LogClass() {
    }
    LogClass.prototype.logToConsole = function (IPrintObj) {
        IPrintObj.print();
    };
    return LogClass;
}());
var printObject = {
    print: function () { console.log("printObject.print() called"); }
};
var logClass = new LogClass();
logClass.logToConsole(printObject);

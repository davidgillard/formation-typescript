function printGeneric(value) {
    console.log("typeof T is : ".concat(typeof value));
    console.log("value is : ".concat(value));
}
printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(function () { });
printGeneric({ id: 1 });
printGeneric("test");
// printGeneric<string>(1);
function usingTwoTypes(first, second) {
    // console.log(`typeof A, B is : ${typeof A}, ${typeof B}`);
    // console.log(`value is : ${A}, {B}`)
}
usingTwoTypes(1, "test");
usingTwoTypes(1, "test");
usingTwoTypes(true, false);
usingTwoTypes("first", "second");
var Concatenator = /** @class */ (function () {
    function Concatenator() {
    }
    Concatenator.prototype.concatenateArray = function (items) {
        var returnString = "";
        for (var i = 0; i < items.length; i++) {
            returnString += i > 0 ? "," : "";
            returnString += items[i].toString();
        }
        return returnString;
    };
    return Concatenator;
}());
var concator = new Concatenator();
var concateResult = concator.concatenateArray([
    "первый", "второй", "третий"
]);
console.log("concateResult = ".concat(concateResult));
concateResult = concator.concatenateArray([
    1234, 5678, 9012
]);
console.log("concateResult = ".concat(concateResult));

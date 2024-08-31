function getTupleStringAbc(tupleValue) {
    var tupleDestructured = tupleValue.slice(0);
    var returnString = "|";
    for (var _i = 0, tupleDestructured_1 = tupleDestructured; _i < tupleDestructured_1.length; _i++) {
        var value = tupleDestructured_1[_i];
        returnString += "".concat(value, "|");
    }
    return returnString;
}
var keyA = getTupleStringAbc([1]);
console.log("keyA = ".concat(keyA));
var keyAb = getTupleStringAbc([1, "test"]);
console.log("keyAb = ".concat(keyAb));
var keyAbc = getTupleStringAbc([1, "test", true]);
console.log("keyAbc = ".concat(keyAbc));

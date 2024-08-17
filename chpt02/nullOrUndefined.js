function testNullOperands(a, b) {
    var addResult = a + (b !== null && b !== void 0 ? b : 0);
    console.log("addResult: ".concat(addResult));
}
testNullOperands(6, 3);
testNullOperands(6, null);
testNullOperands(6, undefined);

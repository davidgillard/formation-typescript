function printGeneric(value) {
    console.log("typeof T is : ".concat(typeof value));
    console.log("value is : ".concat(value));
}
printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(function () { });
printGeneric({ id: 1 });

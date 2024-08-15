function addWithTypeAlias(arg1, arg2) {
    return arg1.toString() + arg2.toString();
}
console.log(" \"mon\", \"test\" = ".concat(addWithTypeAlias("mon", "test")));
console.log(" \"mon\", \"test\" = ".concat(addWithTypeAlias(5, "test")));
console.log(" \"mon\", \"test\" = ".concat(addWithTypeAlias("mon", 5)));

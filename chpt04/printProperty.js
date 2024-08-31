function printProperty(object, key) {
    var propertyValue = object[key];
    console.log("object[".concat(key, "] = ").concat(propertyValue));
}
var obj1 = {
    id: 1,
    name: "myName",
    print: function () { console.log("".concat(this.id)); }
};
printProperty(obj1, "id");
printProperty(obj1, "name");
printProperty(obj1, "print");

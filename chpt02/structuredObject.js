var structureObject = {
    name: "myObject",
    properties: {
        id: 1,
        type: "AnObject"
    }
};
function printObjectType(a) {
    console.log("a: ".concat(JSON.stringify(a)));
}
printObjectType(structureObject);
// printObjectType("This is a string");

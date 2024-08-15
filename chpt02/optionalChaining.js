var objectA = {
  nestedProperty: {
    name: "nestedPropertyName"
  }
}

function printNestedObject(obj) {
  console.log("obj.nestedProperty.name = " + obj.nestedProperty.name);
  console.log("calling printNestedObject");
  printNestedObject({});
  console.log("completed");
}

printNestedObject(objectA);

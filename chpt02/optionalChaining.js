var objectA = {
  nestedProperty: { // propriété
    name: "nestedPropertyName", // une première propriété
    firstname: "nestedPropertyFirstName" // une seconde propriété
  }
}

function printNestedObject(obj) {
  console.log("obj.nestedProperty.name = " + obj.nestedProperty.firstname);
  console.log("calling printNestedObject");
  printNestedObject({});
  console.log("completed");
}

printNestedObject(objectA);
  // printNestedObject({});
  // console.log("completed");

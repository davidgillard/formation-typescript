let structureObject: object = {
  name: "myObject",
  properties: {
    id: 1,
    type: "AnObject"
  }
}

function printObjectType(a: object) {
  console.log(`a: ${JSON.stringify(a)}`);
}

printObjectType(structureObject);
// printObjectType("This is a string");

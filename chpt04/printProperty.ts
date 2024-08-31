function printProperty<T, K extends keyof T & (string | number)>(object: T, key: K ) {
  let propertyValue = object[key];
  console.log(`object[${key}] = ${propertyValue}`);
}

let obj1 = {
  id: 1,
  name: "myName",
  print() { console.log(`${this.id}`) }
}

printProperty(obj1, "id");
printProperty(obj1, "name");
printProperty(obj1, "print");


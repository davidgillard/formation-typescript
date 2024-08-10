var myBoolean : boolean = true;
var myNumber : number = 1234;
var myStringArray : string[] = [`first`, `second`, `third`];

myBoolean = myNumber === 456;
console.log(`valeur de myBoolean apres affectation de myNumber: ${myBoolean}`)
myStringArray = [myNumber.toString(), `5678`];
myNumber = myStringArray.length;
console.log(`myBoolean = ${myBoolean}`);
console.log(`myStringArray = ${myStringArray}`);
console.log(`myNumber = ${myNumber}`);

// Example Inferred typing
// var inferredString = "this is a string";
// var inferredNumber = 1;
// inferredNumber = inferredString;


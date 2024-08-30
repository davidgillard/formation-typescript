function printGeneric<T>(value: T) {
  console.log(`typeof T is : ${typeof value}`);
  console.log(`value is : ${value}`)
}

printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(() => { });
printGeneric({ id: 1});
printGeneric<string>("test");
// printGeneric<string>(1);

function usingTwoTypes<A, B>(first: A, second: B) {
  // console.log(`typeof A, B is : ${typeof A}, ${typeof B}`);
  // console.log(`value is : ${A}, {B}`)
}

usingTwoTypes<number, string>(1, "test");
usingTwoTypes(1, "test");
usingTwoTypes<boolean, boolean>(true, false);
usingTwoTypes("first", "second");


class Concatenator<T extends Array<string> | Array<number>> {
  public concatenateArray(items: T): string {
    let returnString = "";
    for (let i = 0; i < items.length; i++) {
      returnString += i > 0 ? "," : "";
      returnString += items[i].toString();
    }
    return returnString;
  }
}

let concator = new Concatenator();

let concateResult = concator.concatenateArray([
  "первый", "второй", "третий" 
]);
console.log(`concateResult = ${concateResult}`);

concateResult = concator.concatenateArray([
  1234, 5678, 9012
]);
console.log(`concateResult = ${concateResult}`);


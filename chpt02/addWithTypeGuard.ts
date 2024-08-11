function addWithTypeGuard(
  arg1: string | number,
  arg2: string | number
) {
  if (typeof arg1 === "string") {
    // arg1 est considéré comme une chaine de caractère
    console.log(`arg1 is of type string`);
    return arg1 + arg2;
  } 
  if (typeof arg1 === "number" && typeof arg2 === "number")  {
    // les deux arguments sont des numbers
    console.log(`arg1 et arg2 sont des numbers`);
    return arg1 + arg2;
  }
  console.log(`default return treat both as strings`)
  return arg1.toString() + arg2.toString();
}

console.log(` "1", "2" = ${addWithTypeGuard("1", "2")}`);
console.log(` 1 , 2 = ${addWithTypeGuard(1, 2)}`);
console.log(` 1 , "2" = ${addWithTypeGuard(1, "2")}`);

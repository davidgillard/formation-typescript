function calculate(a: number, b: number, c: number): number {
  return (a * b) + c;
}

console.log(`calculate() =${calculate(2, 3, 1)}`);


function printString(a: string): void {
  console.log(a);
}

var returnedValue: string = printString("This is a string");


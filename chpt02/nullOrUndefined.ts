function testNullOperands(a: number, b: number | null | undefined) {
  let addResult = a + (b ?? 0);
  console.log(`addResult: ${addResult}`);
}

testNullOperands(6, 3);
testNullOperands(6, null);
testNullOperands(6, undefined);


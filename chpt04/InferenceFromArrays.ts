type inferredTypeFromArray<T> = T extends (infer U)[] ? U : never;

function testInferredFromArray<T>(args: inferredTypeFromArray<T>) {}

testInferredFromArray<string[]>("test");
testInferredFromArray<number[]>(1);


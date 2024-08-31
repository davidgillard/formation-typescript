class ClassA { }

class ClassB { }

function createClassInstance<T>(arg1: { new(): T }): T {
  return new arg1(); //error : see below
}

let classAInstance = createClassInstance(ClassA);

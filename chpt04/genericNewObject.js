var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    return ClassA;
}());
var ClassB = /** @class */ (function () {
    function ClassB() {
    }
    return ClassB;
}());
function createClassInstance(arg1) {
    return new arg1(); //error : see below
}
var classAInstance = createClassInstance(ClassA);

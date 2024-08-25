var ClassWithPrivateProperty = /** @class */ (function () {
    function ClassWithPrivateProperty(id) {
        this.id = id;
    }
    return ClassWithPrivateProperty;
}());
var privateAccess = new ClassWithPrivateProperty(10);
privateAccess.id = 20;

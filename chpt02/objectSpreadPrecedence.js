var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var object1 = { id: 1, name: "Obj1 name" };
var object2 = { id: 1001, desc: "Obj2 description" };
var objPrec3 = __assign(__assign({}, object1), { object2: object2 });
console.log("object3: ".concat(JSON.stringify(objPrec3, null, 4)));

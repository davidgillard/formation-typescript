function nullishCheck(a) {
    console.log("a: ".concat(a !== null && a !== void 0 ? a : "undefined or null"));
}
nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);

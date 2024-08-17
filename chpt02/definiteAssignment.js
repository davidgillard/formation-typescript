var globalString;
setGlobalString("this string is set");
console.log("globalString = ".concat(globalString));
function setGlobalString(value) {
    globalString = value;
}

var array = ["123", "456", "789"];
delete array[0];
for (var i = 0; i < array.length; i++) {
    console.log("array[".concat(i, "] = ").concat(array[i]));
}

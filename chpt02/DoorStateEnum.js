var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
})(DoorState || (DoorState = {}));
function checkDoorState(state) {
    console.log("enum value is : ".concat(state));
    switch (state) {
        case DoorState.Open:
            console.log("Door is open");
            break;
        default:
            console.log("Door is closed");
            break;
    }
}
checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);

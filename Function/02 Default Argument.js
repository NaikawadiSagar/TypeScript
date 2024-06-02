//Default Arguments.
//Number of Arguments to Required 2
// Default Arguments Should be trailing(From Right to Left)
function Sun(No1, No2, No3) {
    if (No2 === void 0) { No2 = 60; }
    if (No3 === void 0) { No3 = 90; }
    console.log("Inside Demo");
}
//Sun();            Error
Sun(20); // No1 = 20, No2 = 60, No3 = 90
Sun(20, 30); //  No1 = 20, No2 = 30, No3 = 90
Sun(20, 30, 40); // No1 = 20, No2 = 30, No3 = 90

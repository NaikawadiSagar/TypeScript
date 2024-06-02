//Optional Arguments.
function Sun(No1, No2) {
    console.log("Inside Demo");
    console.log("Value Of No1 : " + No1);
    if (No2 != undefined) {
        console.log("Value Of No2 : " + No2);
    }
}
Sun(10, 20); // No1 = 10   No2 = 20
Sun(10); // No1 = 10  No2 = undefined

function Fun() {
    console.log("Inside Fun");
}
Fun();
function gun(no) {
    var i = no;
    i++;
    return i;
}
var Ret = 0;
var No = 10;
Ret = gun(No);
console.log("Return Value is : " + Ret);

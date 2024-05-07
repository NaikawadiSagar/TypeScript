function main() {
    var no = 13;
    var bret;
    bret = Even(no);
    if (bret == true) {
        console.log("Number is Even");
    }
    else {
        console.log("Number is odd");
    }
}
function Even(no) {
    if (no % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
main();

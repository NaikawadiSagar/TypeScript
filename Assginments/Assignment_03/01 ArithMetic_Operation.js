var Arith = /** @class */ (function () {
    function Arith(a, b) {
        this.No1 = a;
        this.No2 = b;
    }
    Arith.prototype.Add = function () {
        var Ans = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arith.prototype.Sub = function () {
        var Ans = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    Arith.prototype.Mul = function () {
        var Ans = 0;
        Ans = this.No1 * this.No2;
        return Ans;
    };
    Arith.prototype.Div = function () {
        var Ans = 0;
        Ans = this.No1 / this.No2;
        return Ans;
    };
    return Arith;
}());
var Obj = new Arith(11, 10);
var Res = 0;
Res = Obj.Add();
console.log("Addition is " + Res);
Res = Obj.Sub();
console.log("Substraction is " + Res);
Res = Obj.Mul();
console.log("Multiplication is " + Res);
Res = Obj.Div();
console.log("Division is " + Res);
console.log("Create Second Object = ");
var Obj4 = new Arith(7, 4);
Res = Obj4.Add();
console.log("Addition is " + Res);
Res = Obj4.Sub();
console.log("Substraction is " + Res);
Res = Obj4.Mul();
console.log("Multiplication is " + Res);
Res = Obj4.Div();
console.log("Division is " + Res);

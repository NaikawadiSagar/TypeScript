class Arith
{
    No1: number;
    No2: number;

    constructor(a: number, b: number)
    {
        this.No1 = a;
        this.No2 = b;
    }
    Add()
    {
        var Ans: number = 0;
         Ans = this.No1 + this.No2;
         return Ans;
    }
    Sub()
    {
        var Ans: number = 0;
         Ans = this.No1 - this.No2;
         return Ans;
    }
    Mul()
    {
        var Ans: number = 0;
         Ans = this.No1 * this.No2;
         return Ans;
    }
    Div()
    {
        var Ans: number = 0;
         Ans = this.No1 / this.No2;
         return Ans;
    }
}
var Obj = new Arith(11,10);
var Res:number = 0;
Res = Obj.Add();
console.log("Addition is " + Res);

Res = Obj.Sub();
console.log("Substraction is " + Res);

Res = Obj.Mul();
console.log("Multiplication is " + Res);

Res = Obj.Div();
console.log("Division is " + Res);

console.log("Create Second Object = ");
var Obj4 = new Arith(7,4);

Res = Obj4.Add();
console.log("Addition is " + Res);

Res = Obj4.Sub();
console.log("Substraction is " + Res);

Res = Obj4.Mul();
console.log("Multiplication is " + Res);

Res = Obj4.Div();
console.log("Division is " + Res);


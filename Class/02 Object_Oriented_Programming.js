//OOP(Object Oriented Programming)
//Class Defination
var Arithemetic = /** @class */ (function () {
    function Arithemetic(a, b) {
        this.No1 = a;
        this.No2 = b;
    }
    Arithemetic.prototype.Add = function () {
        var Ans = 0; // Local variable
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithemetic.prototype.Substraction = function () {
        var Ans = 0; // Local variable
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithemetic;
}());
var Obj1 = new Arithemetic(10, 11);
var Obj2 = new Arithemetic(20, 21);
var Ret = 0;
Ret = Obj1.Add();
console.log("Addition is : " + Ret);
Ret = Obj1.Substraction();
console.log("Substraction is : " + Ret);
//kay Karaych Ahe? = (Beheviour/Function)
//Addition And Substraction
// Te Karnyasathi ky ky Lagnar ahe = (Characteristics/variables)
// 2 Numbers value Thevayla  Ani 1 Number Answer Thevayla

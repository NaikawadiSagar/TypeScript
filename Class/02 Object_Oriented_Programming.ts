//OOP(Object Oriented Programming)

//Class Defination
class Arithemetic {
    // Charcteristics
    No1: number;
    No2: number;


    constructor(a:number,b:number)
    {
         this.No1 = a;
         this.No2 = b;
    }
    Add()             // Behaviour
    {
        var Ans: number = 0;      // Local variable
        Ans = this.No1 + this.No2;
        return Ans;
    }
    Substraction()  // // Behaviour
    {
        var Ans: number = 0;   // Local variable
        Ans = this.No1 - this.No2;
        return Ans;
    }
}

var Obj1 = new Arithemetic(10,11);
var Obj2 = new Arithemetic(20,21);

var Ret:number = 0;

Ret = Obj1.Add();
console.log("Addition is : " + Ret);

Ret = Obj1. Substraction ();
console.log("Substraction is : " + Ret);





//kay Karaych Ahe? = (Beheviour/Function)
//Addition And Substraction

// Te Karnyasathi ky ky Lagnar ahe = (Characteristics/variables)
// 2 Numbers value Thevayla  Ani 1 Number Answer Thevayla
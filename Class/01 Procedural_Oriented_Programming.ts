//POP(Procedural Oriented Programming)

function Add(No1:number,No2:number):number
{
    var Ans:number =0;
    Ans = No1 + No2;
    return Ans;
}
function Substraction(No1:number,No2:number):number
{
    var Ans:number =0;
    Ans = No1 - No2;
    return Ans;
}

var Value1:number = 10;
var Value2:number = 11;
var Ret:number = 0;

Ret = Add(Value1, Value2);
console.log("Addition is : " + Ret);

Ret = Substraction (Value1, Value2);
console.log("Substraction is : " + Ret);

//kay Karaych Ahe? = (Beheviour/Function)
//Addition And Substraction

// Te Karnyasathi ky ky Lagnar ahe = (Characteristics/variables)
// 2 Numbers value Thevayla  Ani 1 Number Answer Thevayla
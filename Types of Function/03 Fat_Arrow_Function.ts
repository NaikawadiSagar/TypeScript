//Fat Arrow Function OR Arrow OR Labda
var Ret:number = 0;

 var Addition3= (No1:number,No2:number):number => 
{
    var Ans:number = 0;
    Ans = No1 + No2;
    return Ans;
}

Ret = Addition3(10,11);
console.log("Addition is :" + Ret);
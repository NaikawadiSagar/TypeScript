//Anonymus FUnction(FUnction Without Name)

var Ret:number = 0;
var Addition2 = function(No1:number,No2:number):number
{
    var Ans:number = 0;
    Ans = No1 + No2;
    return Ans;
}

Ret = Addition2(10,11);
console.log("Addition is :" + Ret);
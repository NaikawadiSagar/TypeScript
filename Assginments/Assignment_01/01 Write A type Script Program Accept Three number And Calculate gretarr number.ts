function Maximum(No1:number, No2:number, No3:number)
{
    if(No1 > No2 && No1 > No3)
        {
            return 1;
        }
    else if(No2 >No3 && No2 > No1)
        {
            return 2;
        }
    else if(No3 > No1 && No3 > No2)
        {
            return 3;
        }
}

var a = 23;
var b = 89;
var c = 6;
var Ret =  Maximum(a,b,c);

if(Ret == 1)
{
     console.log("No1 is Grater : " + a);
} 
else if(Ret == 2)
{
    console.log("No2 is Grater : " + b);
} 
else if(Ret == 3)
    {
        console.log("No3 is Grater : " + c);
    }       

var Arr:number[] = [10,20,70,40,50];

var Max:number = 0;

for(var i:number = 0; i < Arr.length; i++)
{
    if(Arr[i] >= Max)
    {
        Max = Arr[i];
    }
}
console.log(Max);

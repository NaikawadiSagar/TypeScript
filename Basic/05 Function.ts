function Fun()
{
    console.log("Inside Fun");
}

Fun();

function sun(no:number)
{
    console.log("inside sun : " + no);
}

sun(30);

function gun(no:number):number
{
    var i:number = no;
    i++;
    return i;
}
var Ret:number = 0;
var No:number = 10;
 Ret = gun(No);

 console.log("Return Value is : " +Ret);
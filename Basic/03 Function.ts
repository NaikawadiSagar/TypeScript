function main():void
{
    var no:number = 13;
    var bret:boolean;


    bret = Even(no);

    if(bret == true)
    {
        console.log("Number is Even");
    }
    else
    {
        console.log("Number is odd");
    }
}

function Even(no):boolean
{
    if((no % 2) == 0)
    {
        return true;
    }
    else
    {

        return false;
    }
}

main();
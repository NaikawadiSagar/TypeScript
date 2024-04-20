function Displayfactors(No1:number)
{
    for(var i = 1; i<=No1;i++)
        {
            if(No1 % i == 0)
                {
                    console.log(i);
                }
        }
}

Displayfactors(20);
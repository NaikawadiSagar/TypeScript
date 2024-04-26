function Prime(No1: number)
{
    var flag = 0;
    for(var i  = 2;i <= No1;i++)
        {
            if(No1 % 1 ==0)
            {
                break;
            } 
       }
       if(No1 == i)
        {
            console.log("Prime");
        }
        else
        {
            console.log("Not");
        }

}

Prime(11);
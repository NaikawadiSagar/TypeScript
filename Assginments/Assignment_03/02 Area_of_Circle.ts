class Circle
{
    Radius:number;
    Pi:number;

    constructor(r:number, p:number)
    {
        this.Radius = r;
        this.Pi = p;
    }

    Area()
    {
        var Res:number = 0;
        Res = this.Pi * this.Radius * this.Radius
        return Res;
    }
}
var obj5 = new Circle(5,3.14);
var Ret:number = 0;

Ret = obj5.Area();
console.log("Area of Circle is : " + Ret);

var obj6 = new Circle(7,3.14);

Ret = obj6.Area();
console.log("Area of Circle is : " + Ret);
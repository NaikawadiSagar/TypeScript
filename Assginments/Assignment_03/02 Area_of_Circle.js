var Circle = /** @class */ (function () {
    function Circle(r, p) {
        this.Radius = r;
        this.Pi = p;
    }
    Circle.prototype.Area = function () {
        var Res = 0;
        Res = this.Pi * this.Radius * this.Radius;
        return Res;
    };
    return Circle;
}());
var obj5 = new Circle(5, 3.14);
var Ret = 0;
Ret = obj5.Area();
console.log("Area of Circle is : " + Ret);
var obj6 = new Circle(7, 3.14);
Ret = obj6.Area();
console.log("Area of Circle is : " + Ret);

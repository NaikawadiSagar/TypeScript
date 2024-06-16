var Arr = [10, 20, 70, 40, 50];
var Max = 0;
for (var i = 0; i < Arr.length; i++) {
    if (Arr[i] >= Max) {
        Max = Arr[i];
    }
}
console.log(Max);

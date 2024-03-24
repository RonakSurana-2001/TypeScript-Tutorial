var func1 = function (a, b) {
    console.log(a + b);
};
var func2 = function (obj) {
    console.log(obj.name, obj.age);
};
func2({
    name: "ronak",
    age: 22
});

//函数嵌套函数
1.

function f1(a, fn) {
    fn(a)
}
var n = 10;
var myFun = function(a) {
    console.log(a)
}

f1(n, myFun)
// 等价于
f1(n, function(n) {
	console.log(n)
})
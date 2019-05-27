1. 遍历循环重用代码
Object.keys().forEach(item=>{
  // ..to do something
})
//
2. function fn(a,callback) {
	callback(a)
}
等价于
var a = 10;
var callback = function(a){
	console.log(a)
}
fn(a,callback)

# JavaScript专题之实现原生方法

## js 实现原生indexOf方法();
### 要不找返回-1
### 算法效率尽量高
### 不要使用正则,indexOf,slice,substring,substr,contain等现成的方法
look代码吧。

```js
	function add () {
	var args = [].slice.call(arguments);//这里也用到了闭包的概念对args的存储

	var fn = function () {
	    var arg_fn = [].slice.call(arguments); //这里的递归是为了合并参数
	    return add.apply(null, args.concat(arg_fn));
	}

	fn.valueOf = function() {
	    return args.reduce((a, b) => a + b);//真正的输出是valueof
	}
		return fn;
	}
```





# JavaScript专题之算法

## 算法

### 实现数组reverse方法

look代码吧。
```js
	  // 实现reverse的思路
    var arr = [3, 2, 1, 4, 5];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            var temp = null;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    console.log(arr);
```






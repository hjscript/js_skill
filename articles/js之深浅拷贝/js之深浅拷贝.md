# JavaScript专题之深浅拷贝

## js简单深拷贝的实现方法

look代码吧。

```js 
// 简单方式的深拷贝
function deepCopy(oldObj, newObj){
  var copyObj = newObj || []
  for (var key in oldObj) { // 遍历要赋值的原对象的key值
    // 判断是否是对象
    if(oldObj.hasOwnProperty(key) ){
      // 判断是否有属性值
      if(oldObj && typeof oldObj[key] === "object"){
        // 递归循环
        copyObj[key] = (oldObj[key].constructor === Array) ? [] : {};      
        copyObj[key] = deepCopy(oldObj[key],copyObj[key])
      }else{ 
        // 如果是基本类型直接赋值
        copyObj[key] = oldObj[key]
      }
    }
  }
  // 返回新的被扩展对象
  return copyObj;
};
```

```js 
// 实现类似jQuery.extend的方法 
function extend() {
  var target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false,
      options, name, src, copy, copyIsArray, clone;

  if ( typeof target === "boolean" ) {
    deep = target;
    target = arguments[ i ] || {};
    i++;
  }

  if ( typeof target !== "object") {
    target = {};
  }
 
  if ( i === length ) {
    target = this;
    i--;
  }

  for ( ; i < length; i++ ) {

    if ( ( options = arguments[ i ] ) != null ) {

      for ( name in options ) {
        src = target[ name ];
        copy = options[ name ];
        
        if ( target === copy ) {
          continue;
        }
        if ( deep && copy && (typeof copy ==='object' ||
          ( copyIsArray = Array.isArray( copy ) ) ) ) {

          if ( copyIsArray ) {
            copyIsArray = false;
            clone = src && Array.isArray( src ) ? src : [];

          } else {
            clone = src && typeof src  === 'object' ? src : {};
          }
          target[ name ] = extend( deep, clone, copy );

        } else if ( copy !== undefined ) {
          target[ name ] = copy;
        }
      }
    }
  }
  return target;
};

```



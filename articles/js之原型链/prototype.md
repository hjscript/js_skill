# JavaScript专题之prototype

## prototype面试部分代码

look代码吧。

```js
	   function Parent() {
          this.a = 1;
          this.b = [1, 2, this.a];
          this.c = { demo: 5 };
          this.show = function () {
              console.log(this.a , this.b , this.c.demo );
          }
      }
      function Child() {
          this.a = 2;
          this.change = function () {
              this.b.push(this.a);
              this.a = this.b.length;
              this.c.demo = this.a++;
          }
      }
      Child.prototype = new Parent(); 
      var parent = new Parent();
      var child1 = new Child();
      var child2 = new Child();
      child1.a = 11;
      child2.a = 12;
      parent.show();
   	  child1.show();  
      child2.show();   
      child1.change();
      child2.change();
      parent.show();  
      child1.show();  
      child2.show();  // this.a , this.b , this.c.demo  =>
```

```js
  		var F=function(){};

  		Object.prototype.a=function(){

  		console.log('a()')

  		};

  		Function.prototype.b=function(){

  		console.log('b()')

  		}

  		var f=new F();

  		f.a()   
  		f.b()   
  		F.a()            
  		F.b()   
```
```js
      function Base(name){
          this.sex = 0;
          this.name = name || 'base';
          this.hello = function(){
              console.log("hello " + name);
          };
      }
      Base.prototype.say = function(){
          console.log('name:'+this.name);
      };
      function Extend(name,num){
          Base.call(this,name);
          this.num = num || 0;
      }
      Extend.prototype = new Base();
      Extend.prototype.constructor = Extend;

      var one = new Extend('one',2);
      one.sex=12;
      console.log(Extend.__proto__);  
      console.log(one instanceof Extend);  
      console.log(one instanceof Base);   
      console.log(one.constructor === Extend);  
      console.log(one.__proto__ === Extend.prototype);  
      
      console.log(one.name);  
      console.log(one.sex);  
      console.log(one.num); 
      console.log(one);  
      one.say();  
      one.hello();
```

```js
    	function Foo(){

    		getName=function(){alert(1)};

    		return this;
    					
    	}

    	Foo.getName=function(){alert(2)};

    	Foo.prototype.getName=function(){alert(3)};

    	var getName=function(){ alert(4)};

    	function getName(){alert(5)};

    	//请写出一下输出结果

    	Foo.getName();   

    	getName();   

    	Foo().getName();  

    	getName();  

    	new Foo.getName();  

    	new new Foo().getName();   
	```
  ```
  https://zhuanlan.zhihu.com/p/22989691  参考文档
  1,实例中为什么不能修改原型基础类型的值？
  答案:访问原型中基本值类型时访问的是它的映射副本，对基本值类型的修改只在这个实例下有用
  为了避免超类型构造函数不会重写子类型的属性，可以在调用超类型构造函数后，再添加应该再子类型中定义的属性和方法
  https://www.cnblogs.com/psxiao/p/11372163.html

  2,js中的原型属性为什么可以做到动态地更新从而将属性的变化同步到所有的实例中
  为什么原型中地属性可以做到动态更新，why。
 * 之所以能够在实例中访问到原型中的属性
 * 是由于在实例中prototype属性的存在
 * 当我们在实例中访问一个属性时，它的搜索顺序时以下这样：
 * 首先在实例中搜索。如果找到，那么停止搜搜。
 * 如果找不到，如果找不到，如果找不到，那么就去原型中寻找。
 * 这就是原型属性可以做到动态更新的原因。好像还不明白。
 * 即如果在实例中没有找到这个属性，那么一定回去原型中去寻找。
 * 所以，改变的属性一定会表现出来。其实这么说，还不够深度。
 * 假如，假如，每个实例访问的只是原型的一个副本呢？
 * 那么。原型属性的更新就不会同步到所有的实例上，这才切中要点。
 * 所有的实例是通过指针访问原型而不是通过副本访问原型。
 * 也就是说，原型只有一个，而副本机制有很多个

  https://blog.csdn.net/qq_23143555/article/    details/81168831
  ```


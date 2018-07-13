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


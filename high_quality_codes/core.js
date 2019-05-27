// 分析源码技巧(https://www.jianshu.com/p/b63ec30eefdd=>promise)
// 1,先分析执行过程整体结构
// 2,被调用的次数多少可以知道哪行代码或者函数比较重要

1.if (then === self.then && newValue instanceof Promise)
// 如果结果是一个Promise(有可能是判断的重点在后半句))
2.function reject(self, newValue) {
  //设置reject状态和理由
  self._state = 2; //(一般这种语句是为了设置状态)
  self._value = newValue; //(一般这种语句是为了设置状态)
  if (Promise._onReject) {
    Promise._onReject(self, newValue); //过程回调通知
  }
  finale(self); //结束 
}
// 一般函数定义状态为了确保某个条件只执行一次
3.function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    // 如果done 为true 则return
    if (done) return;
    done = true;
    // 回调执行 resolve()
    resolve(promise, value);
  }, function (reason) {
    // 如果done 为true 则return
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  // res为truCallTwo()的返回值
  // 如果done没有完成 并且 res 是 `IS_ERROR`的情况下
  // 也会执行reject()，同时让done完成
  if (!done &&res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}
4,// 当新的值存在，类型是对象或者函数的时候(类似这种或的语句的会分成多个逻辑)
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
   //判断是否有then函数(对象的情况)
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      // 没有的话直接报错
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise // 如果结果是一个Promise(函数的情况)
    ) {
      self._state = 3; 
      self._value = newValue;
      finale(self); // 那么采用这个Promise的结果
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self); // 如果是函数，则继续调用doResolve
      return;
    }
  }
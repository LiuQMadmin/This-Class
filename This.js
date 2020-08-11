
// this的指向问题，在运行时候绑定的，他的上下文取决于调用条件
{
  /**
   * 四种绑定规则
   * 1. 默认绑定规则 默认指向window
   */
  /**
   * 对象的属性的方式调用这个方法，this指向obj,谁调用就就指向谁
   */
  obj = {
    a: 2,
    foo: function () {
      // console.log(this); //obj这个对象
      function test() {
        // console.log(this); //window,独立调用直接指向window
      }
      test();
      (function () {
        // console.log(this); //立即执行函数this指向window
      })();
    }
  }
  obj.foo();
}
{
  // 什么是闭包：当函数执行的时候导致函数被定义并抛出，这时候会产生闭包
  obj = {
    a: 1,
    fo: function () {
      function test() {
        // console.log(this)
      }
      return test;
    }
  }
  obj.fo()(); //相当于函数独立调用，指向window
}

{
  /**
   * 隐式绑定规则
   */
  var a = 0;
  function foo() {
    // console.log(this);
  }
  var obj = {
    a: 2,
    foo: foo
  }
  var bar = obj.foo;
  bar(); //bar就是一个函数，这里bar()算是独立执行，this为window
}

{
  var a = 0;
  function foo(a, b, c) {
    console.log(this, "thisssss"); // 指向window,独立调用
    console.log(this.a);
  }
  // 父函数有能力改变子函数的this指向
  // call、apply、bind区别就是传参的方式不同
  function bar(fn) {
    fn.call(obj, 1, 2, 3); //强行让fn指向obj,foo的this指向obj
    // obj.fn(1, 2, 3) //指向window
    // fn.bind(obj)(1, 2, 3);
    // fn.apply(obj,[1, 2, 3]);
    // 以上三种调用方式this的执行都是obj
  }
  var obj = {
    a: 2,
    foo: foo
  }
  // 预编译的过程中，实参被赋值为形参，（值的拷贝过程，浅拷贝）
  bar(obj.foo);
  let arr = [1, 2, 3, 4, 5, 7, 6];
  arr.forEach(function (item, index, arr) {
    console.log(item);
    console.log(this);
  }, obj);
}

{
  // 显示绑定：call、apply、bind

}
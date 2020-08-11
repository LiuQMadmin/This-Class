// ES6-class -类和对象
// 1. 定义方式
// 2. 继承extends和super
// 3. get和set
// 4. 静态属性和方法
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHi() {
            console.log(this.name);
        }
    }
    var Per = new Person("小王八", 28);
    console.log(Per.name);
    Per.sayHi();
    // 实现类继承Person的方法和属性
    class Student extends Person {
        constructor(name, age, score) {
            super(name, age);  //调用父类的constructor方法
            this.score = score;
        }
    }
    var stu = new Student("张三", 25, 85);
    stu.sayHi();
}
// set和get方法的使用，拦截对属性的存值和取值
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        set Age(age) {
            // 设置一个拦截器，限制年龄
            if (age > 100) {
                this.age = 1;
                return;
            }
            this.age = age;
        }
        get Age() {
            return this.age;
        }
        // 静态方法，可以直接使用类名进行调用 Person.sayHi();
        static sayHi() {
            console.log("adadad");
        }
    }
    var Per = new Person("李四", "36"); //实例化一下
    Per.Age = 10; //这种方式直接调用set Age方法
    console.log(Per.Age);
    // 静态属性，这个不需要new实例化
    Person.type = "type static";
    console.log(Person.type);
    Person.sayHi();
}